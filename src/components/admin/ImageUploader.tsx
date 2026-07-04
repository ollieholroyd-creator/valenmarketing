"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Upload, X, Star } from "lucide-react";
import { filesToCompressedDataUrls } from "@/lib/imageUpload";
import { cn } from "@/lib/utils";

interface ImageUploaderProps {
  images: string[];
  onChange: (images: string[]) => void;
}

export function ImageUploader({ images, onChange }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setProcessing(true);
    const dataUrls = await filesToCompressedDataUrls(files);
    onChange([...images, ...dataUrls]);
    setProcessing(false);
  };

  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  const makeMain = (index: number) => {
    if (index === 0) return;
    const next = [...images];
    const [item] = next.splice(index, 1);
    next.unshift(item);
    onChange(next);
  };

  return (
    <div>
      {/* Drop zone */}
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          handleFiles(e.dataTransfer.files);
        }}
        className={cn(
          "border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200",
          dragOver
            ? "border-accent/60 bg-accent/5"
            : "border-border hover:border-accent/40 hover:bg-surface-2"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <Upload className="w-6 h-6 text-text-muted mx-auto mb-3" />
        <p className="text-sm text-text-secondary font-medium">
          {processing ? "Processing images…" : "Click to upload or drag images here"}
        </p>
        <p className="text-xs text-text-muted mt-1">
          PNG, JPG, or WEBP. The first image becomes the main product photo.
        </p>
      </div>

      {/* Previews */}
      {images.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden border border-border bg-surface-2 group"
            >
              <Image src={src} alt={`Upload ${i + 1}`} fill className="object-cover" unoptimized />
              {i === 0 && (
                <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  <Star className="w-2.5 h-2.5" fill="white" />
                  Main
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                {i !== 0 && (
                  <button
                    type="button"
                    onClick={() => makeMain(i)}
                    className="bg-white/90 text-black text-[10px] font-semibold px-2 py-1 rounded-md hover:bg-white"
                  >
                    Set main
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="bg-sale/90 text-white p-1 rounded-md hover:bg-sale"
                  aria-label="Remove image"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
