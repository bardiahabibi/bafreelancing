import Post from "./Post";

class JsPostsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const postCategory = "js";
    return (
      <div>
        <div id="postsSection">
          <div id="postsSectionContainer">
            <Post
              postImage={"/posts/js/preloader-with-css-and-js/postImage.png"}
              author="Bardia"
              authorImage={"/posts/js/preloader-with-css-and-js/balogo.png"}
              postTitle="Perfect Preloader with CSS and JS"
              postCategory={postCategory}
              postNumber="1"
              postUrlName="preloader-with-css-and-js"
            />
          </div>
          <div id="marginContainer">
            <div id="jsMarginLogo"></div>
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
            #jsMarginLogo {
              width: 60%;
              height: 100px;
              background-image: url("/components_assets/JourneysPageMarginAssets/javascript.png");
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center center;
              margin-top: 65px;
            }
            @media only screen and (max-width: 600px) {
              #jsMarginLogo {
                margin-top: 45px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default JsPostsSection;
