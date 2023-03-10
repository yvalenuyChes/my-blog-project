import { useCallback } from 'react'
import { View, StyleSheet, FlatList } from "react-native"
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { DATA } from '../data'
import { Post } from '../components/Post'



export const MainScreen = ({navigation}) => {


  const [loadedFonts] = useFonts({
    OpenBold: require('../../assets/fonts/OpenSans/OpenSans-Bold.ttf'),
    OpenRegular: require('../../assets/fonts/OpenSans/OpenSans-Regular.ttf')
  })


  const onLayoutRootView = useCallback(async () => {
    if (!loadedFonts) {
      await SplashScreen.hideAsync()
    }
  }, [loadedFonts]);

  if (!loadedFonts) {
    return null;
  }

  const openPostHandler = post =>{
   navigation.navigate('Posts', {postId: post.id, date: post.date, bookMarked: post.booked})
  }


   return(
      <View style={styles.wrapper} onLayout={onLayoutRootView}  >
         <FlatList data={DATA} keyExtractor={post => post.id.toString()} renderItem={({item}) => {
            return <Post post={item} onOpen={openPostHandler} />
         }} />
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper:{
      padding: 10,
   },
   text:{
      fontFamily:'OpenBold',
      fontSize:25
   }
})
