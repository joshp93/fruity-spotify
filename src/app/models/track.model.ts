import { Album } from "./album.model";
import { Artist } from "./artist.model";
import { ITrack } from "./itrack.model";

export class Track implements ITrack {
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: object[];
    external_urls: object[];
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    linked_from: Track;
    name: string;
    popularity: number;
    preview_url: string;
    restrictions: object[];
    track_number: number;
    type: string;
    uri: string;
    album: Album;
    artists: Artist[];

    constructor(track: ITrack) {
        this.available_markets = track.available_markets;
        this.disc_number = track.disc_number;
        this.duration_ms = track.duration_ms;
        this.explicit = track.explicit;
        this.external_ids = track.external_ids;
        this.external_urls = track.external_urls;
        this.href = track.href;
        this.id = track.id;
        this.is_local = track.is_local;
        this.is_playable = track.is_playable;
        this.linked_from = track.linked_from;
        this.name = track.name;
        this.popularity = track.popularity;
        this.preview_url = track.preview_url;
        this.restrictions = track.restrictions;
        this.track_number = track.track_number;
        this.type = track.type;
        this.uri = track.uri;
        this.album = track.album;
        this.artists = track.artists;
    }
}
