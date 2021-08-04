import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  IconAbout,
  IconDarkMode,
  IconGlobal,
  IconKey,
  IconManualBook,
  IconNotif,
  IconPassword,
  IconRightArrow,
} from '../../assets';
import {onClickLogout, switchTheme} from '../../services';
import {colors, darkTheme, lightTheme} from '../../utils';

const SettingsScreen = ({navigation, route}) => {
  const initialState = useSelector(reducer => reducer.GlobalReducer);
  const dispatch = useDispatch();
  // const [userInfo, setUserInfo] = useState({})
  // const [theme, setCTheme] = useState({})
  const {userInfo, theme} = initialState;
  // const userInfo = useMemo(
  //   () => initialState.userInfo,
  //   [initialState.userInfo],
  // );
  // const theme = useMemo(() => initialState.theme, [initialState.theme]);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar barStyle={theme.statusBarStyle} />

      <View
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <View style={styles.section}>
          <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
            <View style={styles.profileContainer}>
              <Image
                source={{
                  uri: 'https://picsum.photos/200/300',
                }}
                style={styles.avatar}
              />
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>{userInfo.name}</Text>
                <Text style={styles.profileEmail}>{userInfo.email}</Text>
              </View>
              <IconRightArrow width={23} height={23} fill={theme.iconColor} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePassword')}
            style={styles.menuItem}>
            <IconPassword width={25} height={25} fill={theme.iconColor} />

            <Text style={styles.menuItemText}>Ganti Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePassword')}
            style={styles.menuItem}>
            <IconKey width={20} height={20} fill={theme.iconColor} />

            <Text style={styles.menuItemText}>Ganti PIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Aplikasi</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={styles.menuItem}>
            <IconNotif width={25} height={25} fill={theme.iconColor} />

            <Text style={styles.menuItemText}>Notifikasi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={styles.menuItem}>
            <IconGlobal width={22} height={22} fill={theme.iconColor} />

            <Text style={styles.menuItemText}>Bahasa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={styles.appearanceMenu}>
            <View style={styles.menuItem}>
              <IconDarkMode width={25} height={25} fill={theme.iconColor} />
              <Text style={styles.menuItemText}>Tampilan</Text>
            </View>
            <View style={styles.toggleAppearance}>
              <Text style={{fontSize: 10}}>
                {theme.mode === 'light' ? 'Terang' : 'Gelap'}
              </Text>
              <Switch
                value={theme.mode === 'light' ? false : true}
                onValueChange={() =>
                  theme.mode === 'light'
                    ? dispatch(switchTheme(darkTheme))
                    : dispatch(switchTheme(lightTheme))
                }
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lainnya</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={styles.menuItem}>
            <IconAbout width={22} height={22} fill={theme.iconColor} />

            <Text style={styles.menuItemText}>Tentang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={styles.menuItem}>
            <IconManualBook width={22} height={22} fill={theme.iconColor} />

            <Text style={styles.menuItemText}>Panduan Penggunaan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.appVersion}>
          <Text style={styles.textAppVersion}>PBKMMobile</Text>
          <Text style={styles.numberAppVersion}>Versi 0.1</Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(onClickLogout())}>
          <Text style={styles.logoutButton}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 20,
    height: 100,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 75,
    borderColor: colors.light,
    borderWidth: 3,
  },
  profileInfo: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
  },
  profileName: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
    color: colors.dark,
  },
  profileEmail: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '100',
    color: colors.disable,
  },
  section: {
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  sectionTitle: {
    paddingBottom: 3,
    paddingTop: 15,
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dark,
  },
  appearanceMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleAppearance: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
  },
  appVersion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  textAppVersion: {
    color: colors.dark,
    fontWeight: 'bold',
    fontSize: 12,
  },
  numberAppVersion: {
    color: colors.dark,
    fontSize: 12,
  },
  logoutButton: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'red',
    fontWeight: 'bold',
    paddingVertical: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'red',
  },

  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    marginHorizontal: 15,
  },
  menuItemText: {
    color: colors.dark,
    marginLeft: 15,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 26,
  },
});
