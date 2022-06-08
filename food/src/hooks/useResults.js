// better name would have been useBusinesses.js, to be more specific
import { useEffect, useState } from "react";
import yelp from '../api/yelp'

export default (searchTerm) => {
    const [results, setResults] = useState([]);
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
        searchAPI(searchTerm);
    }, [])

    return [searchAPI, results, errorMessage];
}