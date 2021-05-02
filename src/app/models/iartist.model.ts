import { Image } from "./image.model";

export interface IArtist {
    external_urls: object[];
    followers: object[];
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}
