import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./styling/Exercise.module.css"


const Exercise = ({muscle, level}) => {

    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState([]);

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
            if (muscle && level) {
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
        }
        fetchData()
    }, [muscle, level])

    const showDetails = (e) => {
        const index = e.target.dataset.index;
        setDetails(response[index]);
    };

    if (!muscle && !level) return (
        <>
            <div className={styles.center}>
                <i className={`fa-solid fa-arrow-up ${styles.arrow_up}`}></i>
                <p>Enter details and start your next fitness journey</p>
            </div>
            <div className={styles.dumbbell_image}>
                <i className="fa-solid fa-dumbbell"></i>
            </div>
        </>

        )

    return (
        <>
        <div className={`${styles.exercise_page} wrapper`}>
            <div className={`${styles.exercises}`}>
                <div className={styles.title}>
                    <h2>Exercises</h2>
                </div>
                {muscle && level &&
                loading ?
                <p>Loading..</p> :
                muscle && level &&
                !response.length ?
                <p>Sorry, no exercise found. Change parameters and try again.</p> :
                muscle && level &&
                response.map((data, i) => {
                    return <li key={`exercise-${i}`} data-index={i} className={`exercise-${i} ${styles.exercise}`} onClick={showDetails}>{data.name}</li>
                })
                }
            </div>
            <div className={styles.exercise_details}>
            <div className={styles.title}>
                    <h2>{details.name}</h2>
                </div>
                <div className={styles.details}>
                        <p><span className={styles.bold}>Difficulty: </span>{details.difficulty ?? "N/A"}</p>
                        <p><span className={styles.bold}>Equipement: </span>{details.equipment ?? "N/A"}</p>
                        <p><span className={styles.bold}>Muscle: </span>{details.muscle ?? "N/A"}</p>
                        <p><span className={styles.bold}>Type: </span>{details.type  ?? "N/A"}</p>
                        <p className={styles.description}><span className={styles.bold}>Description: </span>{details.instructions ?? "N/A"}</p>
                </div>
            </div>
        </div>

            <div className={styles.dumbbell_image}>
                <i class="fa-solid fa-dumbbell"></i>
            </div>
        </>
    )
};

export default Exercise;