import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./styling/Exercise.module.css";

const Exercise = ({muscle, level}) => {

    const [response, setResponse] = useState();

    const baseUrl = new URL("https://api.api-ninjas.com/v1/exercises");
    const params = {
        muscle: muscle,
        difficulty: level
    };
    const searchParams = new URLSearchParams(params);
    baseUrl.search = searchParams;

    const options = {
        method: "GET",
        headers: {
            'X-Api-Key': import.meta.env.VITE_API_NINJA_KEY
        }
    }

    useEffect(() => {
        axios.get(baseUrl, options)
        .then(response => setResponse(response.data))
        console.log(response)
    }, [muscle, level])

    if (!response) return;

    return (
        <div className="exercises">
            {response.map((data) => {
                return <p>{data.name}</p>
            })}
        </div>
    )
};

export default Exercise;