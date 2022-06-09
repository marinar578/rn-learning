import React, { useEffect, useState } from "react";
import { FlatList, Image, View, Text, StyleSheet } from 'react-native';
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
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250
    }
});

export default ResultsShowScreen;
