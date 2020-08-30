import Head from "next/head";
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
      meta: {
        headTitle: "",
        headDescription: "",
      },
    };
  }

  componentWillMount() {
    this.fetchingMeta();
  }

  componentDidMount() {
    this.fetchingPost();
    this.fetchingTitle();
  }

  fetchingPost = () => {
    const postUrl = `/posts/css/${this.props.postId}/postBody.md`;
    fetch(postUrl)
      .then((r) => r.text())
      .then((data) => this.setState({ postBody: data }));
  };

  fetchingTitle = () => {
    const postUrl = `/posts/css/${this.props.postId}/postTitle.md`;
    fetch(postUrl)
      .then((r) => r.text())
      .then((data) => this.setState({ postTitle: data }));
  };

  fetchingMeta = () => {
    const metaPath = `/posts/css/${this.props.postId}/meta.json`;
    fetch(metaPath)
      .then((r) => r.json())
      .then((data) => this.setState({ meta: data }));
  };

  render() {
    return (
      <div>
        <Head>
          <title>{this.state.meta.headTitle}</title>
          <meta
            name="description"
            content={this.state.meta.headDescription}
          ></meta>
        </Head>
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
