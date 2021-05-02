import { Artist } from "./artist.model";
import { Track } from "./track.model";

export interface IPagingObject {
    href: string;
    items: Track[] | Artist[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}
