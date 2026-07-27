import Hero from "@/components/home/Hero";
import CategoryGap from "@/components/home/CategoryGap";
import PlatformCapabilities from "@/components/home/PlatformCapabilities";
import HowItWorks from "@/components/home/HowItWorks";
import AdoptionFormula from "@/components/home/AdoptionFormula";
import Lifecycle from "@/components/home/Lifecycle";
import WhoItServes from "@/components/home/WhoItServes";
import ResponsibleMaturity from "@/components/home/ResponsibleMaturity";
import ConsultingPreview from "@/components/home/ConsultingPreview";
import Foundation from "@/components/home/Foundation";
import CTASection from "@/components/CTASection";
import AdoptionFoundation from "@/components/home/adoptionfoundation";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGap />
      <PlatformCapabilities />
      <HowItWorks />
      <AdoptionFormula />
      <AdoptionFoundation />
      <Lifecycle />
      <WhoItServes />
      <ResponsibleMaturity />
      <ConsultingPreview />
      <Foundation />
      <CTASection
        title="Enterprise adoption deserves its own operating system."
        description="See how AdoptionOS can help your transformation team replace fragmented adoption work with structured guidance, clear priorities, and a defensible roadmap."
      />
    </>
  );
}
