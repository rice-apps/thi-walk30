import { OrganizationData } from "./OrganizationData";

export interface ResourceData {
    _id: string,
    title: string,
    link: URL,
    img: URL,
    organization: OrganizationData, 
}
