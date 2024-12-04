import { createContext, useState } from "react"
import SearchSongs from "../config/search"

export const Context = createContext()

const ContextProvider = (props) => {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState([]) // Add this to store search results

  const onSent = async () => {
    setLoading(true)
    let response = await SearchSongs(input)
    setSearchResults(response)
    setLoading(false)
  }

  const contextValue = {
    onSent,
    input,
    setInput,
    loading,
    searchResults
  }

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
