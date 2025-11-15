"use client";
import { useRef, useEffect } from "react";

export default function AutoResizeTextarea({ value, onChange, ...props }: any) {
  const ref = useRef<any>(null);

  const resize = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  useEffect(resize, [value]);

  return (
    <textarea
      {...props}
      ref={ref}
      value={value}
      onChange={(e) => {
        resize();
        onChange && onChange(e);
      }}
      className={`overflow-hidden resize-none ${props.className || ""}`}
      rows={1}
    />
  );
}
