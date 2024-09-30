import { Docs } from "@/constants/mdxDocs";

export default function Page({ params }: { params: { id: string } }) {

    return (
        <>{ Docs.find(e => e.value === `/${params.id}`)?.doc({}) }</>
    );
}
