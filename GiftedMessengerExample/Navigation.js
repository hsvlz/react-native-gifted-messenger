'use strict';

var React = require('react-native');
var {
  Text,
  Navigator,
  Platform,
  StyleSheet
} = React;

var Navigation = React.createClass({
  render() {
    return (
      <Navigator
        initialRoute={{id: 'conversations', title: 'Gifted Messenger'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        
        sceneStyle={{paddingTop: (Platform.OS === 'android' ? 56 : 64)}}
        
        navigationBar={this._renderNavBar()}
      />
    );
  },
  _renderNavBar() {
    var _self = this;    
    var routeMapper = {
      LeftButton(route, navigator, index, navState) {
        return <Text>Back</Text>;
      },
      RightButton(route, navigator, index, navState) {
        return <Text>Forward</Text>;
      },
      Title(route, navigator, index, navState) {
        return <Text>My title</Text>;
      }
    };
    return (
      <Navigator.NavigationBar
        style={styles.navStyle}
        routeMapper={routeMapper}
      />
    );
  },
  renderScene(route, navigator) {
    var GiftedMessengerExample = require('./GiftedMessengerExample');
    var Conversations = require('./Conversations');
    
    console.log(route);
    switch (route.id) {
        case 'chat':
            return (
            <GiftedMessengerExample />
            );
            break;
    
        case 'conversations':
            return (
            <Conversations navigator={navigator} />
            );
            break;
            
        default:
            return (
            <Text>Error</Text>            
            );
            break;
    }

  },
});

const styles = StyleSheet.create({
    navStyle: {
        backgroundColor: '#007aff',
        alignItems: 'center',        
    }
});

module.exports = Navigation;