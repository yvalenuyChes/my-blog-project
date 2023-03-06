import { View, Text, StyleSheet } from "react-native"

export const PostScreen = ({ route }) => {

   const postId = route.params.postId

   return(
      <View style={styles.container} >
         <Text>
            {postId}
         </Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
   }
})
