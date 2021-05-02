import { Artist } from "./artist.model";
import { IPagingObject } from "./ipaging-object.model";
import { Track } from "./track.model";

export class PagingObject implements IPagingObject {
    href: string;
    items: Track[] | Artist[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;

    constructor(pagingObject: IPagingObject) {
        this.href = pagingObject.href;
        this.items = pagingObject.items;
        this.limit = pagingObject.limit;
        this.next = pagingObject.next;
        this.offset = pagingObject.offset;
        this.previous = pagingObject.previous;
        this.total = pagingObject.total;
    }
}
