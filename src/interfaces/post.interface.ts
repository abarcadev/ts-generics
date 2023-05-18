export interface PostGetId {
    id       : number;
    title    : string;
    body     : string;
    userId   : number;
    tags     : string[];
    reactions: number;
}

export interface PostInsert {
    title : string;
    userId: number;
}

export interface PostInsertResponse extends PostInsert{
    id: number;
}