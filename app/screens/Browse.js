import React from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';

import Header from '../components/Header';
import BrowseListItem from '../components/BrowseListItem';

import {books} from '../constants/dummyData';

export default function Browse() {
  return (
    <View>
      <Header title="Browse Books" searchEnabled />
      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item, i) => i.toString()}
          data={books}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <BrowseListItem info={item} />
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
