import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native';

import Header from '../components/Header';

export default function Content() {
  const route = useRoute();
  const {content} = route.params;
  console.log('CONTENT FROM ROUTE', content);
  return (
    <View>
      <Header title={content.title} backEnabled />
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{uri: content.thumbnail}} style={styles.image}/>
        <Text>{content.content}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    paddingBottom: 300,
  },
  image: {
    marginTop: 20,
    height: 200,
  }
})
