"use client";
import { useCallback, useEffect, useState } from "react";

export type ThemeName = "light" | "dark" | string;

export default function useTheme(defaultTheme: ThemeName = "light") {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme);

  // initialize theme on mount
  useEffect(() => {
    try {
      const stored =
        typeof window !== "undefined" ? localStorage.getItem("theme") : null;
      if (stored) {
        setThemeState(stored);
        document.documentElement.setAttribute("data-theme", stored);
        return;
      }

      const htmlTheme = document.documentElement.getAttribute("data-theme");
      if (htmlTheme) {
        setThemeState(htmlTheme);
        return;
      }

      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      const initial = prefersDark ? "dark" : defaultTheme;
      setThemeState(initial);
      document.documentElement.setAttribute("data-theme", initial);
    } catch (e) {
      setThemeState(defaultTheme);
      try {
        document.documentElement.setAttribute("data-theme", defaultTheme);
      } catch {}
    }
  }, [defaultTheme]);

  // Setter that updates DOM + localStorage + state
  const setTheme = useCallback((name: ThemeName) => {
    try {
      document.documentElement.setAttribute("data-theme", name);
      localStorage.setItem("theme", name);
      setThemeState(name);
    } catch (e) {
      console.warn("setTheme failed", e);
      setThemeState(name);
    }
  }, []);

  // Toggle between 'dark' and 'light' safely using functional update
  const toggle = useCallback(() => {
    setThemeState((prev) => {
      const current = (prev ?? defaultTheme) as ThemeName;
      const next: ThemeName = current === "dark" ? "light" : "dark";
      try {
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
      } catch (e) {
        console.warn("toggle set failed", e);
      }
      return next;
    });
  }, [defaultTheme]);

  return { theme, setTheme, toggle } as {
    theme: ThemeName;
    setTheme: (name: ThemeName) => void;
    toggle: () => void;
  };
}
