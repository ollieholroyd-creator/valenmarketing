"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ProductForm } from "@/components/admin/ProductForm";

export default function NewProductPage() {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    fetch("/api/auth/check")
      .then((r) => r.json())
      .then((d) => { if (!d.isAdmin) router.replace("/login"); else setOk(true); });
  }, [router]);

  if (!ok) return <div className="min-h-screen flex items-center justify-center text-text-secondary text-sm">Checking access…</div>;
  return <ProductForm />;
}
