import { Card } from '@/components/ui/card'

interface FoodItem {
  id: string
  name: string
  description: string
  imageUrl: string
}

interface FoodRecommendationProps {
  foods: FoodItem[]
}

export function FoodRecommendation({ foods }: FoodRecommendationProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">美食推荐</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {foods.map((food) => (
          <Card key={food.id} className="flex overflow-hidden">
            <img
              src={food.imageUrl}
              alt={food.name}
              className="h-40 w-40 object-cover"
            />
            <div className="flex-1 p-4">
              <h3 className="text-xl font-semibold">{food.name}</h3>
              <p className="mt-2 text-muted-foreground">{food.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
