import { Text, View } from "react-native"
import tweets from "../../assets/data/tweets"
import Tweet from "../../components/Tweet"
import { useLocalSearchParams } from "expo-router"

const Tweets = () => {
  const {id} = useLocalSearchParams()
   const tweetContent = tweets.find(t => t.id === id)
  
  return (
    <View>
        {!tweetContent ? (<Text>Tweet {id} not found!</Text>) :
          (<Tweet tweet={tweetContent}/>)
        }
    </View>
  )
}

export default Tweets