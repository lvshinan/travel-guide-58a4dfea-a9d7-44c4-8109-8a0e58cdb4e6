import { AttractionList } from '@/components/business/destination/AttractionList'
import { DestinationHeader } from '@/components/business/destination/DestinationHeader'
import { FoodRecommendation } from '@/components/business/destination/FoodRecommendation'
import { Reviews } from '@/components/business/destination/Reviews'
import { TransportAccommodation } from '@/components/business/destination/TransportAccommodation'
import { TravelTips } from '@/components/business/destination/TravelTips'
import type { Destination } from '@/types/destination'

// 示例数据
const destinationData: Destination = {
  id: '1',
  name: '丽江古城',
  description: '丽江古城是一座具有800多年历史的古城，是中国罕见的保存完好的少数民族古城。',
  imageUrl: 'https://images.unsplash.com/photo-1609742046972-206c9af613b4',
  season: '春季和秋季（3-5月，9-11月）',
  transportation: [
    {
      type: '飞机',
      description: '丽江三义机场距离古城约27公里，可乘坐机场大巴或打车前往。',
    },
    {
      type: '火车',
      description: '丽江火车站距离古城约8公里，可乘坐公交车或打车前往。',
    },
  ],
  accommodation: [
    {
      type: '客栈',
      description: '古城内有众多富有纳西特色的客栈，价格从100-500元不等。',
    },
    {
      type: '酒店',
      description: '古城周边有多家星级酒店，适合追求舒适度的游客。',
    },
  ],
  attractions: [
    {
      id: 'a1',
      name: '四方街',
      description: '丽江古城的中心广场，是纳西族传统文化活动的重要场所。',
      imageUrl: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6',
    },
    {
      id: 'a2',
      name: '木府',
      description: '丽江木氏土司府邸，展现了丽江历史上的辉煌。',
      imageUrl: 'https://images.unsplash.com/photo-1599571235376-4ba7c3626ab9',
    },
    {
      id: 'a3',
      name: '黑龙潭公园',
      description: '观赏玉龙雪山倒影的最佳地点，园内景色优美。',
      imageUrl: 'https://images.unsplash.com/photo-1599571235407-2d8c465dcd0c',
    },
  ],
  food: [
    {
      id: 'f1',
      name: '纳西火腿',
      description: '丽江特产，具有独特的风味和悠久的历史。',
      imageUrl: 'https://images.unsplash.com/photo-1599571235391-6b0b4e94b1c8',
    },
    {
      id: 'f2',
      name: '丽江粑粑',
      description: '纳西族传统小吃，外酥内软，味道香甜。',
      imageUrl: 'https://images.unsplash.com/photo-1599571235384-4e7b8e0c8b0a',
    },
  ],
  tips: [
    {
      id: 't1',
      title: '最佳游玩时间',
      content: '建议避开雨季（6-8月）和旺季（春节、国庆），春秋两季最适合游玩。',
    },
    {
      id: 't2',
      title: '防高原反应',
      content: '丽江海拔2400米，初到需要适应1-2天，多喝水，避免剧烈运动。',
    },
  ],
  reviews: [
    {
      id: 'r1',
      userName: '旅行者小王',
      content: '古城的夜景非常美，建议晚上一定要去四方街感受一下古城的热闹氛围。',
      rating: 5,
      date: '2024-02-15',
    },
    {
      id: 'r2',
      userName: '背包客阿明',
      content: '住在古城里的客栈很有特色，但要注意选择，有些地方可能比较吵。',
      rating: 4,
      date: '2024-02-10',
    },
  ],
}

export default function HomePage() {
  return (
    <div className="container mx-auto space-y-8 py-8">
      <DestinationHeader
        name={destinationData.name}
        description={destinationData.description}
        imageUrl={destinationData.imageUrl}
        season={destinationData.season}
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AttractionList attractions={destinationData.attractions} />
        </div>
        <div>
          <TransportAccommodation
            transportation={destinationData.transportation}
            accommodation={destinationData.accommodation}
          />
        </div>
      </div>

      <FoodRecommendation foods={destinationData.food} />
      <TravelTips tips={destinationData.tips} />
      <Reviews reviews={destinationData.reviews} />
    </div>
  )
}
