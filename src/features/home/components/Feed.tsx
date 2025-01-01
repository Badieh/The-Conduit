import Articles from "./Articles";
import FeedToggle from "./FeedToggle";
import Pagination from "./Pagination";

export default function Feed() {
  return (
    <div className="col-md-9">
      <FeedToggle />
      <Articles />
      <Pagination />
    </div>
  );
}
