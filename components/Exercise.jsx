import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./styling/Exercise.module.css"


const Exercise = ({muscle, level}) => {

    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);

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
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(baseUrl, options);
                setResponse(response.data);
            } catch(error) {
                console.log(error.message)
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [muscle, level])

    return (
        <>
            <div className={`${styles.center} ${styles.exercises}`}>
                {loading ?
                <p>Loading..</p> :
                !response.length ?
                <p>Sorry, no exercise found. Change parameters and try again.</p> :
                response.map((data, i) => {
                    return <li key={`exercise-${i}`}>{data.name}</li>
                })
                }
            </div>
            <div className={styles.dumbbell_image}>
                <i class="fa-solid fa-dumbbell"></i>
            </div>
        </>
    )
};

export default Exercise;