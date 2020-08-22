import PostPageLayout from "../../../components/PostPageLayout";
import fetch from "isomorphic-unfetch";
import Markdown from "markdown-to-jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postBody: "",
      postTitle: "",
    };
  }

  componentDidMount() {
    this.fetchingPost();
    this.fetchingTitle();
  }

  fetchingPost = () => {
    const postUrl = `/posts/html/${this.props.postId}/postBody.md`;
    fetch(postUrl)
      .then((r) => r.text())
      .then((data) => this.setState({ postBody: data }));
  };

  fetchingTitle = () => {
    const postUrl = `/posts/html/${this.props.postId}/postTitle.md`;
    fetch(postUrl)
      .then((r) => r.text())
      .then((data) => this.setState({ postTitle: data }));
  };

  render() {
    return (
      <div>
        <PostPageLayout>
          <div id="postPageHeaderImage"></div>
          <div id="postPageTitleContainer">
            <Markdown>{this.state.postTitle}</Markdown>
          </div>
          <div id="postPageBodyContainer">
            <Markdown
              options={{
                overrides: {
                  SyntaxHighlighter: {
                    component: SyntaxHighlighter,
                    props: { style: darcula },
                  },
                },
              }}
            >
              {this.state.postBody}
            </Markdown>
          </div>
        </PostPageLayout>
        <style jsx>
          {`
            #postPageHeaderImage {
              background-image: url(${this.props.Image});
            }
          `}
        </style>
      </div>
    );
  }
}

export default PostPage;
