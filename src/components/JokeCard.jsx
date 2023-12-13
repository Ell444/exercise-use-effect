import { useEffect } from "react";
import { useState } from "react";


const JokeCard = () => {
    const [joke, setJoke] = useState();
    const [click, setClick] = useState(false);
    const [reload, setReload] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart');
            const obj = await response.json();
            setJoke(obj);
        } catch (error) {
            console.error(`Errore nel server:`, error);
            setJoke(null)
        };


    };

    useEffect(() => {
        fetchData()
    }, [reload]);



    return (<>

        <div>
            {joke === undefined ? (
                <div>"Loading..."</div>
            ) : (
                <div>
                    <h3>{joke.setup}</h3>
                    {click === true ? (
                        <div>
                            <p>{joke.delivery}</p>
                            <button onClick={() => {
                                return setClick(!click), setReload(!reload)
                            }}>Reload</button>
                        </div>
                    ) : (
                        <button onClick={() => setClick(!click)}>Answer</button>
                    )}

                </div>
            )}
        </div>

    </>)
};

export default JokeCard;