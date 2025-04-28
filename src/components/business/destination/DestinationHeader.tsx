import { Card } from '@/components/ui/card'

interface DestinationHeaderProps {
  name: string
  description: string
  imageUrl: string
  season: string
}

export function DestinationHeader({ name, description, imageUrl, season }: DestinationHeaderProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[400px] w-full">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="mt-2 text-lg">{description}</p>
          <div className="mt-4 inline-block rounded-full bg-primary/80 px-4 py-2">
            推荐游玩季节: {season}
          </div>
        </div>
      </div>
    </Card>
  )
}
