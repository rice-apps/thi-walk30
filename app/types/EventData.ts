export interface EventData {
    _id: string,
    host: string,
    title: string,
    description: string,
    img: string,
    link: string,
    date: Date | string,
    location: {
        latitude: number,
        longitude: number,
        address: string
    }
}