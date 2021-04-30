import { IMe } from "./IMe";

export class Me implements IMe {
    display_name: string;
    email: string;
    external_urls: object;
    href: string;
    id: string;
    images: object[];
    product: string;
    type: string;
    uri: string;

    constructor(me: IMe) {
        this.display_name = me.display_name;
        this.email = me.email;
        this.external_urls = me.external_urls;
        this.href = me.href;
        this.id = me.id;
        this.images = me.images;
        this.product = me.product;
        this.type = me.type;
        this.uri = me.uri;
    }
}
