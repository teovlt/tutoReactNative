import { Stack } from "expo-router";
import "../styles/index.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="movies/[id]"
        options={{
          headerShown: false,
          title: "Movie Details",
        }}
      />
    </Stack>
  );
}
