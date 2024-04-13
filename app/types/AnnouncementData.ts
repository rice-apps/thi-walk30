import { OrganizationData } from "./OrganizationData";

export interface AnnouncementData {
    _id: string,
    organization: string,
    title: string,
    description: string,
    links: URL[],
    featuredImage: string,
}
