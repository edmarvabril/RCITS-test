/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {palette} from '../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Header({title, backEnabled, searchEnabled}) {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: palette.red,
      }}>
      {backEnabled ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginLeft: 15}}>
          <Icon name="arrow-back" size={24} color={palette.smoke} />
        </TouchableOpacity>
      ) : (
        <View style={{marginLeft: 15}} />
      )}
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center',
          paddingVertical: 10,
          color: palette.smoke,
        }}>
        {title}
      </Text>
      {searchEnabled ? (
        <TouchableOpacity style={{marginRight: 15}}>
          <Icon name="search" size={24} color={palette.smoke} />
        </TouchableOpacity>
      ) : (
        <View style={{marginRight: 15}} />
      )}
    </SafeAreaView>
  );
}
