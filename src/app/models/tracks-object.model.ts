import { ITracksObject } from "./itracks-object.model";
import { Track } from "./track.model";

export class TracksObject implements ITracksObject {
    tracks: Track[];

    constructor(tracksObject: ITracksObject) {
        this.tracks = tracksObject.tracks;
    }
}
