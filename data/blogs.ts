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
    const parseTurkishDate = (dateStr: string): Date => {
        const months: { [key: string]: number } = {
            'Ocak': 0, 'Şubat': 1, 'Mart': 2, 'Nisan': 3, 'Mayıs': 4, 'Haziran': 5,
            'Temmuz': 6, 'Ağustos': 7, 'Eylül': 8, 'Ekim': 9, 'Kasım': 10, 'Aralık': 11
        };
        
        const parts = dateStr.split(' ');
        if (parts.length >= 3) {
            const day = parseInt(parts[0]);
            const month = months[parts[1]] ?? 0;
            const year = parseInt(parts[2]);
            return new Date(year, month, day);
        }
        return new Date(0);
    };

    return [...blogs].sort((a, b) => {
        const dateA = parseTurkishDate(a.date);
        const dateB = parseTurkishDate(b.date);
        return dateB.getTime() - dateA.getTime(); // Newest first
    });
}
