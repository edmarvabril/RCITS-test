import React from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';

import Header from '../components/Header';
import ReadListItem from '../components/ReadListItem';

import {books} from '../constants/dummyData';

export default function Read() {
  return (
    <View>
      <Header title="My Books" searchEnabled />
      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, i) => i.toString()}
          data={books}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <ReadListItem info={item} />
            </View>
          )}
          contentContainerStyle={{paddingBottom: 300}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
  itemContainer: {
    margin: 15,
  },
});
