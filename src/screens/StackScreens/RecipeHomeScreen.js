import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function RecipeHomeScreen({ navigation, route }) {
  const { id, name, category, desc, image } = route.params;
  return (
    <SafeAreaView style={styles.container}>

      <Image
        style={styles.stretch}
        source={{ uri: image }}
      />

      <View style={styles.textArea}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <View style={styles.scrollView}>
          <ScrollView>
            <Text style={styles.desc}>{desc}</Text>
          </ScrollView>
        </View>
      </View>

      <View style={styles.buttonArea}>
        <Button title='Comments' onPress={() => { navigation.navigate('RecipeComments', route) }} />
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: -1,
    width: '100%',
    flexDirection: 'column',
  },
  textArea: {
    margin: 10,
    paddingBottom: 50,
  },
  title: {
    fontSize: 20
  },
  category: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'right',
    paddingBottom: 10
  },
  desc: {

  },
  stretch: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
  },
  scrollView: {
    paddingBottom: 300,
  },
  buttonArea: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'stretch'
  },
});

export default RecipeHomeScreen;