import { View, Text, StyleSheet } from "react-native"

export const BookmarkedScreen = () => {
   return(
      <View style={styles.container} >
         <Text>
            BookmarkedScreen
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
