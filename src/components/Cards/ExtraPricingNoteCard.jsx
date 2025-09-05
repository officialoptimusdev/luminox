import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const ExtraPricingNoteCard = () => {
  return (
    <Card className="w-full rounded-2xl shadow-md mt-10">
      <CardHeader>
        <CardTitle className="text-sm font-semibold text-gray-500">
          Get In Touch:
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800 text-base font-medium mb-2">
          Didn’t See Your Plan?
        </p>
        <p className="text-sm text-gray-600">
          Reach out to us here{" "}
          <a href="/contact" className="text-blue-600 underline">
            Contact Us
          </a>
          , and we’d be happy to fit you in.
        </p>
      </CardContent>
    </Card>
  )
}

export default ExtraPricingNoteCard
