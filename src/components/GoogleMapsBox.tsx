import React, { useState, useEffect, useRef, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

type LatLngLiteral = google.maps.LatLngLiteral;

function GoogleMapsBox({ address }: { address: string }) {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [center, setCenter] = useState<LatLngLiteral | null>(null);

  const containerStyle = {
    width: "800px", // Fixed width
    height: "400px", // Fixed height
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
    libraries: ["places"],
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    if (isLoaded && address) {
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address }, (results, status) => {
        if (
          status === google.maps.GeocoderStatus.OK &&
          results[0].geometry?.location
        ) {
          const location = results[0].geometry.location;
          const newCenter = {
            lat: location.lat(),
            lng: location.lng(),
          };
          setCenter(newCenter);
          mapRef.current?.setCenter(newCenter); // Directly set the map center
        }
      });
    }
  }, [isLoaded, address]);

  if (!isLoaded || !center) {
    return <div className="googlemapbox-loading">Loading...</div>;
  }

  return (
    <div className="googlemapbox-container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default React.memo(GoogleMapsBox);
