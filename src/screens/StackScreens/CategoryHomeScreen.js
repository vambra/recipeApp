import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Button,
  View
} from 'react-native';
import RecipeButton from './../../components/RecipeButton';
import recipeData from '../../../recipeData.json';

function CategoryHomeScreen({ route, navigation }) {
  return (
    <SafeAreaView style={styles.view}>

      <View style={styles.list}>
        <FlatList
          data={recipeData.filter((item) => item.category == route.params.name).map(({ id, name, category, desc, image }) => ({ id, name, category, desc, image }))}
          renderItem={({ item }) => (
            <RecipeButton
              recipe={item}
              event={() => { navigation.navigate('RecipeHome', item) }}
            />
          )}
        />
      </View>

      <View style={styles.buttonArea}>
        <Button title='Comments' onPress={() => { navigation.navigate('RecipeComments', route) }} />
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  list: {
    height: '90%'
  },
  buttonArea: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'stretch'
  },
});

export default CategoryHomeScreen;