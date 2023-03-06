import { useCallback } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native"
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'



export const Post = ({post, onOpen}) =>{


   const [loadedFonts] = useFonts({
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



   return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)} >
      <View style={styles.post} onLayout={onLayoutRootView}  >
            <ImageBackground style={styles.img} source={{uri:post.img}} >
               <View style={styles.textWrap} >
                  <Text style={styles.title} >
                     {new Date(post.date).toLocaleDateString()}
                  </Text>
               </View>
            </ImageBackground>
         </View>
      </TouchableOpacity>
   
   )
}

const styles = StyleSheet.create({
   post:{
      marginBottom:15,
      overflow:'hidden',
   },
   img:{
      width:'100%',
      height:200
   },
   textWrap:{
      backgroundColor:'rgba (0,0,0, .5)',
      paddingVertical: 5,
      alignItems:'center',
      width:'100%'
   },
   title:{
      color:'#fff',
      fontFamily:'OpenRegular',
      fontSize:17
   }  
})
