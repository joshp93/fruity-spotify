import { IToken } from "./IToken";

export class Token implements IToken{
    access_token: string;
    token_type: string;
    scope: string;
    expires_in: number;
    refresh_token: string;

    constructor(token: IToken) {
        this.access_token = token.access_token;
        this.token_type = token.token_type;
        this.scope = token.scope;
        this.expires_in = token.expires_in;
        this.refresh_token = token.refresh_token;
    }
}
