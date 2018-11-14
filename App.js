import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Root, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Subtitle } from 'native-base';

import HomeScreen from './app/src/screens/Home/HomeScreen';
import DetailScreen from './app/src/screens/Detail/DetailScreen'

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }


  render() {

    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Root>
        <RootStack />
      </Root>
    );

  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailScreen
},
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null
    }
  }
);



