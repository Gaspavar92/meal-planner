import { useEffect, useState } from 'react';
import styles from './styling/Meal.module.css'
import axios from 'axios';

const Meal = ({query}) => {

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState([]);

    const baseUrl = new URL("https://api.api-ninjas.com/v1/nutrition");
    const params = {
        query: query
    }
    const searchParams = new URLSearchParams(params);
    baseUrl.search = searchParams;

    const options = {
        "method": "GET",
        "headers": {
            'X-Api-Key': import.meta.env.VITE_API_NINJA_KEY
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            if (query) {
                try {
                    setLoading(true);
                    const response = await axios.get(baseUrl, options);
                    setResponse(response.data);
                    console.log(response.data);
                } catch(error) {
                    console.log(error.message)
                } finally {
                    setLoading(false);
                }
            }
        }
        fetchData()
    }, [query])

    return (
        <>
        </>
    )
};

export default Meal;