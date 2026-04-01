import React from "react";
import HomePage from "./pages/HomePage";
import { LanguageProvider } from "../../hooks/useLanguage";

export default function App() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}