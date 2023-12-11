import {
  DrawerScreenProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

type DrawerParamList = {
  Home: undefined;
  Setting: undefined;
};

type HomeScreenProps = DrawerScreenProps<DrawerParamList, 'Home'>;

type SettingScreenProps = DrawerScreenProps<DrawerParamList, 'Setting'>;

const Drawer = createDrawerNavigator<DrawerParamList>();

function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="Setting 열기"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
}

function SettingScreen({navigation}: SettingScreenProps) {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        backBehavior="history"
        screenOptions={{
          drawerPosition: 'left',
          drawerActiveTintColor: 'white',
          drawerActiveBackgroundColor: '#fb8c00',
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈'}}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{title: '설정'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
