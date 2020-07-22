/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

import {palette} from '../constants/colors';
const {width} = Dimensions.get('window');

export default function BrowseListItem({info}) {
  return (
    <ImageBackground
      borderRadius={3}
      resizeMode="cover"
      source={{uri: info.thumbnail}}
      style={{
        height: width / 1.8,
        width: width / 2.4,
      }}>
      <View
        style={{
          borderRadius: 3,
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: 10,
          flex: 1,
        }}>
        <Text style={{fontSize: 18, color: palette.smoke, textAlign: 'right'}}>
          {info.price}
        </Text>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 26,
              color: palette.smoke,
              fontWeight: 'bold',
              marginTop: 40,
            }}>
            {info.title}
          </Text>
          <Text style={{fontSize: 16, color: palette.smoke}}>
            {info.author}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 8,
            backgroundColor: palette.red,
            width: 80,
            borderRadius: 15,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: palette.coralblack,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            BUY
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
