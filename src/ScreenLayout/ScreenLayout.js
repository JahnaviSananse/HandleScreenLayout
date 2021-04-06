import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScreenLayout = () => {
  return (
    <>
      <View style={{borderWidth: 3, borderColor: 'black'}}>
        <Text
          style={{
            fontSize: 30,
            borderWidth: 10,
            borderColor: 'red',
            margin: 20,
            textAlign: 'center',
            paddingTop: 20,
          }}>
          Jahnavi
        </Text>
      </View>

      <View
        style={{
          borderWidth: 3,
          marginTop: 10,
          borderColor: 'black',
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 20,
            borderWidth: 5,
            borderColor: 'green',
            textAlign: 'center',
            paddingTop: 10,
          }}>
          Jahnavi
        </Text>
        <Text
          style={{
            fontSize: 20,
            borderWidth: 5,
            borderColor: 'orange',
            textAlign: 'center',
            paddingTop: 10,
          }}>
          Jahnavi
        </Text>
        <Text
          style={{
            fontSize: 20,
            borderWidth: 5,
            borderColor: 'blue',
            textAlign: 'center',
            paddingTop: 10,
          }}>
          Jahnavi
        </Text>
      </View>

      <View
        style={{
          borderWidth: 3,
          marginTop: 10,
          borderColor: 'black',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            fontSize: 20,
            borderWidth: 5,
            borderColor: 'green',
            textAlign: 'center',
            paddingTop: 10,
          }}>
          Jahnavi
        </Text>
        <Text
          style={{
            fontSize: 20,
            borderWidth: 5,
            borderColor: 'orange',
            textAlign: 'center',
            paddingTop: 10,
          }}>
          Jahnavi
        </Text>
        <Text
          style={{
            fontSize: 20,
            borderWidth: 5,
            borderColor: 'blue',
            textAlign: 'center',
            paddingTop: 10,
          }}>
          Jahnavi
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ScreenLayout;
