import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet
} from 'react-native';
import RecipeButton from '../../components/RecipeButton';
import recipeData from '../../../recipeData.json';

function CategoryHomeScreen({ route, navigation }) {
  console.log("recipeList: category=" + route)
  return (
    <SafeAreaView style={styles.view}>
      <FlatList
        data={recipeData.filter((item) => item.category == route.params.name).map(({ id, name, category, desc, image }) => ({ id, name, category, desc, image }))}
        renderItem={({ item }) => (
          <RecipeButton
            recipe = { item }
            event = {() => { navigation.navigate('Recipe', { screen: 'RecipeHomeTab', params: item }) }}
          />
        )}
      />
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
  }
});

export default CategoryHomeScreen;