//Describing actions available to counter for incrementing / decrementing / reseting its value.

import { Action } from '@ngrx/store';

export enum ActionTypes {
    Increment = '[Counter Component] increment',
    Decrement = '[Counter Component] decrement',
    Reset = '[Counter Component] reset',
}

export class Increment implements Action {
    readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
    readonly type = ActionTypes.Decrement;
}

export class Reset implements Action {
    readonly type = ActionTypes.Reset;
}