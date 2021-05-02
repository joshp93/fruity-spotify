import { Artist } from "./artist.model";
import { IAlbum } from "./ialbum.model";
import { Image } from "./image.model";

export class Album implements IAlbum {
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

    constructor(album: IAlbum) {
        this.album_group = album.album_group;
        this.album_type = album.album_type;
        this.artists = album.artists;
        this.available_markets = album.available_markets;
        this.external_urls = album.external_urls;
        this.href = album.href;
        this.id = album.id;
        this.images = album.images;
        this.name = album.name;
        this.release_date = album.release_date;
        this.release_date_precision = album.release_date_precision;
        this.restrictions = album.restrictions;
        this.type = album.type;
        this.uri = album.uri;
    }
}


