import React, {Component} from "react";
import {View, Text, StyleSheet, Button, Alert} from "react-native";
import { Card } from "react-native-elements";
import axios from "axios";

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details : {},
            url:`https://5dae410e0874.ngrok.io/star?name=${this.props.navigation.getParam(
                "name"
            )}`
        };
    }

    componentDidMount(){
     this.getDetails();
    }
    getDetails = () => {
        const { url } = this.state;
        axios
        .get(url)
        .then(response => {
            this.setDetails(repsonse.data.data);
        })
        .catch(error => {
            Alert.alert(error.message);
        });
    };

    setDetails = planetDetails => {
        this.setState({
          details: planetDetails
        });
    };

    render(){
        const { details, imagePath } = this.state;
        if (details.specifications) {
            return (
                <View style={styles.container}>
          <Card
            title={details.star_names}
            
          >
            <View>
              <Text
                style={styles.cardItem}
              >{`Distance from Earth : ${details.distance}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Solar Radius  : ${details.solar_radius}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Gravity : ${details.star_gravity}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Solar Mass : ${details.solar_mass}`}</Text>
              
              <Text
                style={styles.cardItem}
              >{`Star Mass : ${details.mass}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Star Radius : ${details.radius}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Apparent Magnitude : ${details.apparent_magnitude}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Star Luminosity : ${details.luminosity}`}</Text>
            </View>
            
          </Card>
        </View>
            );
        }
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FCE4EC'
    },
    cardItem: {
      marginBottom: 10,
      color:'#1A237E'
    }
  });
