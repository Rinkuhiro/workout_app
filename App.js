import React,{useState} from 'react';
import Add from './components/Add';
import List from './components/List';
import Settings from './components/Settings';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { WorkoutsContext, DistanceContext } from './context/context';
import {colorBck,colorNav, colorButtonD, colorClear} from './style/style';

const Tab = createBottomTabNavigator();


export default function App() {
  const [workout, setWorkouts] = useState([{
    type: "Bike",
    distance : 15,
    duration : 60,
    day : '2',
    month : '9',
    year : '2023'
  }, {
    type: "Run",
    distance : 10,
    duration : 90,
    day : '12',
    month : '3',
    year : '2024'
  }]);
  const [distanceType, setDistanceType] = useState(true);
  return (
    <DistanceContext.Provider value={{distanceType, setDistanceType}}>
    <WorkoutsContext.Provider value={{workout,setWorkouts}}>
    <NavigationContainer>
      <Tab.Navigator
      
        sceneContainerStyle={{backgroundColor: colorBck}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Add Workout') {
              iconName = focused
                ? 'plus-circle'
                : 'plus-circle-outline';
            } else if (route.name === 'List of Workouts') {
              iconName = focused
                ? 'view-list'
                : 'view-list-outline';
            } else if (route.name === 'Settings') {
            iconName = focused
              ? 'cog'
              : 'cog-outline';
            }
            return <MaterialCommunityIcons
               name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colorClear,
          tabBarInactiveTintColor: colorButtonD,
          tabBarStyle: {
            backgroundColor: colorNav,
          },
          headerStyle: {
            backgroundColor: colorNav,
          }
        })}
      >
        <Tab.Screen name="Add Workout" component={Add} />
        <Tab.Screen name="List of Workouts" component={List} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
    </WorkoutsContext.Provider>
    </DistanceContext.Provider>
  );
}