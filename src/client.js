import React from 'react';
import ReactDOM from 'react-dom';
import { ImageOverlay, MapContainer, Polygon, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';

class App extends React.Component {
    state = { selectedIndustry: null };
  
    handleAreaClick = (industry) => {
      this.setState({ selectedIndustry: industry });
    };

  render() {
    const imageUrl = "https://www.mapsland.com/maps/europe/germany/stuttgart/detailed-street-map-of-central-part-of-stuttgart-city.jpg";
    const imageBounds = [[0, 0], [709, 982]];
    const markerPosition = [110, 400];

    const customIcon = L.icon({
      iconUrl: "https://kagi.com/proxy/425-4259787_transparent-google-map-marker-icons-png-png-download.png?c=VsWW3w2GfISzPgdnbGjU-1gunkdgRGIy8aNksYODIpt4_ysPf8ww6lQAtnJvfVKUtoqf5NCiluIFUXVTKjkZUkHjBPF03uGOWscg7rKxvOrq-hX_baZV_IKQ8uHjYlG4Grhuo4qdGh0p2V3Qt6GOxA%3D%3D",
      iconSize: [25, 25],
    });

    //  

    return (
      <MapContainer center={[709, 982]} zoom={1} style={{ height: "100vh", width: "100%" }} crs={L.CRS.Simple}>
        <ImageOverlay
          url={imageUrl}
          bounds={imageBounds}
        />
        <Marker position={markerPosition} icon={customIcon}>
          <Popup>
            A popup for the marker
          </Popup>
        </Marker>
      </MapContainer>
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