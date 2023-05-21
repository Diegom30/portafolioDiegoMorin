import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";

const markers = [
  { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },

];

export const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 1, 5],
        scale: 1100
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#2C065D"
              stroke="#D6D6DA"
            />
          ))
        }
      
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#FFF" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
