import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';

import {palette} from '../constants/colors';

const {width} = Dimensions.get('window');

export default function Me() {
  return (
    <View style={{flex: 1}}>
      <Header title="My Profile" />
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171_1280.jpg',
          }}
        />
        <Text style={styles.name}>Glenna Reichert</Text>
        <Text style={styles.bio}>
          {
            '“You can never get a cup of tea large enough or a book long enough to suit me.”\n– C.S. Lewis'
          }
        </Text>
        <View style={styles.section}>
          <Text style={styles.sectionText}>Bookmarks</Text>
          <Icon name="chevron-forward" size={24} color="white" />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>Wishlist</Text>
          <Icon name="chevron-forward" size={24} color="white" />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>Notifications</Text>
          <Icon name="chevron-forward" size={24} color="white" />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>Settings</Text>
          <Icon name="chevron-forward" size={24} color="white" />
        </View>
        <View style={[styles.section, {backgroundColor: palette.red}]}>
          <Text style={styles.sectionText}>Logout</Text>
          <Icon name="chevron-forward" size={24} color="white" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  avatar: {
    width: width / 1.5,
    height: width / 1.5,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: palette.coralblack
  },
  name: {
    marginTop: 15,
    fontSize: 22,
    color: palette.coralblack,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bio: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: palette.steelblue,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
    // height: 3
  },
  sectionText: {
    fontSize: 24,
    color: 'white',
  },
});
