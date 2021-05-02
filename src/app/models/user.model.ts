import { IUser } from "./iuser.model";

export class User implements IUser {
    display_name: string;
    email: string;
    external_urls: object;
    href: string;
    id: string;
    images: object[];
    product: string;
    type: string;
    uri: string;

    constructor(user: IUser) {
        this.display_name = user.display_name;
        this.email = user.email;
        this.external_urls = user.external_urls;
        this.href = user.href;
        this.id = user.id;
        this.images = user.images;
        this.product = user.product;
        this.type = user.type;
        this.uri = user.uri;
    }
}
