import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BookmarkedScreen } from "../screens/BookmarkedScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CreateScreen } from "../screens/CreateScreen";
import { MainScreen } from "../screens/MainScreen";

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
   return(
      <Tab.Navigator
      screenOptions={({route}) =>({
         tabBarIcon:({focused, color, size}) => {
            let iconName

            if(route.name === 'mainScreen'){
               iconName = focused
               ? 'home-sharp'
               : 'ios-home-outline'
            }else if(route.name === 'Create'){
               iconName = focused
               ? 'ios-create'
               : 'ios-create-outline'
            }else{
               iconName = focused
               ? 'bookmark'
               : 'bookmark-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
         }
      })
         
      }
      >
         <Tab.Screen name="mainScreen" component={MainScreen} />
         <Tab.Screen 
         name="Create" 
         component={CreateScreen}
          />
         <Tab.Screen name="Booked" component={BookmarkedScreen} />
      </Tab.Navigator>
   )
  
}
 