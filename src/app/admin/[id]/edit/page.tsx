"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Product } from "@/lib/types";
import { getProduct } from "@/lib/store";
import { ProductForm } from "@/components/admin/ProductForm";
import Link from "next/link";

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [product, setProduct] = useState<Product | undefined | null>(undefined);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    fetch("/api/auth/check")
      .then((r) => r.json())
      .then((d) => {
        if (!d.isAdmin) { router.replace("/login"); return; }
        setAuthChecked(true);
        const found = getProduct(id);
        setProduct(found ?? null);
      });
  }, [id, router]);

  if (!authChecked || product === undefined) {
    return <div className="min-h-screen flex items-center justify-center text-text-secondary text-sm">Loading…</div>;
  }

  if (product === null) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <p className="text-5xl mb-4">🔍</p>
        <h1 className="text-xl font-bold text-text mb-2">Product not found</h1>
        <Link href="/admin" className="text-accent hover:text-accent-bright text-sm font-medium">← Back to admin</Link>
      </div>
    );
  }

  return <ProductForm existingProduct={product} />;
}
