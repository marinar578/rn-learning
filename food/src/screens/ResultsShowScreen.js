import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
