import axios from "axios";
import { useEffect } from "react";

const Exercise = ({muscle, level}) => {

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
        .then(response => console.log(response))
    }, [muscle, level])

    // if (!muscle || !difficulty) return;
    return (
        <div>

        </div>
    )
};

export default Exercise;