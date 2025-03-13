import { Image, Text, TouchableOpacity } from "react-native"
import { router } from "expo-router"
import { icons } from "@/constants/icons"

const GoBackButton = () => {
  return (
    <TouchableOpacity
      className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
      onPress={router.back}
    >
      <Image
        source={icons.arrow}
        className="size-5 mr-1 mt-0.5 rotate-180"
        tintColor="#fff"
      />
      <Text className="text-white font-semibold text-base">Go back</Text>
    </TouchableOpacity>
  )
}

export default GoBackButton
