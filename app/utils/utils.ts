import { blogData, Blog } from "../data/blogs-data";

export const fetchBlogData = () : Blog[] => {
    return blogData;
}