import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CATEGORY,
  DETAIL,
  FAVORITES,
  HOME,
  PERSON,
  SEARCH,
  USER,
} from '../router/routes';
import Favorites from '../screens/favorites';
import Home from '../screens/home';
import Search from '../screens/search';
import Category from '../screens/category';
import Detail from '../screens/detail';
import MyColors from '../theme/MyColors';
import Person from '../screens/person';
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={CATEGORY} component={Category} options={{headerStyle:{
        backgroundColor:MyColors.background
      }}} />
      <Stack.Screen name={FAVORITES} component={Favorites} options={{headerStyle:{
        backgroundColor:MyColors.background
      }}} />
      <Stack.Screen name={SEARCH} component={Search} />
      <Stack.Screen name={PERSON} component={Person} />
      <Stack.Screen
        name={DETAIL}
        component={Detail}
        options={({route}) => ({
          headerShown: false,
          headerTitle: route.params.item.title,
          headerTintColor: MyColors.white,
          headerShadowVisible:false,
          headerStyle: {
            backgroundColor: MyColors.background
          },
        })}
      />
    </Stack.Navigator>
  );
}
