"use client";

import { useState, useEffect, useCallback } from "react";
import { Product } from "./types";
import { getAllProducts } from "./store";

/**
 * Reactive hook for reading the full product list from local storage.
 * Re-fetches whenever the store changes (via the `valen:products-changed`
 * custom event, dispatched by store mutation functions) or on window focus.
 */
export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loaded, setLoaded] = useState(false);

  const refresh = useCallback(() => {
    setProducts(getAllProducts());
    setLoaded(true);
  }, []);

  useEffect(() => {
    refresh();
    const handler = () => refresh();
    window.addEventListener("valen:products-changed", handler);
    window.addEventListener("focus", handler);
    return () => {
      window.removeEventListener("valen:products-changed", handler);
      window.removeEventListener("focus", handler);
    };
  }, [refresh]);

  return { products, loaded, refresh };
}
