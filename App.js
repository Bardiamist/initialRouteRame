import * as React from 'react';
import {
  View,
} from 'react-native';
import {
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import {
  NavigationContainer,
} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const ScreenA = () => <View style={{ flex: 1, backgroundColor: 'white' }}/>;
const ScreenB = () => <View style={{ flex: 1, backgroundColor: 'blue' }}/>;
const ScreenC = () => <View style={{ flex: 1, backgroundColor: 'red' }}/>;

export const TabNavigatorScreen = () => (
  <Tab.Navigator
    lazy
    swipeEnabled={false}
    initialRouteName="routeNameB"
  >
    <Tab.Screen
      name="routeNameA"
      component={ScreenA}
    />
    <Tab.Screen
      name="routeNameB"
      component={ScreenB}
    />
    <Tab.Screen
      name="routeNameC"
      component={ScreenC}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigatorScreen />
    </NavigationContainer>
  );
}
