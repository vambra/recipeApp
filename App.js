import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryHomeScreen from './src/screens/StackScreens/CategoryHomeScreen';
import CategoryCommentScreen from './src/screens/StackScreens/CategoryCommentScreen';
import RecipeHomeScreen from './src/screens/StackScreens/RecipeHomeScreen';
import RecipeCommentScreen from './src/screens/StackScreens/RecipeCommentScreen';
import HomeScreen from './src/screens/StackScreens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName={HomeScreen}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CategoryHome" component={CategoryHomeScreen} />
        <Stack.Screen name="CategoryComments" component={CategoryCommentScreen} />
        <Stack.Screen name="RecipeHome" component={RecipeHomeScreen} />
        <Stack.Screen name="RecipeComments" component={RecipeCommentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;