import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useLocalSearchParams } from 'expo-router'
import { View, Text, Pressable } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Slider from '@react-native-community/slider'

import { meditations } from '@/data'

const MeditationDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>()
  const meditation = meditations.find((m) => m.id === Number(id))
  if (!meditation) return <Text>Meditation not found</Text>

  return (
    <SafeAreaView className='bg-orange-400 flex-1 p-2 justify-between'>
      {/* HEADER */}
      <View className='flex-1'>
        <View className='flex flex-row items-center justify-between p-10'>
          <AntDesign name='infocirlceo' size={24} color='black' />
          <View className='bg-zinc-800 p-2 rounded-md'>
            <Text className='text-zinc-100 font-semibold'>
              Today's meditation
            </Text>
          </View>
          <AntDesign
            onPress={() => router.back()}
            name='close'
            size={26}
            color='black'
          />
        </View>

        <Text className='text-2xl mt-10 text-center font-semibold text-zinc-800'>
          {meditation?.title}
        </Text>
      </View>

      {/* Play/Pause Button */}
      <Pressable className='bg-zinc-800 self-center w-20 aspect-square rounded-full items-center justify-center '>
        <FontAwesome6 name='play' size={24} color='snow' />
      </Pressable>

      <View className=' flex-1 '>
        {/* FOOTER: PLAYER */}
        <View className='p-5 mt-auto gap-5'>
          <View className='flex flex-row items-center justify-between'>
            <MaterialIcons name='airplay' size={24} color='black' />
            <MaterialCommunityIcons
              name='cog-outline'
              size={24}
              color='#3A3937'
            />
          </View>
          {/* Playback indicatior */}
          <View className=''>
            <Slider
              style={{ width: '100%', height: 40 }}
              value={0.5}
              onSlidingComplete={(value) => console.log(value)}
              onValueChange={(value) => console.log(value)}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor='#3A3937'
              maximumTrackTintColor='#3A393755'
              thumbTintColor='#3A3937'
            />
          </View>
          <View className='flex flex-row justify-between'>
            <Text>03:24</Text>
            <Text>13:04</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MeditationDetails
