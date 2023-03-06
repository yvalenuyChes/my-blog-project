import { View, Text, StyleSheet } from "react-native"

export const AboutScreen = () => {
   return(
      <View style={styles.container} >
         <Text>
            AboutScreen
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
