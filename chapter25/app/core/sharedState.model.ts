import { OpaqueToken } from "@angular/core";

export enum MODES {
    CREATE, EDIT
}

export class SharedState {
   /*  mode: MODES = MODES.EDIT;
    id: number; */

    constructor(public mode: MODES, public id?: number) {}

}

export const SHARED_STATE = new OpaqueToken("shared_state");