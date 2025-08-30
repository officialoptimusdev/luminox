import InformedConsentBanner from "@/components/Banners/InformedConsentBanner"
import InformedConsentForm from "@/components/Forms/InformedConsentForm"



const InformedConsentContract = () => {
  return (
    <main className="w-full">
      <InformedConsentBanner />
      <InformedConsentForm />
    </main>
  )
}

export default InformedConsentContract
