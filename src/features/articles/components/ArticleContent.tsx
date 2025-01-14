import { Article } from "@/shared/types/ArticleModel";
import Markdown from "react-markdown";

export default function ArticleContent({ article }: { article: Article }) {
  return (
    <div className="row article-content">
      <div className="col-md-12">
        <h2 id="introducing-ionic">{article?.description}</h2>
        <Markdown>{article?.body}</Markdown>

        <ul className="tag-list">
          {article?.tagList.map((tag) => (
            <li key={tag} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
