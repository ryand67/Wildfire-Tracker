import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

const Map = ({ center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB-EjBC0Ycb-Anj6f3fcMgtNQn_ZeN-Jz0' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                <LocationMarker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
