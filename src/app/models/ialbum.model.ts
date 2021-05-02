import { Artist } from "./artist.model";
import { Image } from "./image.model";

export interface IAlbum {
    album_group: string;
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: object[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: object[];
    type: string;
    uri: string;
}
