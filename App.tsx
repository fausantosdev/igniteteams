import { useCallback } from 'react'
import { useFonts } from 'expo-font' 
import * as SplashScreen from 'expo-splash-screen'

import { ThemeProvider } from 'styled-components'

import { Groups } from '@screens/Groups'

import theme from './src/theme'

import fontRobotoLight from './assets/fonts/Roboto/Roboto-Light.ttf'
import fontUbuntuLight from './assets/fonts/Ubuntu/Ubuntu-Light.ttf'
import { ActivityIndicator } from 'react-native'

//SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, error] = useFonts({
    'Roboto-Light': fontRobotoLight,
    'Ubunto-Light': fontUbuntuLight
  })

  /*const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }*/

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Groups/> : <ActivityIndicator /> }
    </ThemeProvider>
  )
}