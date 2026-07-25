"use client";

import { QuoteProvider } from "@/context/QuoteContext";
import QuoteModal from "@/components/modals/QuoteModal";

export default function QuoteModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuoteProvider>
      {children}
      <QuoteModal />
    </QuoteProvider>
  );
}