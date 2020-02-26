import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameOverScreen = props => {
    return (
      <View style={StyleSheet.screen}>
        <Text>The Game Is Over!</Text>
      </View>
  );
};

const styles = StyleSheet.create({
    screen: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export default GameOverScreen;
