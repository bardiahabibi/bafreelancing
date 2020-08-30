import Post from "./Post";

class CssPostsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const postCategory = "css";
    return (
      <div>
        <div id="postsSection">
          <div id="postsSectionContainer">
            <Post
              postImage={"/posts/css/css-grid-and-flexbox/postImage.png"}
              author="Bardia"
              authorImage={"/posts/css/css-grid-and-flexbox/balogo.png"}
              postTitle="Use Css Grid and Flexbox to Make Ideal Layouts"
              postCategory={postCategory}
              postNumber="1"
              postUrlName="css-grid-and-flexbox"
            />
            <Post
              postImage={"/posts/css/link-css-to-html/postImage.png"}
              author="Bardia"
              authorImage={"/posts/css/link-css-to-html/balogo.png"}
              postTitle="Link Css to Html"
              postCategory={postCategory}
              postNumber="2"
              postUrlName="link-css-to-html"
            />
          </div>
          <div id="marginContainer">
            <div id="cssMarginLogo"></div>
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
            #cssMarginLogo {
              width: 60%;
              height: 100px;
              background-image: url("/components_assets/JourneysPageMarginAssets/css.png");
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center center;
              margin-top: 65px;
            }
            @media only screen and (max-width: 600px) {
              #cssMarginLogo {
                margin-top: 45px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default CssPostsSection;
