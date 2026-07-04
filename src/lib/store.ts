"use client";

// VALEN — Local product store
//
// Development-time persistence layer. Wraps the seed product data with
// localStorage so the admin interface can create, edit, and delete
// products without a backend. When a real database is wired up, this
// file is the only place that needs to change — every page consumes
// products through these functions, never through `lib/data.ts` directly.

import { Product } from "./types";
import { products as seedProducts } from "./data";

const STORAGE_KEY = "valen_products_v1";
const DELETED_KEY = "valen_deleted_seed_ids_v1";

function isBrowser() {
  return typeof window !== "undefined";
}

function readOverrides(): Product[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Product[]) : [];
  } catch {
    return [];
  }
}

function writeOverrides(products: Product[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function readDeletedSeedIds(): string[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(DELETED_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeDeletedSeedIds(ids: string[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(DELETED_KEY, JSON.stringify(ids));
}

/**
 * Returns the full merged product list:
 * seed products (minus any the user deleted) + locally created/edited products.
 * Locally-stored products with an id matching a seed product override it (edit).
 */
export function getAllProducts(): Product[] {
  const overrides = readOverrides();
  const deletedSeedIds = new Set(readDeletedSeedIds());
  const overrideIds = new Set(overrides.map((p) => p.id));

  const remainingSeed = seedProducts.filter(
    (p) => !deletedSeedIds.has(p.id) && !overrideIds.has(p.id)
  );

  return [...overrides, ...remainingSeed].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getProduct(id: string): Product | undefined {
  return getAllProducts().find((p) => p.id === id);
}

export function getProductBySlugLocal(slug: string): Product | undefined {
  return getAllProducts().find((p) => p.slug === slug);
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "product";
}

export function generateUniqueSlug(name: string, excludeId?: string): string {
  const base = slugify(name);
  const existing = getAllProducts().filter((p) => p.id !== excludeId);
  let slug = base;
  let i = 2;
  while (existing.some((p) => p.slug === slug)) {
    slug = `${base}-${i}`;
    i++;
  }
  return slug;
}

function notifyChanged() {
  if (isBrowser()) {
    window.dispatchEvent(new CustomEvent("valen:products-changed"));
  }
}

/** Create a new product. Returns the saved product (with generated id). */
export function createProduct(product: Omit<Product, "id">): Product {
  const overrides = readOverrides();
  const id = `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const newProduct: Product = { ...product, id };
  writeOverrides([newProduct, ...overrides]);
  notifyChanged();
  return newProduct;
}

/** Update an existing product (seed or local). Saves a local override. */
export function updateProduct(id: string, updates: Partial<Product>): Product | undefined {
  const current = getProduct(id);
  if (!current) return undefined;

  const updated: Product = { ...current, ...updates, id };
  const overrides = readOverrides();
  const filtered = overrides.filter((p) => p.id !== id);
  writeOverrides([updated, ...filtered]);
  notifyChanged();
  return updated;
}

/** Delete a product. Works for both seed and locally-created products. */
export function deleteProduct(id: string) {
  const overrides = readOverrides();
  const isLocal = overrides.some((p) => p.id === id);

  if (isLocal) {
    writeOverrides(overrides.filter((p) => p.id !== id));
  } else {
    // It's a seed product — mark it as deleted so it stops appearing.
    const deleted = readDeletedSeedIds();
    if (!deleted.includes(id)) {
      writeDeletedSeedIds([...deleted, id]);
    }
  }
  notifyChanged();
}

/** Reset all local changes back to the original seed data. */
export function resetToSeedData() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.localStorage.removeItem(DELETED_KEY);
  notifyChanged();
}

/** Whether the user has made any local changes (for showing a banner, etc). */
export function hasLocalChanges(): boolean {
  return readOverrides().length > 0 || readDeletedSeedIds().length > 0;
}
