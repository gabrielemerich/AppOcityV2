import React from 'react';
import { View, ShadowPropTypesIOS } from 'react-native';
import { MapView } from 'expo';

// import { Container } from './styles';

const MainMapView = (props) => {
    return (
        <MapView
            style={{ flex: 1 }}
            region={props.region}
            showsUserLocation={true}
            onRegionChange={(reg) => props.onRegionChange(reg)}>
            <MapView.Marker coordinate={props.region}/>
        </MapView>
    );
}

export default MainMapView;