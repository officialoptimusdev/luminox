import AuthorizationConsentBanner from "@/components/Banners/AuthorizationConsentBanner"
import AuthorizationReleaseForm from "@/components/Forms/AuthorizationReleaseForm"




const AuthorizationConsentContract = () => {
  return (
    <main className="w-full">
      <AuthorizationConsentBanner />
      <AuthorizationReleaseForm />
    </main>
  )
}

export default AuthorizationConsentContract
