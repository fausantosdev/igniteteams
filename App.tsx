import { useCallback } from 'react'
import { ThemeProvider } from 'styled-components'
import { useFonts } from 'expo-font' 
import * as SplashScreen from 'expo-splash-screen'

import { Groups } from '@screens/Groups'

import { Loading } from './src/components/Loading'

import theme from './src/theme'

import fontRobotoLight from './assets/fonts/Roboto/Roboto-Light.ttf'
import fontRobotoMedium from './assets/fonts/Roboto/Roboto-Medium.ttf'
import fontRobotoBolt from './assets/fonts/Roboto/Roboto-Bold.ttf'

import fontUbuntuLight from './assets/fonts/Ubuntu/Ubuntu-Light.ttf'

import { StatusBar } from 'react-native'

//SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, error] = useFonts({
    'Roboto-Light': fontRobotoLight,
    'Roboto-Medium': fontRobotoMedium,
    'Roboto-Bold': fontRobotoBolt
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
      <StatusBar
        barStyle='light-content'
        backgroundColor={theme.COLORS.GRAY_600}/>
      { fontsLoaded ? <Groups/> : <Loading /> }
    </ThemeProvider>
  )
}