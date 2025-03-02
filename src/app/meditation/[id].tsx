import { router, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

import { meditations } from '@/data'

const MeditationDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  const { top } = useSafeAreaInsets()

  const meditation = meditations.find((m) => m.id === Number(id))

  if (!meditation) return <Text>Meditation not found</Text>

  return (
    <SafeAreaView>
      <AntDesign
        onPress={() => router.back()}
        name='close'
        size={24}
        color='black'
      />
      <Text>
        {meditation?.title}: {top}
      </Text>
    </SafeAreaView>
  )
}

export default MeditationDetails
