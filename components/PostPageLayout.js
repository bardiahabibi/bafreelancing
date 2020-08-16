class PostPageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.children}
        <style jsx global>
          {`
            #postPageBodyContainer {
              font-family: Roboto-Regular;
              font-size: 21px;
              line-height: 29px;
              color: #535353;
              padding-left: 260px;
              padding-right: 260px;
            }
            #postPageBodyContainer p {
              margin-bottom: 30px;
            }
            #postPageTitleContainer {
              text-align: center;
              font-family: Roboto-Regular;
              font-size: 45px;
              color: #535353;
              padding-top: 50px;
              margin-bottom: 80px;
            }
            #postPageHeaderImage {
              width: 100%;
              height: 60vh;
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
            }
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

export default PostPageLayout;
