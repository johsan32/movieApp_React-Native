import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Category from '../screens/category';
import Favorites from '../screens/favorites';
import {CATEGORY, FAVORITES, WATCHING} from '../router/routes';
import StackNavigator from './stackNavigator';
import Icon from 'react-native-vector-icons/AntDesign';
import Play from 'react-native-vector-icons/MaterialCommunityIcons';
import MyColors from '../theme/MyColors';
import Watching from '../screens/watching';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: MyColors.warning,
        tabBarInactiveTintColor: MyColors.error,
        tabBarStyle: {
          backgroundColor: MyColors.background,
        },
      }}>
      <Tab.Screen
        name="{HOME}"
        component={StackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={CATEGORY}
        component={Category}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="appstore-o" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={WATCHING}
        component={Watching}
        options={{
          tabBarIcon: ({color, size}) => (
            <Play name="movie-open-play" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={FAVORITES}
        component={Favorites}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="hearto" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
