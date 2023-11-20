import { Image, StyleSheet, Text, View } from "react-native"
import { TweetType } from "../../types";
import { Entypo, EvilIcons } from '@expo/vector-icons';

interface TweetProps {
    tweet: TweetType,
}

interface IconButtonProps {
    icon: React.ComponentProps<typeof EvilIcons>['name'],
    text?: number | string
}

const IconButton = ({icon, text}: IconButtonProps) => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <EvilIcons name={icon} size={22} color="gray" />
        <Text style={{fontSize: 12, color: 'gray'}} >{text}</Text>
    </View>
)

const Tweet = ({tweet}: TweetProps) => {
  return (
    <View style={styles.container}>
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
                <IconButton icon='comment' text={tweet.numberOfComments} />
                <IconButton icon='retweet' text={tweet.numberOfRetweets}/>
                <IconButton icon='heart' text={tweet.numberOfLikes}/>
                <IconButton icon='chart' text={tweet.impressions || 0}/>
                <IconButton icon='share-apple'/>
            </View>
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