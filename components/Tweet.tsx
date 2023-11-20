import { Image, StyleSheet, Text, View } from "react-native"
import { TweetType } from "../types";

interface TweetProps {
    tweet: TweetType,
}

const Tweet = ({tweet}: TweetProps) => {
  return (
    <View style={styles.container}>
        <Image source={{uri: tweet.user.image}} style={styles.userImage}/>

        <View style={styles.mainContainer}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text>{tweet.content}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: .2,
    },
    userImage: {
        width: 50, 
        aspectRatio: 1, 
        borderRadius: 50,
    },
    mainContainer: {
        marginLeft: 10,
        flex: 1,
    },
    name: {
        fontWeight: '700',
    },
    content: {
        lineHeight: 20,
        marginTop: 5,
    },
});

export default Tweet