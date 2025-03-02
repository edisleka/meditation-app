import { Text, View, Pressable } from 'react-native'
import { Meditation } from '@/types'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link } from 'expo-router'

const MeditationListItem = ({ meditation }: { meditation: Meditation }) => {
  return (
    // <Link
    //   href={`/meditation/${meditation.id}`}
    //   asChild
    // >
    <Link
      href={{
        pathname: '/meditation/[id]',
        params: { id: meditation.id.toString() },
      }}
      asChild
    >
      <Pressable className='flex flex-row gap-5 items-center'>
        <View className='p-2'>
          <FontAwesome name='check-circle' size={20} color='green' />
        </View>

        <View className='p-5 py-8 border-2 border-gray-300 rounded-2xl flex-1'>
          <Text className='font-bold text-lg mb-2'>{meditation.title}</Text>
          <View className='flex flex-row items-center gap-1'>
            <FontAwesome6 name='clock' size={16} className='gray' />
            <Text className='text-gray-600'>{meditation.duration} min</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  )
}

export default MeditationListItem
