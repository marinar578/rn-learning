import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        } catch (err) {
            setErrorMessage("Something went wrong");
        }
    }

    // code only runs once when the second argument is an empty array, 
    // good for running something only upon first render
    useEffect(() => {
        searchAPI('pasta');
    }, [])

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
            />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
            {
                errorMessage ?
                    <Text>{errorMessage}</Text> :
                    <Text>We have found {results.length} results!</Text>
            }
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;
