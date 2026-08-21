import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import InvestHero from "@/components/sections/investasi/InvestHero";
import InvestSummary from "@/components/sections/investasi/InvestSummary";
import InvestWhyUs from "@/components/sections/investasi/InvestWhyUs";
import InvestMarket from "@/components/sections/investasi/InvestMarket";
import InvestWhyNow from "@/components/sections/investasi/InvestWhyNow";
import InvestTraction from "@/components/sections/investasi/InvestTraction";
import InvestFinancials from "@/components/sections/investasi/InvestFinancials";
import InvestBusinessModel from "@/components/sections/investasi/InvestBusinessModel";
import InvestCompetitiveAdvantage from "@/components/sections/investasi/InvestCompetitiveAdvantage";
import InvestGrowthStrategy from "@/components/sections/investasi/InvestGrowthStrategy";
import InvestOpportunity from "@/components/sections/investasi/InvestOpportunity";
import InvestCompany from "@/components/sections/investasi/InvestCompany";
import InvestTeam from "@/components/sections/investasi/InvestTeam";
import InvestPartners from "@/components/sections/investasi/InvestPartners";
import InvestMilestones from "@/components/sections/investasi/InvestMilestones";
import InvestFAQCTA from "@/components/sections/investasi/InvestFAQCTA";

export const metadata = {
  title: "Investor Relations | Baracode Tech Solution",
  description: "Invest in the future of digital transformation with Baracode Tech Solution.",
};

export default function InvestasiPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />
      <main className="pb-24">
        <InvestHero />
        <InvestSummary />
        <InvestWhyUs />
        <InvestMarket />
        <InvestWhyNow />
        <InvestTraction />
        <InvestFinancials />
        <InvestBusinessModel />
        <InvestCompetitiveAdvantage />
        <InvestGrowthStrategy />
        <InvestOpportunity />
        <InvestCompany />
        <InvestTeam />
        <InvestPartners />
        <InvestMilestones />
        <InvestFAQCTA />
      </main>
      <Footer />
    </div>
  );
}
