import { loadModules } from 'esri-loader';
import { esriOptions } from '../config';

const Map = () => {
  loadModules(['esri/Map'], esriOptions)
    .then(([Map]) => {
      return Map;
    });
};

export default Map;
