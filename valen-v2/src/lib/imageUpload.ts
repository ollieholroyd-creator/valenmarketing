"use client";

// VALEN — Image upload helper
//
// Converts uploaded image files into compressed base64 data URLs so they
// can be stored in localStorage and rendered immediately on product pages.
// Images are downscaled to a max dimension and re-encoded as JPEG to keep
// localStorage usage reasonable (the quota is typically 5–10MB per origin).

const MAX_DIMENSION = 1200;
const JPEG_QUALITY = 0.82;

export function fileToCompressedDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("File is not an image"));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Failed to decode image"));
      img.onload = () => {
        let { width, height } = img;

        if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
          if (width > height) {
            height = Math.round((height / width) * MAX_DIMENSION);
            width = MAX_DIMENSION;
          } else {
            width = Math.round((width / height) * MAX_DIMENSION);
            height = MAX_DIMENSION;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas not supported"));
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", JPEG_QUALITY));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export async function filesToCompressedDataUrls(files: FileList | File[]): Promise<string[]> {
  const fileArray = Array.from(files);
  const results: string[] = [];
  for (const file of fileArray) {
    try {
      const dataUrl = await fileToCompressedDataUrl(file);
      results.push(dataUrl);
    } catch {
      // Skip files that fail to process (e.g. non-image files dropped in)
    }
  }
  return results;
}
