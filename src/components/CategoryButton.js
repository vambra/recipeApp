import React from "react";
import { StyleSheet, Text, Image, Button, TouchableOpacity, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const CategoryButton = ({ category, event }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={event}>
        <View style={styles.icon}>
          <Image
            style={styles.stretch}
            source={{ uri: category.image }}
          />
        </View>
        <View style={styles.caption}>
          <Text style={styles.title}>{category.name}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row'
  },
  caption: {
    flex: 7,
    backgroundColor: 'white',
    padding: 5,
    flexWrap: "wrap",
  },
  title: {
    fontSize: 20
  },
  category: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'right'
  },
  icon: {
    flex: 3,
  },
  stretch: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
  },
});

export default CategoryButton;