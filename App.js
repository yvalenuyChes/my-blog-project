import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Platform } from 'react-native'
import { PostScreen } from './src/screens/PostScreen'
import {AboutScreen} from './src/screens/AboutScreen'
import { THEME } from './src/THEME'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from './src/components/AppHeaderIcon'
import { TabNavigator } from './src/navigation/TabNavigator'




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
        </HeaderButtons>,
        headerLeft:() =>  <HeaderButtons HeaderButtonComponent={AppHeaderIcon} >
          <Item
            title='Toggle drower'
            iconName='ios-menu'
            onPress={() => console.log('press')}
          />
        </HeaderButtons>
        
      }} >
        <Stack.Screen name='Tabs' component={TabNavigator}  />
        <Stack.Screen name='Подробнее' component={AboutScreen}  />
        <Stack.Screen name='Posts' component={PostScreen}
        options={
          ({route}) => ({
            title:`Пост от ${new Date (route.params.date).toLocaleDateString()}`, 
            //! there add options for header
            headerRight: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon} >
            <Item title='Take photo' iconName={route.params.bookMarked ? 'ios-star' : 'ios-star-outline'} onPress={() => console.log('press')} />
          </HeaderButtons>,
          })
        }
        
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}
