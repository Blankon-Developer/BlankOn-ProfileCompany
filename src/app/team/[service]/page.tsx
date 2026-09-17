import { servicesTeamData, serviceNames } from "@/lib/team-data";
import TeamClient from "./TeamClient";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { PageHeader } from "@/components/ui/PageHeader";

export function generateStaticParams() {
  return Object.keys(servicesTeamData).map((service) => ({
    service,
  }));
}

export function generateMetadata({ params }: { params: { service: string } }) {
  const serviceName = serviceNames[params.service] || "Tim BlankOn";
  return {
    title: `Tim ${serviceName} | BlankOn Digital Tech`,
    description: `Mengenal lebih dekat tim profesional kami di bidang ${serviceName}.`,
  };
}

export default function TeamServicePage({
  params,
}: {
  params: { service: string };
}) {
  const service = params.service;
  const teamDepartments = servicesTeamData[service] || [];
  const serviceName = serviceNames[service] || "Layanan Tidak Ditemukan";

  if (!servicesTeamData[service]) {
    return (
      <div className="min-h-screen bg-white dark:bg-black/50">
        <Navbar />
        <main className="flex items-center justify-center pt-32 pb-20">
          <h1 className="text-2xl font-semibold">Tim untuk layanan ini belum tersedia.</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black/50">
      <Navbar />
      <main>
        <PageHeader
          tag="Tim Kami"
          title={`Tim ${serviceName}`}
          description={`Orang-orang di balik layar yang menggerakkan inovasi dan memberikan solusi terbaik untuk ${serviceName}.`}
        />
        <TeamClient serviceName={serviceName} teamDepartments={teamDepartments} />
      </main>
      <div className="relative z-10 bg-white dark:bg-black">
        <Footer />
      </div>
    </div>
  );
}
