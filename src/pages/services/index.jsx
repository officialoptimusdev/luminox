import TabsMenu from "@/components/Atoms/TabsMenu";
import MobileServiceFormModal from "@/components/Modals/MobileServiceFormModal";
import ServiceHero from "@/components/ServiceHero";

const Services = () => {
  return (
    <main className="w-full">
      <ServiceHero />
      <MobileServiceFormModal />
      <TabsMenu />
    </main>
  );
};

export default Services;
