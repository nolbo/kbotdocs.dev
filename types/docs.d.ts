interface Doc {
    label: string;
    path?: string;
    children?: (Doc | Article)[];
}

interface Article extends Doc {
    author: Author | Author[];
    description: string;
    thumbnail: string;
    publishDate: Date;
}

type DocCategory = {
    label: string,
    hide?: boolean,
    docs: (Doc | Article)[]
}

type Author = {
    name: string
}