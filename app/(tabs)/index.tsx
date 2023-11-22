import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';
import { Link } from 'expo-router';


export default function TabOneScreen() {
  return (
      <View style={styles.page}>
        <FlatList          
          data={tweets}
          renderItem={({item}) => (
            <Tweet tweet={item}/>
          )}
        />

          <Link href={'/new-tweet'} asChild>
            <Entypo
              name="plus" 
              size={24} 
              color="white" 
              style={styles.floatingButton}
            />
          </Link>
      </View> 
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  },
  floatingButton: {
    position: 'absolute',
    bottom: 15,
    right: 25,
    backgroundColor: '#1C9BF0',
    borderRadius: 50,
    padding: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,

    overflow: 'hidden'
  },

});
