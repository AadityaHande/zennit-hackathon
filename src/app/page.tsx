import HeroSection from './_components/sections/1-hero';
import FeaturesSection from './_components/sections/2-features';
import DashboardPreviewSection from './_components/sections/3-dashboard-preview';
import SocialProofSection from './_components/sections/4-social-proof';
import CtaSection from './_components/sections/5-cta';

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <DashboardPreviewSection />
      <SocialProofSection />
      <CtaSection />
    </main>
  );
}
