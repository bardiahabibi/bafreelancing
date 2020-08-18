import Link from "next/link";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="postContainer">
          <Link
            href={`/posts/${this.props.postCategory}/[postId]`}
            as={`/posts/${this.props.postCategory}/${this.props.postNumber}`}
          >
            <div id="postImage"></div>
          </Link>
          <div id="postAuthorContainer">
            <div id="authorImage"></div>
            <div id="authorName">{this.props.author}</div>
          </div>
          <Link
            href={`/posts/${this.props.postCategory}/[postId]`}
            as={`/posts/${this.props.postCategory}/${this.props.postNumber}`}
          >
            <div id="postTitle">{this.props.postTitle}</div>
          </Link>
        </div>
        <style jsx>{`
          #postContainer {
            width: 365px;
            height: 420px;
            border: solid 1px #707070;
            border-radius: 21px;
            margin-top: 65px;
            margin-left: 75px;
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 60% 17% 1fr;
            grid-template-areas:
              "postImage"
              "postAuthorContainer"
              "postTitle";
          }
          #postImage {
            grid-area: postImage;
            border-radius: 21px 21px 0px 0px;
            background-image: url(${this.props.postImage});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
          }
          #postImage :hover {
            cursor: pointer;
          }
          #postAuthorContainer {
            grid-area: postAuthorContainer;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          #authorImage {
            height: 40px;
            width: 40px;
            border-radius: 20px;
            background-image: url(${this.props.authorImage});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            margin-left: 25px;
          }
          #authorName {
            font-family: Roboto-Light;
            font-size: 18px;
            color: #535353;
            margin-left: 13px;
          }
          #postTitle {
            grid-area: postTitle;
            font-family: Roboto-Regular;
            font-size: 22px;
            color: #535353;
            margin-left: 25px;
            padding-right: 25px;
            padding-top: 8px;
          }
          #postTitle:hover {
            cursor: pointer;
          }
        `}</style>
        <style jsx global>
          {`
            @font-face {
              font-family: Roboto-Regular;
              src: url("./fonts/Roboto-Regular.ttf");
            }
            @font-face {
              font-family: Roboto-Light;
              src: url("/fonts/Roboto-Light.ttf");
            }
          `}
        </style>
      </div>
    );
  }
}

export default Post;
