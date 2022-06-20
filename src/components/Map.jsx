import React, { useState, useContext } from "react";
import { useEffect } from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";
import { Context } from "./context";

function MapFrame() {
  const { weatherData } = useContext(Context);

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: weatherData.coord.lat, lng: weatherData.coord.lon }}
    >
      <Marker
        position={{ lat: weatherData.coord.lat, lng: weatherData.coord.lon }}
        title={weatherData.name}
      />
    </GoogleMap>
  );
}

function Map() {
  const [newMap, setNewMap] = useState(
    "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  );
  const { weatherData } = useContext(Context);
  const WrappedMap = withScriptjs(withGoogleMap(MapFrame));

  useEffect(() => {
    if (weatherData) {
      setNewMap(
        "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      );
    }
  }, [weatherData]);

  return (
    <div className="map-wrapper">
      <WrappedMap
        googleMapURL={newMap}
        loadingElement={<div className="map" />}
        containerElement={<div className="map" />}
        mapElement={<div className="map" />}
      />
    </div>
  );
}

export { Map };
