export declare type LibObjectType = 'Circle' | 'Square';
export interface LibObject {
    readonly type: LibObjectType;
    readonly id: number;
}
export declare class LibCircle implements LibObject {
    readonly type: string;
    readonly id: number;
}
export declare class LibSquare implements LibObject {
    readonly type: string;
    readonly id: number;
}
