export interface AddBlog {
    name: string;
    description: string;
}
export interface UpdateBlog extends AddBlog {
    id: string;
}
export interface Blog extends UpdateBlog {
    creator : string;
    time : string;
}

export interface Response {
    message : string;
}
export interface BlogResponse extends Response {
    data: Blog;
}

export interface BlogsResponse extends Response {
    data : Blog[] 
}

export type BlogID = {
    id ?: string | undefined;
};