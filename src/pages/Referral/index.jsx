import ReferralForm from "@/components/Forms/ReferralForm";
import ReferralBanner from "@/components/Banners/ReferralBanner";



const Referral = () => { 
   return (
      <main className="w-full">
         <ReferralBanner />

         <ReferralForm />

      </main>
  );
};

export default Referral;