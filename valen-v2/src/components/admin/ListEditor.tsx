"use client";

import { Plus, X } from "lucide-react";

interface ListEditorProps {
  items: string[];
  onChange: (items: string[]) => void;
  placeholder: string;
  addLabel: string;
}

export function ListEditor({ items, onChange, placeholder, addLabel }: ListEditorProps) {
  const updateItem = (index: number, value: string) => {
    const next = [...items];
    next[index] = value;
    onChange(next);
  };

  const removeItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const addItem = () => {
    onChange([...items, ""]);
  };

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <input
            type="text"
            value={item}
            onChange={(e) => updateItem(i, e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-surface-3 border border-border rounded-lg px-3 py-2 text-sm text-text placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors"
          />
          <button
            type="button"
            onClick={() => removeItem(i)}
            className="flex-shrink-0 w-8 h-8 rounded-lg bg-sale/10 border border-sale/20 text-sale hover:bg-sale/20 transition-colors flex items-center justify-center"
            aria-label="Remove"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addItem}
        className="w-full flex items-center justify-center gap-1.5 text-xs text-text-secondary border border-dashed border-border rounded-lg py-2.5 hover:border-accent/40 hover:text-accent transition-colors"
      >
        <Plus className="w-3.5 h-3.5" />
        {addLabel}
      </button>
    </div>
  );
}
