import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface TransportItem {
  type: string
  description: string
}

interface AccommodationItem {
  type: string
  description: string
}

interface TransportAccommodationProps {
  transportation: TransportItem[]
  accommodation: AccommodationItem[]
}

export function TransportAccommodation({
  transportation,
  accommodation,
}: TransportAccommodationProps) {
  return (
    <Card className="p-6">
      <Tabs defaultValue="transport">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="transport">交通</TabsTrigger>
          <TabsTrigger value="accommodation">住宿</TabsTrigger>
        </TabsList>
        <TabsContent value="transport">
          <div className="space-y-4">
            {transportation.map((item, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                <h3 className="font-semibold">{item.type}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="accommodation">
          <div className="space-y-4">
            {accommodation.map((item, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                <h3 className="font-semibold">{item.type}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
