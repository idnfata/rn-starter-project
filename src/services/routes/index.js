import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  PaySlipScreen,
  AttendanceHistoriessScreen,
  LeaveHistoriesScreen,
  OvertimeHistoriesScreen,
} from '../../pages';

import {colors, darkTheme, lightTheme} from '../../utils';
import {StackProfileScreen, StackAuthScreen} from './stack';
import {BottomTabs} from './bottom-tabs';
import DrawerContent from './drawer-contents';
import {
  IconHistory,
  IconHome,
  IconLate,
  IconOvertime,
  IconPaySlip,
  IconUser,
} from '../../assets';
import {Alert, Dimensions, useWindowDimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AuthKEY, getEmployeeByEmail} from '../api';
import jwt from 'react-native-pure-jwt';
import {
  getTheme,
  getUserToken,
  removeUserToken,
  setUser,
  switchTheme,
} from '../redux/action';

//Component Stack taruh di tab (menu bawah)
//Component Tab taruh di drawer
const Drawer = createDrawerNavigator();

const Router = () => {
  const initialState = useSelector(reducer => reducer.GlobalReducer);
  const {isLogin, userInfo, theme} = initialState;
  const [userToken, setUserToken] = useState(false);
  const dimensions = useWindowDimensions();
  const dispatch = useDispatch();

  //cek, jika tidak punya token, render AuthStack
  //jika punya token, render drawer
  useEffect(() => {
    getUserToken()
      .then(token => {
        //ada token di async storage
        if (token) {
          // console.log('ada token: ', token);
          //get theme setting
          getTheme().then(value => {
            // console.log(value);
            switch (value) {
              case 'light':
                dispatch(switchTheme(lightTheme));
                break;
              case 'dark':
                dispatch(switchTheme(darkTheme));
                break;
              default:
                dispatch(switchTheme(lightTheme));
                break;
            }
          });
          setTimeout(
            () =>
              jwt
                .decode(token, AuthKEY, {
                  skipValidation: false, // to skip signature and exp verification
                })
                .then(res => {
                  // console.log(res);
                  //get employee data by email from res.payload.email
                  getEmployeeByEmail(token, res.payload.email)
                    .then(value => {
                      console.log(value);
                      dispatch(setUser(value.data));
                      setUserToken(true);
                    })
                    .catch(err => {
                      setUserToken(true);
                      console.log(err.response.data.message);
                      //ada token tapi tidak ada data karyawan
                      Alert.alert('Login Failed', err.response.data.message);
                      dispatch(removeUserToken());
                      setUserToken(false);
                    });
                })
                .catch(err => {
                  // dispatch(logoutUser()).catch(err => err);
                  //jika token tidak valid, set ada token, tapi hapus tokennya
                  setUserToken(true);
                  console.log('errornya', err);
                  Alert.alert('Login Failed', err.message);
                  dispatch(removeUserToken());
                  setUserToken(false);
                }),
            1800,
          );
        } else {
          console.log('kdada token');
          setUserToken(false);
        }
      })
      .catch(err => {
        console.log('token tak dapat: ');
        console.log(err);
        setUserToken(false);
      });

    console.log('userToken: ', userToken);
    console.log('isLogin: ', isLogin);
    // console.log('userInfo: ', userInfo);
  }, [isLogin]);

  if (!userToken) {
    return <StackAuthScreen />;
  } else {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <DrawerContent {...props} />}
        drawerContentOptions={{
          itemStyle: {
            marginHorizontal: 0,
            marginVertical: 0,
            borderRadius: 0,
            paddingHorizontal: 15,
          },
          activeTintColor: colors.default,
        }}
        drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
        drawerStyle={{
          width: Dimensions.get('window').width * 0.75,
        }}>
        <Drawer.Screen
          name="Home"
          component={BottomTabs}
          options={{
            drawerIcon: ({color, size}) => (
              <IconHome height={size} width={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={StackProfileScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <IconUser height={size} width={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Slip Gaji"
          component={PaySlipScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <IconPaySlip height={size} width={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Riwayat Kehadiran"
          component={AttendanceHistoriessScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <IconHistory height={size} width={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Riwayat Cuti"
          component={LeaveHistoriesScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <IconLate height={size} width={size} fill={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Riwayat Lembur"
          component={OvertimeHistoriesScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <IconOvertime height={size} width={size} fill={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
};

export default Router;
