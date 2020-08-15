import PostPageLayout from "../../../../components/PostPageLayout";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <PostPageLayout>
          <div id="postPageBodyContainer">
            <p>
              Typography starts by setting a foundation of font families and
              weights along with fallbacks. It then explores how to build
              hierarchy using size, color, additional details like line-height,
              and layering responsiveness. Those models are then applied to
              components in a system’s library (like Article and Header) as well
              as custom components made by other teams.
            </p>
            <p>
              using size, color, additional details like line-height, and
              layering responsiveness. Those models are then applied to
              components in a system’s library (like Article and Header) as well
              as custom components made by other teams.
            </p>
          </div>
        </PostPageLayout>
      </div>
    );
  }
}

export default PostPage;
