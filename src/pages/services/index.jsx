import ServicesTabsMenu from "@/components/Atoms/Tabs/ServicesTabsMenu";
import MobileServiceFormModal from "@/components/Modals/MobileServiceFormModal";
import ServiceHero from "@/components/Hero/ServiceHero";

const Services = () => {
  return (
    <main className="w-full">
      <ServiceHero />
      <MobileServiceFormModal />
      <ServicesTabsMenu />
    </main>
  );
};

export default Services;
