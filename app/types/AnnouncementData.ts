import { OrganizationData } from "./OrganizationData";

export interface AnnouncementData {
    _id: string,
    organization: OrganizationData,
    title: string,
    description: string,
    links: URL[],
    featuredImage: string,
}
