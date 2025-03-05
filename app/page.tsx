import Link from "next/link";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSearch } from "@/components/home/hero-search";
import { PropertyRecommendations } from "@/components/home/property-recommendations";
import { VideoSection } from "@/components/home/video-section";
import { NewsSection } from "@/components/home/news-section";
import { Newsletter } from "@/components/home/newsletter";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSearch />

        <PropertyRecommendations />

        <VideoSection />

        <NewsSection />

        <Newsletter />
      </main>
    </div>
  );
}
