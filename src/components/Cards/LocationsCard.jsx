import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export default function LocationsCard() {
  const locations = [
    { name: "Mental Health Services", place: "Washington DC" },
    { name: "Mental Health Services", place: "Maryland" },
    { name: "Luminox Health Care", place: "Virginia" },
  ]

  return (
    <Card className="w-full rounded-2xl shadow-md mt-10">
      <CardHeader>
        <CardTitle className="text-lg sm:text-center lg:text-start font-semibold text-gray-800">
          Locations:
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start gap-1 text-gray-700"
            >
              <p className="text-base font-medium">{loc.name}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{loc.place}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
