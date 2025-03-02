import { Text, View } from 'react-native'
import { Meditation } from '@/types'

const MeditationListItem = ({ meditation }: { meditation: Meditation }) => {
  return (
    <View className='p-5 border-2 border-gray-300 rounded-2xl'>
      <Text className='font-bold'>{meditation.title}</Text>
    </View>
  )
}

export default MeditationListItem
