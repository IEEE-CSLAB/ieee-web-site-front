import blogsData from './blogs.json';

export interface Blog {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    date: string;
    author: string;
    isImportant?: boolean;
    content?: string;
}

export const blogs: Blog[] = blogsData;

export function getBlogById(id: number): Blog | undefined {
    return blogs.find(blog => blog.id === id);
}

export function getImportantBlogs(): Blog[] {
    return blogs.filter(blog => blog.isImportant);
}

export function getLatestBlogs(): Blog[] {
    return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
