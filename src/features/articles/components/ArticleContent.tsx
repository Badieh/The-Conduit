import { Article } from "@/shared/types/ArticleModel";
import Markdown from "react-markdown";

export default function ArticleContent({ article }: { article: Article }) {
  return (
    <div className="flex flex-col gap-4 px-10">
      <h2 className="text-2xl">{article?.description}</h2>
      <Markdown>{article?.body}</Markdown>

      <ul className="flex flex-wrap">
        {article?.tagList.map((tag) => (
          <li
            key={tag}
            className="cursor-pointer rounded-full border border-gray-400 px-2 py-1 text-sm font-semibold text-gray-400"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
