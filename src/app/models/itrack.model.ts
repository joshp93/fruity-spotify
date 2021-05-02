import { Album } from "./album.model";
import { Artist } from "./artist.model";
import { Track } from "./track.model";

export interface ITrack {
    album: Album;
    artists: Artist[];
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
}
