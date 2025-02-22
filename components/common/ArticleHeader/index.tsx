import {HTMLAttributes} from "react";
import Image from "next/image";

interface ArticleHeaderProps extends HTMLAttributes<HTMLElement> {
    article: Article;
}

export default function ArticleHeader({article, children}: ArticleHeaderProps) {
    return (
        <section className={"flex flex-col gap-[24px] w-full leading-normal section"}>
            <div
                className={`justify-center items-center w-full h-fit`}>
                <Image src={article.thumbnail} alt={article.label} width={768} height={768} className={`rounded-[6px] w-full h-auto`} priority/>
            </div>
            <div>
                <h1>{ article.label }</h1>
                <div className={"align-middle"}>
                    <div className={"text-base text-description font-semibold mr-[8px]"}>
                        {
                            Array.isArray(article.author) ?
                                article.author.map((author) => author.name).join(", ")
                                :
                                article.author.name
                        }
                    </div>
                    <div className={"text-sm text-description"}>{`${article.publishDate.getFullYear()}-${article.publishDate.getMonth() + 1}-${article.publishDate.getDate()}`}</div>
                </div>
            </div>
            { children }
        </section>
    );
}