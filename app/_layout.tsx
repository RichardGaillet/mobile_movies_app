import { StatusBar } from "react-native"
import { Stack } from "expo-router"
import "./globals.css"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="movies/[id]"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="collections/[id]"
        options={{ headerShown: false }}
      />
    </Stack>
  )
}
