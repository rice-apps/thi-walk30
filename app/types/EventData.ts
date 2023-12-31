export interface EventData {
    id: string, // mongodb.ObjectId()
    title: string,
    description: string,
    featureImage: string,
    link: string,
    date: Date,
    startTime: string,
    endTime: string,
    location: {
        latitude: number,
        longitude: number,
        address: string
    }
}