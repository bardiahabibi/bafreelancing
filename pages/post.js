import Layout from "../components/Layout";
import PostPageHeaderImage from "../components/PostPageHeaderImage";
import PostPageTitle from "../components/PostPageTitle";
import PostPageBody from "../public/posts/html/1/PostPageBody";

class post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <PostPageHeaderImage Image={"/posts/html/1/header.png"} />
        <PostPageTitle title={"make a crud server side with python"} />
        <PostPageBody />
      </Layout>
    );
  }
}

export default post;
