import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {IconBack, IconEditUser, IconMenu, IconNotif} from '../../assets';
import {
  ChangePassword,
  Home,
  Login,
  MyProfile,
  ProfileScreen,
  Register,
  SettingsScreen,
  Splash,
  WelcomeAuth,
} from '../../pages';
import {colors} from '../../utils';
import CallAPIAxios from '../../pages/CallAPIAxios';

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SchedulesStack = createStackNavigator();
const AttendancesStack = createStackNavigator();
const RequestsStack = createStackNavigator();
const SettingsStack = createStackNavigator();

export const StackAuthScreen = ({navigation}) => {
  return (
    <AuthStack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <AuthStack.Screen name="CallAPIAxios" component={CallAPIAxios} /> */}
      <AuthStack.Screen name="Splash" component={Splash} />
      <AuthStack.Screen name="WelcomeAuth" component={WelcomeAuth} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

export const StackHomeScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.default,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Overview',
          headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <IconMenu
                width="25"
                height="25"
                fill="white"
                style={{marginLeft: 10}}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}>
              <IconNotif
                width="25"
                height="25"
                fill="white"
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
export const StackSettingsScreen = ({navigation}) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Pengaturan',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            // textAlign: 'center',
            flex: 1,
            color: colors.light,
            fontSize: 18,
            fontWeight: 'bold',
          },
          headerStyle: {
            shadowColor: 'transparent',
            backgroundColor: colors.default,
          },
        }}
      />
      <SettingsStack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          title: 'Profil Saya',
          headerTitleAlign: 'left',

          headerTitleStyle: {
            flex: 1,
            marginLeft: -20,
          },
        }}
      />
      <SettingsStack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          title: 'Ubah Password',
          headerTitleAlign: 'left',

          headerTitleStyle: {
            flex: 1,
            marginLeft: -20,
          },
        }}
      />
    </SettingsStack.Navigator>
  );
};

export const StackProfileScreen = ({navigation}) => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};
