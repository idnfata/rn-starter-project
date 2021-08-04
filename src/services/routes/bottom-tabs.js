import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackSettingsScreen, StackHomeScreen} from './stack';
import {colors} from '../../utils';
import {
  IconBack,
  IconCalendar,
  IconHistory,
  IconHome,
  IconSetting,
  IconTask,
} from '../../assets';

const Tab = createBottomTabNavigator();
//tampilkan bottom tabs di component berikut ini:
export function BottomTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.default,
      }}>
      <Tab.Screen
        name="Home"
        component={StackHomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconHome width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Jadwal"
        component={StackSettingsScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconCalendar width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Kehadiran"
        component={StackSettingsScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconHistory width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pengajuan"
        component={StackSettingsScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconTask width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pengaturan"
        component={StackSettingsScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconSetting width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
