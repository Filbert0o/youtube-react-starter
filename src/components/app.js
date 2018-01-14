import React, { Component } from 'react';
import _ from "lodash"
import YTSearch from "youtube-api-search"
import SearchBar from "./search_bar"
import VideoDetail from "./video_detail"
import VideoList from "./video_list"
const API_KEY = 'AIzaSyDP5473ZCqGZTeph3YTII4EzsStdUL7Lc4';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }

    this.onSearchTermChange('youtube');

  }

  onSearchTermChange(term) {
    YTSearch(
      {key: API_KEY, term: term},
      (videos) => {
        //same as this.setState({ videos: videos })
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        })
      }
    )
  }

  render() {
    const onSearchTermChange = _.debounce((term) => { this.onSearchTermChange(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={onSearchTermChange}/>
        <VideoDetail
          video={this.state.selectedVideo}
        />
        <VideoList
          onVideoClick={selectedVideo => { this.setState({ selectedVideo }) }}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
