import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);


    return (
        <View>
            <Text>Id : {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
