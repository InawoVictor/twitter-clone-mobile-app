export interface User {
    user: {
        id: string,
        name: string,
        userName: string,
        image?: string
    }
}

export interface TweetType extends User {
    id: string,
    content: string,
    createdAt: string,
    image?: string,
    numberOfComments?: number,
    numberOfRetweets?: number,
    numberOfLikes?: number,
    impressions?: number,
}