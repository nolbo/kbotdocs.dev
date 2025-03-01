import { HTMLAttributes } from "react";
import Image from "next/image";
import { Link } from "react-transition-progress/next";

interface IContributor extends HTMLAttributes<HTMLDivElement> {
    login: string;
    avatarUrl: string;
    githubUrl: string;
}

export default function Contributor({ login, avatarUrl, githubUrl }: IContributor) {
    return (
        <Link href={githubUrl}>
            <Image className={"rounded-md"} src={avatarUrl} alt={`contributorAvatar_${login}`} width={48} height={48} />
        </Link>
    );
}