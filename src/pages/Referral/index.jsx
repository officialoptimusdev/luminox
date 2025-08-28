import ReferralForm from "@/components/Forms/ReferralForm";
import ReferralBanner from "@/components/ReferralBanner";



const Referral = () => { 
   return (
      <main className="w-full">
         <ReferralBanner />

         <ReferralForm />

      </main>
  );
};

export default Referral;