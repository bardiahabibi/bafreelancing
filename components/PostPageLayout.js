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
