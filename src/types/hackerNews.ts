export interface HackerNewsEntry {
    rank:     number;
    title:    string;
    points:   number;
    comments: number;
}

export type FilterMode = 'longTitles' | 'shortTitles' | 'raw' | undefined;
