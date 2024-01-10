import React from 'react';
import ReactDOM from 'react-dom';
// import ClickableImage from './clickableImage';
import ImageMapper from 'react-img-mapper';

class App extends React.Component {
  handleAreaClick = (area) => {
    alert(`You clicked on ${area}`);
  };

  
  render() {

    const URL = 'https://cdna.artstation.com/p/assets/images/images/019/472/426/large/francesca-baerald-fbaerald-imperialpalace-siegeofterra.jpg?1563648750';
    const MAP = {
        name: "my-map",
        areas: [
          { name: "Area1", active: true, shape: "rect", fillColor: "#eab54d4d", preFillColor: "#eab54d4d", strokeColor: "black", coords: [50, 50, 100, 100], href: "https://example.com/1" },
          { name: "Area2", shape: "rect", preFillColor: "#43ff64d9", coords: [150, 150, 200, 200], href: "https://example.com/2" }
        ]};

    return (
      <div className="App">
        <ImageMapper src={URL} map={MAP} />
      </div>
    );
  }
}

class ResourceList extends React.Component {
  render() {
    return (
        <div>
          <h2>Resources for {this.props.industry}</h2>
          {/* Here you can map over your resources and display them */}
        </div>
      );
    }
  }


ReactDOM.render(<App />, document.getElementById('root'));

export default App;