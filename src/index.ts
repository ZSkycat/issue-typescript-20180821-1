export type LibObjectType = 'Circle' | 'Square';

export interface LibObject {
    readonly type: LibObjectType;
    readonly id: number;
}

export class LibCircle implements LibObject {
    readonly type = 'Circle';
    readonly id: number = Date.now();
}

export class LibSquare implements LibObject {
    readonly type = 'Square';
    readonly id: number = Date.now();
}
