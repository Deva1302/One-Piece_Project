import CodeNexHeader from "@/components/CodeNexHeader";
import RecruitmentHero from "@/components/RecruitmentHero";
import DomainsSection from "@/components/DomainsSection";
import TimelineSection from "@/components/TimelineSection";
import CodeNexFooter from "@/components/CodeNexFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CodeNexHeader />
      <main>
        <RecruitmentHero />
        {/* <DomainsSection />
        <TimelineSection /> */}
      </main>
      {/* <CodeNexFooter /> */}
    </div>
  );
};

export default Index;
