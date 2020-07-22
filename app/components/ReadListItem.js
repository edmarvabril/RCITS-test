/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {palette} from '../constants/colors';
const {width} = Dimensions.get('window');

export default function ReadListItem({info}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Content', {content: info})}>
      <ImageBackground
        borderRadius={5}
        resizeMode="cover"
        source={{uri: info.thumbnail}}
        style={{
          height: width * 1.1,
          width: width / 1.2,
        }}>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: 'rgba(0,0,0,0.4)',
            padding: 20,
            flex: 1,
          }}>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 40,
                color: palette.smoke,
                fontWeight: 'bold',
                marginTop: 40,
              }}>
              {info.title}
            </Text>
            <Text style={{fontSize: 20, color: palette.smoke}}>
              {info.author}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
