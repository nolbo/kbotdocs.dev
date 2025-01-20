import { Octokit } from "octokit";
import Contributor from "@/components/common/Contributor";

export default async function Contributors() {
    const data = await new Octokit().request("GET /repos/{owner}/{repo}/contributors", {
        owner: "nolbo",
        repo: "kbotdocs.dev",
        headers: {
            "X-GitHub-Api-Version": "2022-11-28"
        }
    });
    const contributors = data.data;

    return (
        <div className={"grid grid-cols-[repeat(auto-fill,48px)] gap-[16px]"}>
            {
                contributors.map(contributor => (
                    <Contributor key={contributor.id} login={contributor.login || ""} avatarUrl={contributor.avatar_url || ""} githubUrl={contributor.html_url || ""} />
                ))
            }
        </div>
    );
}