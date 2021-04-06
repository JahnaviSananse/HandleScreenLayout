import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import styles from '../ScreenLayout/style';

const ScreenLayout = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.view1}>
          <Text style={styles.redText}>Jahnavi</Text>
        </View>

        <View style={styles.view2}>
          <Text style={styles.greenText}>Jahnavi</Text>
          <Text style={styles.orangeText}>Jahnavi</Text>
          <Text style={styles.blueText}>Jahnavi</Text>
        </View>

        <View style={styles.view4}>
          <Text style={styles.greenText}>Jahnavi</Text>
          <Text style={styles.orangeText}>Jahnavi</Text>
          <Text style={styles.blueText}>Jahnavi</Text>
        </View>

        <View style={styles.view5}>
          <Text style={styles.greenText}>Jahnavi</Text>
          <Text style={styles.orangeText}>Jahnavi</Text>
          <Text style={styles.blueText}>Jahnavi</Text>
        </View>

        <View style={styles.view3}>
          <Text style={styles.greenText}>Jahnavi</Text>
          <Text style={styles.orangeText}>Jahnavi</Text>
          <Text style={styles.blueText}>Jahnavi</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ScreenLayout;
