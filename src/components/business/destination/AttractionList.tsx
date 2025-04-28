import { Card } from '@/components/ui/card'

interface Attraction {
  id: string
  name: string
  description: string
  imageUrl: string
}

interface AttractionListProps {
  attractions: Attraction[]
}

export function AttractionList({ attractions }: AttractionListProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">景点推荐</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {attractions.map((attraction) => (
          <Card key={attraction.id} className="overflow-hidden">
            <img
              src={attraction.imageUrl}
              alt={attraction.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{attraction.name}</h3>
              <p className="mt-2 text-muted-foreground">{attraction.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
