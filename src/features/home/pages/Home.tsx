import Banner from "../components/Banner";
import Feed from "../components/Feed";
import PopularTags from "../components/PopularTags";

export default function Home() {
  return (
    <div className="home-page">
      <Banner />

      <div className="container page">
        <div className="row">
          <Feed />

          <PopularTags />
        </div>
      </div>
    </div>
  );
}
