export interface Prematch {
    teamid: number;
    id: string;
    match: number;
    preload: boolean;
    human: boolean;
    noshow?: boolean | null;
    date: number;
    author: string;
    alliance?: boolean;
    preload_type?: string;
    startingPos?: string;
    client_uuid?: string | null;
}