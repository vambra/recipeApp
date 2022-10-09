import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const recipeData = {
  "id": 0,
  "name": "Pumpkin Soup",
  "category": "Soup",
  "desc": "Pumpkin soup. ",
  "image": "https://dishingouthealth.com/wp-content/uploads/2020/09/ThaiPumpkinSoup_Styled.jpg"
};

function RecipeHomeScreen({ navigation, route }) {
  
  const { id, name, category, desc, image } = route.params;
  console.log("recipe: ", id, name, category, desc, image);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.stretch}
        source={{ uri: image }}
      />
      <View style={styles.textArea}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.desc}>{desc}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  textArea: {
    margin: 10
  },
  title: {
    fontSize: 20
  },
  category: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'right'
  },
  desc: {

  },
  stretch: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
  },
  scrollView: {
    paddingBottom: 50,
  },
});

export default RecipeHomeScreen;