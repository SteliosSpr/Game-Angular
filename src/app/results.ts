export interface result {
    added: number;
    added_by_status: {
        beaten: number,
        dropped: number,
        owned: number,
        playing: number,
        toplay: number,
        yet: number;
    };
    background_image: string;
    clip?: any;
    dominant_color: string;
    esrb_rating?: any;
    genres: {
        id: number;
        name: string;
        slug: string;
    } [];
    id: number;
    metacritic?: any;
    name: string;
    parent_platforms: platform [];
    platforms: platform [];
    playtime: number;
    rating: number;
    rating_top: number;
    ratings: {
        count: number;
        id: number;
        percent: number;
        title: string;
    } [];
    ratings_count: number;
    released: string;
    reviews_count: number;
    reviews_text_count: number;
    saturated_color: string;
    score?: any;
    short_screenshots: {
        id: number;
        image: string;
    } [];
    slug: string;
    stores: store [];
    suggestions_count: number;
    tags: {
        games_count: number;
        id: number;
        image_background: string;
        language: string;
        name: string;
        slug: string;
    } [];
    tba: boolean;
    updated: string;
    user_game?: any;
}

export interface platform {
    id: number;
    name: string;
    slug: string;
}

export interface store {
    id: number;
    name: string;
    slug: string;
}

export interface dataArray {
    count: number;
    next: string;
    previous?: any;
    results: result[];
    user_platforms: boolean;
}