class PostPageTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="postPageTitleContainer">{this.props.title}</div>
        <style jsx>{`
          #postPageTitleContainer {
            text-align: center;
            font-family: Roboto-Regular;
            font-size: 45px;
            color: #535353;
            padding-top: 50px;
            margin-bottom: 80px;
          }
        `}</style>
        <style jsx global>
          {`
            @font-face {
              font-family: Roboto-Regular;
              src: url("/fonts/Roboto-Regular.ttf");
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

export default PostPageTitle;
