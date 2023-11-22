import { useState } from "react"
import { Link, router } from "expo-router"
import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"

const user = {
    id: 'u1',
    username: 'VadimNotJustDev',
    name: 'Vadim',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
    
}

const NewTweet = () => {
    const [text, setText] = useState('');

    const onTweetPress = () => {
        console.warn("Posting the tweet: ", text)

        setText('')
        router.back()
    }

  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: 'white'
    }}>
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Link href={"../"} style={{fontSize: 18}}>Cancel</Link>
                <Pressable onPress={onTweetPress} style={styles.button}>
                    <Text style={styles.buttonText}>Tweet</Text>
                </Pressable>
            </View>
            <View style={styles.inputContainer}>
                <Image src={user.image}  style={styles.image}/>
                <TextInput placeholder="What's happening?" multiline
                    numberOfLines={4}
                    value={text}
                    onChangeText={setText}
                    style={{
                        flex: 1,
                    }}
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent:'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: "#1C9BF0",
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 1,
        marginRight: 10,
    },
    inputContainer: {
        flexDirection: 'row',        
    },
})

export default NewTweet