import { IArtist } from "./iartist.model";
import { Image } from "./image.model";

export class Artist implements IArtist {
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

    constructor(artist: IArtist) {
        this.external_urls = artist.external_urls;
        this.followers = artist.followers;
        this.genres = artist.genres;
        this.href = artist.href;
        this.id = artist.id;
        this.name = artist.name;
        this.popularity = artist.popularity;
        this.type = artist.type;
        this.uri = artist.uri;
    }
}
