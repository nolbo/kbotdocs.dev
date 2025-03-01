import {HTMLAttributes} from "react";
import { Link } from "react-transition-progress/next";
import Image from "next/image";

interface ArticleListProps extends HTMLAttributes<HTMLElement> {
    article: Article;
}

export default function ArticleItem({article}: ArticleListProps) {
    return (
        <li className={"list-none py-[16px] rounded-lg [&:hover_.title]:underline"}>
            <Link href={article.path || ""} className={"flex gap-[16px] hover:no-underline"}>
                <div className={"flex-1"}>
                    <span className={"title inline-block text-lg text-default font-bold mb-[4px]"}>{ article.label }</span>
                    <span className={"inline-block text-base text-description"}>{ article.description }</span>
                    <span className={"inline-block align-middle mt-[12px] text-sm text-description"}>
                        {`${article.publishDate.getFullYear()}-${article.publishDate.getMonth() + 1}-${article.publishDate.getDate()}`}
                        {" · "}
                        {
                            Array.isArray(article.author) ?
                                article.author.map((author) => author.name).join(", ")
                                :
                                article.author.name
                        }
                    </span>
                </div>
                <div>
                    <Image src={article.thumbnail} alt={article.label} width={192} height={120} className={"rounded-md w-[96px] h-[60px] md:w-[192px] md:h-[120px]"} />
                </div>
            </Link>
        </li>
    );
}