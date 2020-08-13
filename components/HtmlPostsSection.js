import Post from "./Post";

class HtmlPostsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="postsSection">
          <div id="postsSectionContainer">
            <Post
              postImage={"/components_assets/TechnologiesAssets/css.png"}
              author="Bardia"
              authorImage={"/components_assets/TechnologiesAssets/css.png"}
              postTitle="make a crud server side with python"
            />
            <Post
              postImage={"/components_assets/TechnologiesAssets/css.png"}
              author="Bardia"
              authorImage={"/components_assets/TechnologiesAssets/css.png"}
              postTitle="make a crud server side with python"
            />
            <Post
              postImage={"/components_assets/TechnologiesAssets/css.png"}
              author="Bardia"
              authorImage={"/components_assets/TechnologiesAssets/css.png"}
              postTitle="make a crud server side with python"
            />
            <Post
              postImage={"/components_assets/TechnologiesAssets/css.png"}
              author="Bardia"
              authorImage={"/components_assets/TechnologiesAssets/css.png"}
              postTitle="make a crud server side with python"
            />
          </div>
          <div id="marginContainer">
            <div id="htmlMarginLogo"></div>
          </div>
        </div>
        <style jsx>
          {`
            #postsSection {
              width: 100%;
              display: grid;
              grid-template-columns: 20% 1fr;
              grid-template-rows: 100%;
              grid-template-areas: "marginContainer postsSectionContainer";
            }
            #postsSectionContainer {
              grid-area: postsSectionContainer;
              display: flex;
              flex-wrap: wrap;
              margin-bottom: 60px;
            }
            #marginContainer {
              grid-area: marginContainer;
              background-color: #e8e8ff;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            #htmlMarginLogo {
              width: 60%;
              height: 100px;
              background-image: url("/components_assets/JourneysPageMarginAssets/html.png");
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center center;
              margin-top: 65px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default HtmlPostsSection;
