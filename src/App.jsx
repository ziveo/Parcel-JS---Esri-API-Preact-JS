import { h, Component, render } from "preact";
import { loadModules, loadCss } from 'esri-loader';
import { esriOptions, esriApiVersion } from './config';

import './App.scss';
loadCss(esriApiVersion);

class App extends Component {
  componentDidMount() {
    loadModules(['esri/Map', 'esri/views/MapView'], esriOptions)
      .then(([Map, MapView]) => {
        const map = new Map({ basemap: 'gray-vector' });

        const view = new MapView({
          map: map,
          container: 'mapContainer',
          center: [10, 30],
          zoom: 3,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>test 11223344555</h1>
        </header>
        <div id="mapContainer" className="mapContainer" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
