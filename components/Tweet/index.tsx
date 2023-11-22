import { Image, StyleSheet, Text, View, Pressable } from "react-native"
import { TweetType } from "../../types";
import { Entypo } from '@expo/vector-icons';
import TweetIconButton from "./IconButton"
import { Link } from "expo-router";

interface TweetProps {
    tweet: TweetType,
}

const Tweet = ({tweet}: TweetProps) => {
  return (
    <Link href={`/tweet/${tweet.id}`} asChild>
        <Pressable style={styles.container}>
            <Image src={tweet.user.image} style={styles.userImage}/>
            <View style={styles.mainContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.name}>{tweet.user.name}</Text>
                    <Text style={styles.username}>@{tweet.user.username} . 2h</Text>
                    <Entypo name="dots-three-horizontal" size={16} color="gray" style={{marginLeft: 'auto'}}/>
                </View>
                <Text>{tweet.content}</Text>
                {tweet.image && <Image src={tweet.image} style={styles.image} />}
                <View style={styles.footer}>
                    <TweetIconButton icon='comment' text={tweet.numberOfComments} />
                    <TweetIconButton icon='retweet' text={tweet.numberOfRetweets}/>
                    <TweetIconButton icon='heart' text={tweet.numberOfLikes}/>
                    <TweetIconButton icon='chart' text={tweet.impressions || 0}/>
                    <TweetIconButton icon='share-apple'/>
                </View>
            </View>
        </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: .5,
        borderBlockColor: "lightgray"
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
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginVertical: 10,
        borderRadius: 15,
    },
    username: {
        marginLeft: 5,
        color: 'gray',
    },
    footer: {
        flexDirection: "row",
        marginVertical: 5,
        justifyContent: 'space-between',
    },
});

export default Tweet