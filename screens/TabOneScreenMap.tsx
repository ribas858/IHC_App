import * as React from 'react';
import { StyleSheet, Dimensions, ScrollView, ScrollViewComponent } from 'react-native';

import { Text, View } from '../components/Themed';
import MapView, { Marker } from 'react-native-maps';


export default class TabOneScreen extends React.Component {
  
  state = {
    places: [
      {
        id: 1,
        title: 'casa dp cafe',
        description: 'cafe quentinho...',
        latitude: -15.793939,
        longitude: -47.882709,

      },
      {
        id: 2,
        title: 'casa do seu ze',
        description: 'vai rolarr',
        latitude: -15.920860,
        longitude: -48.058215,
      },
      {
        id: 3,
        title: 'rua do ninguem',
        description: 'e nada',
        latitude: -15.819797,
        longitude: -48.131063,
      }
    ]
  };
  
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.mapView.animateCamera({

  //       center: {
  //         latitude: -15.920860,
  //         longitude:  -48.058215
  //       }
        
  //     }, 2000);
    
  //   }, 6000);
  // }

  _mapReady = () => {
    this.state.places[0].mark.showCallout();
  }

  

  render() {
    const { latitude, longitude } = this.state.places[0];
    
    

    return (
      
      <View style={styles.container}>
        <MapView
            ref={ map => this.mapView = map}
            initialRegion={{
            latitude,
            longitude,
            longitudeDelta: 0.099,
            latitudeDelta: 0.077, 
            }}
            style={styles.mapView}
            onMapReady={this._mapReady}
            
          >
          
          { this.state.places.map(place => (
              <MapView.Marker
              ref={mark => place.mark = mark}
              title={place.title}
              description={place.description}
              key={place.id}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
                }}
              />
          ))}

        </MapView>

        <ScrollView
          style={styles.placesContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={e => {
            const scrolled = e.nativeEvent.contentOffset.x;
            
            

            const place = (scrolled>0)
              ? scrolled / Dimensions.get('window').width
              : 0;

            const { latitude, longitude, mark} = this.state.places[place];

            
                this.mapView.animateCamera({
          
                  center: {
                    latitude,
                    longitude,
                  },
                  zoom: 14
                  
                  
                  
                }, 2000);

                setTimeout(() => {
                  mark.showCallout();
                },500);

          }}
          >

          { this.state.places.map(place => (
            <View key={place.id} style={styles.place}>
              <Text>{place.title}</Text>
              <Text>{place.description}</Text>
            </View>
          ))}

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  placesContainer: {
    width: '100%',
    maxHeight: 200,
  },
  place: {
    width: Dimensions.get('window').width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
  },
  mapView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
