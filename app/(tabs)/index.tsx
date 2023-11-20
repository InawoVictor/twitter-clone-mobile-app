import { FlatList, StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';


export default function TabOneScreen() {
  return (
    <FlatList 
      data={tweets}
      renderItem={({item}) => (
        <Tweet tweet={item}/>
      )}
    />
    // <View style={styles.page}>
    //   <Tweet tweet={tweets[0]}/>
    //   <Tweet tweet={tweets[1]}/>
    //   <Tweet tweet={tweets[2]}/>
    // </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  }
});
