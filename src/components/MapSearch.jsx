import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

// import { Container } from './styles';

const MapSearch = (props) => {
    return (
        <GooglePlacesAutocomplete
       
        placeholder="Search"
        minLength={2}
        autoFocus={true}
        returnKeyType={'search'}
        listViewDisplayed={false}
        fetchDetails={true}
        onPress={(data,details = null)=>{
            props.notifyChange(details.geometry.location)
        }}
        query={{key: 'AIzaSyDPtqapEOWHR6eYvUFTwVKQTUztGTugqh0', language:'en'}}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={200}
        />
        
        );
}

export default MapSearch;