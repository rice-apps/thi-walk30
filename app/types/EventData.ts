export interface EventData {
    _id: string,
    organization: string,
    title: string,
    description: string,
    img: string,
    link: string,
    date: Date | string,
    duration: number,
    location: {
        latitude: number,
        longitude: number,
        address: string
    }
}