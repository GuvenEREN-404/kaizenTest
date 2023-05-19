import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StatusBar, View} from 'react-native';
import {responsiveHeightScreen} from './utils/Constant';
import Images from './resources/Images';
import Home from './screens/Home';
import Discover from './screens/Discover';
import DahaCuzdan from './screens/DahaCuzdan';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children}: any) => {
  return(
  <View style={{top: -8, justifyContent: 'center', alignItems: 'center'}}>
    <View
      style={{
        width: 70,
        height: 70,
      }}>
      {children}
    </View>
  </View>
  )
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#1D1E1C',
        tabBarStyle: {
          height: responsiveHeightScreen('9px'),
          paddingHorizontal: 5,
          paddingTop: 0,
          paddingBottom: 10,
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          borderTopWidth: 0,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'KEŞFET') {
            iconName = focused ? Images.discover : Images.gray_discover;
          } else if (route.name === 'DAHA CÜZDAN') {
            iconName = focused ? Images.star : Images.gray_star;
          }
          return (
            <Image source={iconName} style={{width: size, height: size}} />
          );
        },
      })}>
      <Tab.Screen name="KEŞFET" component={Discover} />
      <Tab.Screen
        name=" "
        component={Discover}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName = Images.portal;
            return (
              <Image source={iconName} style={{width: 80, height: 80}} />
            );
          },
          tabBarButton:(props)=>{
            return(
              <CustomTabBarButton {...props}/>
            )
          }
        }}
      />
      <Tab.Screen name="DAHA CÜZDAN" component={DahaCuzdan} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
