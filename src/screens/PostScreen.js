import { useCallback } from 'react'
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from "react-native"
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { DATA } from "../data"
import { THEME } from "../THEME"

export const PostScreen = ({ route }) => {

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

   const postId = route.params.postId

   const post = DATA.find(p => p.id === postId)


   const removeHandler = () => {
      Alert.alert(
         'Удаление',
         'Вы точно хотите удалить пост?',
         [
           {
             text: 'Отменить',
             style: 'cancel',
           },
           {
            text: 'Удалить',
            onPress: ()  => {},
            style: 'destructive',
          },
         ],
         {
           cancelable: false,
           onDismiss: () =>
             Alert.alert(
               'This alert was dismissed by tapping outside of the alert dialog.',
             ),
         },
       );
   }

   return(
      <ScrollView  onLayout={onLayoutRootView} >
        <Image source={{uri: post.img}} style={styles.img} />
        <View style={styles.textWrap} >
         <Text style={styles.title} >{post.text}</Text>
        </View>
        <View>
            <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </View>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   img:{
      width:'100%',
      height:200
   },
   textWrap:{
      padding:10
   },
   title:{
      fontFamily:'OpenRegular'
   }
})
