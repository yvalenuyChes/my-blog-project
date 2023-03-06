import { Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Platform } from 'react-native'
import { MainScreen } from './src/screens/MainScreen'
import { PostScreen } from './src/screens/PostScreen'
import {BookmarkedScreen} from './src/screens/BookmarkedScreen'
import {CreateScreen} from './src/screens/CreateScreen'
import {AboutScreen} from './src/screens/AboutScreen'
import { THEME } from './src/THEME'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from './src/components/AppHeaderIcon'




export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
          headerRight: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon} >
          <Item title='Take photo' iconName='ios-camera' onPress={() => console.log('press')} />
        </HeaderButtons>
      }} >
        <Stack.Screen name='Мой блог' component={MainScreen}  />
        <Stack.Screen 
          name='Posts' 
          component={PostScreen} 
          options={
            
            ({route}) => ({
              title:`Пост от ${new Date (route.params.date).toLocaleDateString()}`, 
              //! there add options for header
            })
          }
          
          />
          
        <Stack.Screen name='Избранное' component={BookmarkedScreen}  />
        <Stack.Screen name='Создать пост' component={CreateScreen}  />
        <Stack.Screen name='Подробнее' component={AboutScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const style = StyleSheet.create({
  text:{
    color:'#fff'
  }
})
