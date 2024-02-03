export interface EventData {
    id: string, // mongodb.ObjectId()
    host: string,
    title: string,
    description: string,
    featureImage: string,
    link: string,
    date: Date | string,
    location: {
        latitude: number,
        longitude: number,
        address: string
    }
}