import { Article } from "@/shared/types/ArticleModel";
import { useState } from "react";
import { useCreateArticle } from "../api/CreateArticleApi";

export default function ArticleForm({ article }: { article?: Article }) {
  const [title, setTitle] = useState(article?.title || "");
  const [description, setDescription] = useState(article?.description || "");
  const [body, setBody] = useState(article?.body || "");
  const [tagList, setTagList] = useState(article?.tagList || []);

  const createArticleMutation = useCreateArticle({
    title,
    description,
    body,
    tagList,
  });
  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter tags separated by commas"
                    value={tagList.join(",")}
                    onChange={(e) => {
                      setTagList(e.target.value.split(","));
                    }}
                  />

                  {/* <div className="tag-list">
                    <span className="tag-default tag-pill">
                      <i className="ion-close-round"></i> tag
                    </span>
                  </div> */}
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  onClick={() => createArticleMutation.mutate()}
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
