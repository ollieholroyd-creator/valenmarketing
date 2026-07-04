"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft, Trash2 } from "lucide-react";
import { Product, Category, Platform } from "@/lib/types";
import { categories, platforms } from "@/lib/data";
import { createProduct, updateProduct, deleteProduct, generateUniqueSlug } from "@/lib/store";
import { ImageUploader } from "./ImageUploader";
import { ScoreSlider } from "./ScoreSlider";
import { ListEditor } from "./ListEditor";
import { Toggle } from "./Toggle";
import { Button } from "@/components/ui/Button";
import { ValenScore } from "@/components/ui/ValenScore";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProductFormProps {
  existingProduct?: Product;
}

const platformMeta: Record<Platform, { label: string; emoji: string; color: string; placeholder: string }> = {
  tiktok: { label: "TikTok", emoji: "♪", color: "#FF0050", placeholder: "https://tiktok.com/@you/video/…" },
  instagram: { label: "Instagram", emoji: "📷", color: "#E1306C", placeholder: "https://instagram.com/p/…" },
  youtube: { label: "YouTube", emoji: "▶", color: "#FF0000", placeholder: "https://youtube.com/watch?v=…" },
  pinterest: { label: "Pinterest", emoji: "📌", color: "#E60023", placeholder: "https://pinterest.com/pin/…" },
  facebook: { label: "Facebook", emoji: "👥", color: "#1877F2", placeholder: "https://facebook.com/…" },
};

export function ProductForm({ existingProduct }: ProductFormProps) {
  const router = useRouter();
  const isEditing = !!existingProduct;

  const [name, setName] = useState(existingProduct?.name ?? "");
  const [brand, setBrand] = useState(existingProduct?.brand ?? "");
  const [category, setCategory] = useState<Category>(existingProduct?.category ?? "tech");
  const [price, setPrice] = useState(existingProduct?.price ?? "");
  const [onSale, setOnSale] = useState(existingProduct?.onSale ?? false);
  const [salePrice, setSalePrice] = useState(existingProduct?.salePrice ?? "");
  const [amazonLink, setAmazonLink] = useState(existingProduct?.amazonLink ?? "");
  const [images, setImages] = useState<string[]>(existingProduct?.images ?? []);

  const [shortReview, setShortReview] = useState(existingProduct?.shortReview ?? "");
  const [fullReview, setFullReview] = useState(existingProduct?.fullReview ?? "");
  const [valenVerdict, setValenVerdict] = useState(existingProduct?.valenVerdict ?? "");
  const [whyIRecommend, setWhyIRecommend] = useState(existingProduct?.whyIRecommend ?? "");

  const [performance, setPerformance] = useState(existingProduct?.scores.performance ?? 8);
  const [value, setValue] = useState(existingProduct?.scores.value ?? 8);
  const [quality, setQuality] = useState(existingProduct?.scores.quality ?? 8);
  const [easeOfUse, setEaseOfUse] = useState(existingProduct?.scores.easeOfUse ?? 8);

  const [pros, setPros] = useState<string[]>(existingProduct?.pros?.length ? existingProduct.pros : [""]);
  const [cons, setCons] = useState<string[]>(existingProduct?.cons?.length ? existingProduct.cons : [""]);

  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>(existingProduct?.platforms ?? []);
  const [platformLinks, setPlatformLinks] = useState<Partial<Record<Platform, string>>>(
    existingProduct?.platformLinks ?? {}
  );

  const [trending, setTrending] = useState(existingProduct?.trending ?? false);
  const [featured, setFeatured] = useState(existingProduct?.featured ?? false);

  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const overall = Number(((performance + value + quality + easeOfUse) / 4).toFixed(1));

  const togglePlatform = (p: Platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  const updatePlatformLink = (p: Platform, url: string) => {
    setPlatformLinks((prev) => ({ ...prev, [p]: url }));
    if (url.trim() && !selectedPlatforms.includes(p)) {
      setSelectedPlatforms((prev) => [...prev, p]);
    }
  };

  const validate = (): string[] => {
    const errs: string[] = [];
    if (!name.trim()) errs.push("Product name is required.");
    if (!brand.trim()) errs.push("Brand is required.");
    if (!price.trim()) errs.push("Price is required.");
    if (!amazonLink.trim()) errs.push("Amazon affiliate link is required.");
    if (images.length === 0) errs.push("At least one product image is required.");
    if (!shortReview.trim()) errs.push("Short review is required.");
    return errs;
  };

  const buildProductData = (): Omit<Product, "id"> => {
    const cleanPros = pros.map((p) => p.trim()).filter(Boolean);
    const cleanCons = cons.map((c) => c.trim()).filter(Boolean);
    const cleanLinks: Partial<Record<Platform, string>> = {};
    selectedPlatforms.forEach((p) => {
      if (platformLinks[p]?.trim()) cleanLinks[p] = platformLinks[p];
    });

    return {
      slug: existingProduct
        ? generateUniqueSlug(name, existingProduct.id)
        : generateUniqueSlug(name),
      name: name.trim(),
      brand: brand.trim(),
      category,
      price: price.trim(),
      images,
      shortReview: shortReview.trim(),
      fullReview: fullReview.trim() || shortReview.trim(),
      valenVerdict: valenVerdict.trim() || shortReview.trim(),
      pros: cleanPros.length ? cleanPros : ["Great product"],
      cons: cleanCons.length ? cleanCons : ["None noted yet"],
      whyIRecommend: whyIRecommend.trim() || shortReview.trim(),
      scores: { performance, value, quality, easeOfUse, overall },
      platforms: selectedPlatforms,
      platformLinks: cleanLinks,
      amazonLink: amazonLink.trim(),
      trending,
      onSale,
      salePrice: onSale && salePrice.trim() ? salePrice.trim() : undefined,
      featured,
      latest: !isEditing,
      tags: [category, brand.toLowerCase()].filter(Boolean),
      publishedAt: existingProduct?.publishedAt ?? new Date().toISOString(),
    };
  };

  const handleSave = () => {
    const errs = validate();
    setErrors(errs);
    if (errs.length > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setSaving(true);
    const data = buildProductData();

    let saved: Product | undefined;
    if (isEditing) {
      saved = updateProduct(existingProduct.id, data);
    } else {
      saved = createProduct(data);
    }

    setSaving(false);
    if (saved) {
      router.push(`/admin?saved=${saved.slug}`);
    }
  };

  const handleDelete = () => {
    if (!existingProduct) return;
    if (confirm(`Delete "${existingProduct.name}"? This can't be undone.`)) {
      deleteProduct(existingProduct.id);
      router.push("/admin?deleted=1");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to products
          </Link>
          <h1 className="text-3xl font-black text-text">
            {isEditing ? `Edit ${existingProduct.name}` : "Add a new product"}
          </h1>
          <p className="text-text-secondary text-sm mt-1">
            {isEditing
              ? "Update the details below — changes save instantly."
              : "Fill in the details below. Should take under two minutes."}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isEditing && (
            <Button variant="danger" onClick={handleDelete}>
              <Trash2 className="w-4 h-4" />
              Delete
            </Button>
          )}
          <Button variant="primary" onClick={handleSave} disabled={saving}>
            <Save className="w-4 h-4" />
            {saving ? "Saving…" : isEditing ? "Save changes" : "Publish product"}
          </Button>
        </div>
      </div>

      {errors.length > 0 && (
        <div className="bg-sale/10 border border-sale/30 rounded-2xl p-4 mb-6">
          <p className="text-sm font-semibold text-sale mb-2">Please fix the following:</p>
          <ul className="space-y-1">
            {errors.map((e) => (
              <li key={e} className="text-sm text-text-secondary">• {e}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">

          <FormSection title="Product images" subtitle="Upload photos directly from your computer.">
            <ImageUploader images={images} onChange={setImages} />
          </FormSection>

          <FormSection title="Basic information">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Product name" required>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sony WH-1000XM5"
                  className="form-input"
                />
              </Field>
              <Field label="Brand" required>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="Sony"
                  className="form-input"
                />
              </Field>
            </div>

            <Field label="Category" required>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCategory(c.id as Category)}
                    className={cn(
                      "px-3 py-2 rounded-xl text-sm border transition-all duration-150 flex items-center gap-1.5",
                      category === c.id
                        ? "bg-accent/10 border-accent/40 text-accent-bright"
                        : "bg-surface-3 border-border text-text-secondary hover:text-text"
                    )}
                  >
                    <span>{c.emoji}</span>
                    {c.label}
                  </button>
                ))}
              </div>
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Price" required>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="£349.00"
                  className="form-input"
                />
              </Field>
              <Field label="Amazon affiliate link" required>
                <input
                  type="url"
                  value={amazonLink}
                  onChange={(e) => setAmazonLink(e.target.value)}
                  placeholder="https://amazon.co.uk/dp/…"
                  className="form-input"
                />
              </Field>
            </div>
          </FormSection>

          <FormSection title="Your review">
            <Field label="Short review" hint="Shown on the product card (1–2 sentences)" required>
              <textarea
                value={shortReview}
                onChange={(e) => setShortReview(e.target.value)}
                placeholder="The best noise-cancelling headphones I've ever tested."
                rows={2}
                className="form-input resize-none"
              />
            </Field>
            <Field label="Full review" hint="Shown on the product page — go in depth">
              <textarea
                value={fullReview}
                onChange={(e) => setFullReview(e.target.value)}
                placeholder="Write your in-depth thoughts here…"
                rows={6}
                className="form-input resize-none"
              />
            </Field>
            <Field label="Valen Verdict" hint="One punchy closing line">
              <input
                type="text"
                value={valenVerdict}
                onChange={(e) => setValenVerdict(e.target.value)}
                placeholder="The definitive noise-cancelling headphone. No compromises."
                className="form-input"
              />
            </Field>
            <Field label="Why I recommend it">
              <textarea
                value={whyIRecommend}
                onChange={(e) => setWhyIRecommend(e.target.value)}
                placeholder="Tell your audience why this earned a spot on VALEN…"
                rows={3}
                className="form-input resize-none"
              />
            </Field>
          </FormSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormSection title="Pros">
              <ListEditor items={pros} onChange={setPros} placeholder="e.g. Excellent battery life" addLabel="Add a pro" />
            </FormSection>
            <FormSection title="Cons">
              <ListEditor items={cons} onChange={setCons} placeholder="e.g. Expensive price point" addLabel="Add a con" />
            </FormSection>
          </div>

          <FormSection
            title="Featured platforms"
            subtitle="Paste a link to your post — the platform is selected automatically."
          >
            <div className="space-y-3">
              {platforms.map((p) => {
                const meta = platformMeta[p.id as Platform];
                const isSelected = selectedPlatforms.includes(p.id as Platform);
                return (
                  <div
                    key={p.id}
                    className={cn(
                      "flex items-center gap-3 border rounded-xl p-3 transition-all duration-150",
                      isSelected ? "border-accent/30 bg-accent/5" : "border-border bg-surface-3"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => togglePlatform(p.id as Platform)}
                      className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-base border border-white/10"
                      style={{ backgroundColor: meta.color + "22" }}
                      aria-label={`Toggle ${meta.label}`}
                    >
                      {meta.emoji}
                    </button>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-text mb-1">{meta.label}</p>
                      <input
                        type="url"
                        value={platformLinks[p.id as Platform] ?? ""}
                        onChange={(e) => updatePlatformLink(p.id as Platform, e.target.value)}
                        placeholder={meta.placeholder}
                        className="w-full bg-surface-2 border border-border rounded-lg px-3 py-1.5 text-xs text-text placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </FormSection>
        </div>

        <div className="space-y-6">
          <FormSection title="Valen Score" subtitle="Drag each slider — overall score updates live.">
            <div className="space-y-4">
              <ScoreSlider label="Performance" value={performance} onChange={setPerformance} />
              <ScoreSlider label="Value" value={value} onChange={setValue} />
              <ScoreSlider label="Quality" value={quality} onChange={setQuality} />
              <ScoreSlider label="Ease of Use" value={easeOfUse} onChange={setEaseOfUse} />
            </div>
          </FormSection>

          <ValenScore scores={{ performance, value, quality, easeOfUse, overall }} />

          <FormSection title="Status">
            <Toggle
              checked={trending}
              onChange={setTrending}
              label="🔥 Trending"
              description="Appears on the Trending page"
            />
            <div className="border-t border-border" />
            <Toggle
              checked={onSale}
              onChange={setOnSale}
              label="💸 On Sale"
              description="Appears on the On Sale page"
            />
            {onSale && (
              <div className="pt-1 pb-2">
                <Field label="Sale price">
                  <input
                    type="text"
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
                    placeholder="£279.00"
                    className="form-input"
                  />
                </Field>
              </div>
            )}
            <div className="border-t border-border" />
            <Toggle
              checked={featured}
              onChange={setFeatured}
              label="⭐ Featured"
              description="Appears in Featured Products on homepage"
            />
          </FormSection>
        </div>
      </div>

      <div className="sticky bottom-4 mt-8 flex justify-end">
        <div className="bg-surface-2 border border-border rounded-2xl shadow-card-hover p-2 flex items-center gap-2">
          <Link href="/admin">
            <Button variant="ghost" size="md">Cancel</Button>
          </Link>
          <Button variant="primary" size="md" onClick={handleSave} disabled={saving}>
            <Save className="w-4 h-4" />
            {saving ? "Saving…" : isEditing ? "Save changes" : "Publish product"}
          </Button>
        </div>
      </div>

      <style jsx global>{`
        .form-input {
          width: 100%;
          background: #1e1e24;
          border: 1px solid #2a2a35;
          border-radius: 0.75rem;
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          color: #f8f8ff;
          outline: none;
          transition: border-color 0.15s;
        }
        .form-input::placeholder {
          color: #5c5c78;
        }
        .form-input:focus {
          border-color: rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  );
}

function FormSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-surface-2 border border-border rounded-2xl p-5">
      <div className="mb-4">
        <h2 className="text-sm font-bold text-text">{title}</h2>
        {subtitle && <p className="text-xs text-text-muted mt-0.5">{subtitle}</p>}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary mb-1.5">
        {label}
        {required && <span className="text-sale">*</span>}
      </label>
      {children}
      {hint && <p className="text-[11px] text-text-muted mt-1">{hint}</p>}
    </div>
  );
}
