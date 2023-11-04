import { OrganizationData } from "./OrganizationData";

export interface ResourceData {
    title: string,
    link: URL,
    featureImage: URL,
    organization: OrganizationData, 
}