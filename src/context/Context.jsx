import { createContext, useState } from "react";
import SearchSongs from "../config/search";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false);


    const onSent = async () => {
        setLoading(true);
        let response = await SearchSongs(input)
    }
    

    const contextValue = {
        onSent,
        input,
        setInput
    }

    return (
        <Context.Provider value ={contextValue}>
        {props.children}
        </Context.Provider>
    )
}

export default ContextProvider