
import React from 'react';
import { StyleSheet, Text, View,FlatList,Alert,SafeAreaView } from 'react-native';
import { ListItem } from "react-native-elements";
import axios from "axios";

export default class MainScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            url: "https://5dae410e0874.ngrok.io/"
        };
    }

    componentDidMount() {
        this.getStars();
        console.log(thi.state.listData)
    }

    getStars = async () => {
        const {url} = this.state;
        console.log("URL " + url)
        axios
        .get(url,{headers:{'Access-Control-Allow_Origin' : "*"}},)

        .then(response => {
            console.log("Response " + repsonse)
            return this.setState({
                listData: response.data.data
            });
        })
        .catch(error = > {
            Alert.alert(error.message);
        });
    }
}
