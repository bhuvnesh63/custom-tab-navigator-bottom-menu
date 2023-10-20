import { StatusBar }
  from 'expo-status-bar';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { NavigationContainer }
  from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator }
  from '@react-navigation/bottom-tabs';
import Home
  from './screens/Home';
import Contact
  from './screens/Contact';
import Notification
  from './screens/Notification';
import Search
  from './screens/Search';
import { FontAwesome5 }
  from '@expo/vector-icons'
import EmptyScreen
  from './screens/EmptyScreen';
import plus
  from './assets/plus.png'

const tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#2d3142',
            position: "absolute",
            bottom: 40,
            marginHorizontal: 10,
            height: 60,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10
            },
            paddingHorizontal: 20

          },
        }}
      >
        <tab.Screen name={'Home'}
          component={Home} options={{
            // headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{
                position: 'absoulte',
              }}>
                <FontAwesome5 name="home"
                  size={25}
                  color={focused ? 'red' : 'white'}
                >
                </FontAwesome5>
              </View>
            )

          }} ></tab.Screen>


        {

          // Extra tab screen for Action button...
        }

        <tab.Screen name={'Contact'}
          component={Contact}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                position: 'absoulte',
              }}>
                <FontAwesome5 name="phone"
                  size={25}
                  color={focused ? 'red' : 'white'}
                >
                </FontAwesome5>
              </View>
            )
          }} />

        <tab.Screen name={'ActionButton'}
          component={EmptyScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity>
                <View style={{
                  width: 55,
                  height: 55,
                  backgroundColor: 'red',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 30
                }}>
                  <Image source={plus} style={{
                    width: 22,
                    height: 22,
                    tintColor: 'white'
                  }}></Image>
                </View>
              </TouchableOpacity>
            )
          }} />




        <tab.Screen name={'Notification'}
          component={Notification}
          options={{
            // headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <View style={{
                position: 'absoulte',
              }}>
                <FontAwesome5 name="bell"
                  size={25}
                  color={focused ? 'red' : 'white'}
                >
                </FontAwesome5>
              </View>
            )
          }} />
        <tab.Screen name={'Search'}
          component={Search}
          options={{
            // headerShown: false, 
            tabBarIcon: ({ focused }) => (
              <View style={{
                position: 'absoulte',
              }}>
                <FontAwesome5 name="search"
                  size={25}
                  color={focused ? 'red' : 'white'}
                >
                </FontAwesome5>
              </View>
            )
          }} />

      </tab.Navigator>
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
