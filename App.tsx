import { useCallback } from 'react'
import { ThemeProvider } from 'styled-components'
import { useFonts } from 'expo-font' 
import * as SplashScreen from 'expo-splash-screen'

import { Groups } from '@screens/Groups'

import { Loading } from './src/Loading'

import theme from './src/theme'

import fontRobotoLight from './assets/fonts/Roboto/Roboto-Light.ttf'
import fontUbuntuLight from './assets/fonts/Ubuntu/Ubuntu-Light.ttf'

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
      { fontsLoaded ? <Groups/> : <Loading /> }
    </ThemeProvider>
  )
}