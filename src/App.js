import React, {Component} from 'react';
import './App.css';

// Import Components
import CardList from './components/card-list/card-list.component';
import SearchInput from './components/search/search-input.component';
class App extends Component{

  allAlbumData =[];
  constructor(){
    super();

    // This is our state
    this.state = {
      albums: [],
      filterAlbum:[],
      searchAlbum: ""
    }
  }

  // Life cycle method once component initialize this will get invoke
  componentDidMount(){
    //Album service endpoint
    const endpoint = "https://jsonplaceholder.typicode.com/photos";

    fetch(endpoint).then(response=> response.json()).then(albums=> {
      this.allAlbumData = albums;
      this.setState({albums: albums, filterAlbum:albums })
    })
  }

  handleSearchInputChange = (e)=> {
    this.setState({searchAlbum:e.target.value}, ()=> {
      if(this.state.searchAlbum){
        const newAlbumData = this.state.filterAlbum.filter(album=>album.title.toLowerCase().includes(this.state.searchAlbum.toLowerCase()));
        this.setState({albums: newAlbumData})
      }else{
        this.setState({albums: this.allAlbumData})
      }
    });
  }

  render(){
    return(
    <div className="App">
      <h1>Album List</h1>

     

      <SearchInput placeholder={"Enter Your Album Name"} handleChange={this.handleSearchInputChange}/>
      
      <CardList data={this.state.albums}></CardList>
    </div>
    )
  }
}

export default App;
