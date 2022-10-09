import React from "react";
import { StyleSheet, Text, Image, Button, TouchableOpacity, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const CommentsButton = ({ event }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonArea}>
      <TouchableOpacity onPress={event}>
        <Text>Comments</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
    padding: 10
  },
  buttonArea: {
    backgroundColor: 'red'
  },
  text: {

  },
});

export default CommentsButton;