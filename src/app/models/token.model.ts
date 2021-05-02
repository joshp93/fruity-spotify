import { IToken } from "./itoken.model";

export class Token implements IToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    expires_at: Date;
    state: string;

    constructor(token: IToken) {
        this.access_token = token.access_token;
        this.token_type = token.token_type;
        this.expires_in = token.expires_in;
        this.expires_at = new Date();
        this.expires_at.setTime(this.expires_at.getTime() + this.expires_in);
        this.state = token.state;
    }
}
