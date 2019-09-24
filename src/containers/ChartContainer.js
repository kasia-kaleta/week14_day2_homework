import React from 'react';
import List from '../components/List.js';


class ChartContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err => console.error);
  }

  render(){
    return(
      <>
      <h1> Top 20 List </h1>
      <List songs={this.state.songs}/>
      </>
    );
    }
  }


export default ChartContainer;
