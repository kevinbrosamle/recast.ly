class App extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);

    this.state = {
      video: {
        id: {
          videoId: 'dQw4w9WgXcQ'
        },
        snippet: {
          title: 'Rick Astley - Never Gonna Give You Up',
          description: 'Rick Astley - Never Gonna Give You Up (Official Music Video)'
        }
      }
    };
  }

  onVideoChange(video) {
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
            videos={console.log(this.props.searchYouTube, 'in here')}
            callbackParent={this.onVideoChange.bind(this)}
            />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
