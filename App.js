import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import WelcomeScreen from './screens/WelcomeScreen'
import UserScreen from './screens/UserScreen'

const BottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return <NavigationContainer>
    <BottomTabNavigator.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#3c0a6b'},
      headerTintColor: 'white',
      tabBarActiveTintColor: '#3c0a6b'
    }}>
      <BottomTabNavigator.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          )
        }} 
      />
      <BottomTabNavigator.Screen 
        name="User" 
        component={UserScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person" color={color} size={size} />
          )
        }} 
      />
    </BottomTabNavigator.Navigator>
  </NavigationContainer>;
}
