import { View, Text, StyleSheet } from "react-native"

export const CreateScreen = () => {
   return(
      <View style={styles.container} >
         <Text>
            CreateScreen
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
