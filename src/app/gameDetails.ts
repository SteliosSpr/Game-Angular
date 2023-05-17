export interface gameDetail {
    achievements_count: number;
    added: number;
    added_by_status: {
        beaten: number;
        dropped: number;
        owned: number;
        playing: number;
        toplay: number;
        yet: number;
    };
    additions_count: number;
    alternative_names: string [];
    background_image: string;
    background_image_additional: string;
    clip?: any;
    creators_count: number;
    description: string;
    description_raw: string;
    developers: {
        games_count: number;
        id: number;
        image_background: string;
        name: string;
        slug: string;
    } [];
    dominant_color: string;
    esrb_rating?: any;
    game_series_count: number;
    genres: {
        games_count: number;
        id: number;
        image_background: string;
        name: string;
        slug: string;
    } [];
    id: string;
    metacritic?: any;
    metacritic_platforms?: any[];
    metacritic_url?: string;
    movies_count: number;
    name: string;
    name_original: string;
    parent_achievements_count: string;
    parent_platforms: platform [];
    parents_count: number;
    platforms: {
        platform: {
            games_count: number;
            id: number;
            image?: any;
            image_background: string;
            name: string;
            slug: string;
            year_end?: any;
            year_start: number;

        };
        released_at?: any;
        requirements: {};
    }[];
    playtime: number;
    publishers: {
        games_count: number;
        id: number;
        image_background: string;
        name: string;
        slug: string;
    } [];
    rating: number;
    rating_top: number;
    ratings: {
        count: number;
        id: number;
        percent: number;
        title: string;
    } [];
    ratings_count: number;
    reactions: {
        1: number;
        3: number;
        4: number;
        6: number;
        8: number;
        11: number;
    };
    reddit_count: number;
    reddit_description: string;
    reddit_logo: string;
    reddit_name: string;
    reddit_url: string;
    released?: any;
    reviews_count: number;
    reviews_text_count: number;
    saturated_color: string;
    screenshots_count: number;
    slug: string;
    stores: {
        id: number;
        store: {
            domain: string;
            games_count: number;
            id: number;
            image_background: string;
            name: string;
            slug: string;        
        };
        url?: string;
    } [];
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
    twitch_count: number;
    updated: string;
    user_game?: any;
    website: string;
    youtube_count: number;
}

export interface platform {
    id: number;
    name: string;
    slug: string;
}
