"use client";

import dynamic from "next/dynamic";

const StackingCards = dynamic(() => import("./StackingCards"), {
  ssr: false,
});

interface Capability {
  num: string;
  title: string;
  description: string;
  features: string[];
}

interface StackingCardsWrapperProps {
  items: Capability[];
}

export default function StackingCardsWrapper({ items }: StackingCardsWrapperProps) {
  return <StackingCards items={items} />;
}
