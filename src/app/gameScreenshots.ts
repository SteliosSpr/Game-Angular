export interface ScreenshotArray {
    count: number;
    next?: any;
    previous?: any;
    results: {
        height: number;
        id: number;
        image: string;
        is_deleted: boolean; 
        width: number;   
    } [];
}

export interface results {
    height: number;
    id: number;
    image: string;
    is_deleted: boolean; 
    width: number;   
}