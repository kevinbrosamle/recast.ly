
var defaultVideo = {
  id: {
    videoId: 'dQw4w9WgXcQ'
  },
  snippet: {
    title: 'Rick Astley - Never Gonna Give You Up',
    description: 'Rick Astley - Never Gonna Give You Up (Official Music Video)'
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      video: defaultVideo
    };
  }

  onVideoChange(video) {
    console.log(this, 'this');
    this.setState({video: video});
  }

  render() {
    return (
      <div>
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList 
            videos={window.exampleVideoData}
            callbackParent={this.onVideoChange}
            />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
