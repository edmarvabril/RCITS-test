import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Browse from './screens/Browse';
import Read from './screens/Read';
import Me from './screens/Me';
import Content from './screens/Content';
import {palette} from './constants/colors';

const AppStack = createStackNavigator();
function ReadStack() {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Read" component={Read} />
      <AppStack.Screen name="Content" component={Content} />
    </AppStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Browse') {
            iconName = 'library';
          } else if (route.name === 'Read') {
            iconName = 'book';
          } else if (route.name === 'Me') {
            iconName = 'person';
          }

          return (
            <Icon
              name={iconName}
              color={focused ? palette.red : palette.lightblue}
              size={24}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          return (
            <Text style={{color: focused ? palette.red : palette.lightblue}}>
              {route.name}
            </Text>
          );
        },
      })}>
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Read" component={ReadStack} />
      <Tab.Screen name="Me" component={Me} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
