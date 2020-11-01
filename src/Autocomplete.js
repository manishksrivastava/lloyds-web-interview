import React, { useEffect, useState } from "react";
import { fetchSuggestions } from "./utils/api";
import "./Autocomplete.css";
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import Loader from './LoadingComponent'


function Autocomplete(props) {

  // Componenet State
  const [searchTerm, setSearchTerm] = useState(""); 
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);  
  const [errorMessage, setErrorMessage] = useState(""); 
  const [loading, setLoding] = useState(false); 
  //const dispatch = useDispatch()
  const maxSize = 10

// set Suggestion to componenet state and reducers 
  const setSuggestion = suggestion => {
    setSearchTerm(suggestion.title)
    setshowSuggestions(false)
    //dispatch(SaveID(suggestion.id)) 
    props.saveProductID(suggestion.id)   
  }
  
   // Fetch Search result 
  const searchFunction =searchTerm=> fetchSuggestions(searchTerm) 
   // AwesomeDebouncePromise: Handle concurrent requests nicely (only use last request's response) 
  const debouncedSearchFunction = AwesomeDebouncePromise(searchFunction, 500)  
  // Handle product serch change event 
  const onSearchChange = async searchTerm => {
    setSearchTerm(searchTerm)
    searchTerm === '' ? setshowSuggestions(false) : setshowSuggestions(true)  
    console.log('Before response*****')  
  try{
    setLoding(true)
    const response =await debouncedSearchFunction(searchTerm);
    setLoding(false)
    console.log('response*****',response)    
    typeof response === 'string'? setErrorMessage(`Server error!!.Please contact administrator.Error message: ${response}`): setSuggestions(response.slice(0, maxSize))
    
  }  
  catch(ex){
    setLoding(false)
    setErrorMessage(`Server error !!.Please contact administrator.Error message: ${ex.message}`)
  }
}
    

  return (

    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        className="search-box"
        placeholder="Search for a product"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {
      !loading ?(
      errorMessage ===''?(showSuggestions && (( suggestions && suggestions.length>0) ? (
        <ul class="suggestions">
          {suggestions.map((suggestion, index) => {

            return (
              <li key={suggestion.id} onClick={() => setSuggestion(suggestion)}>
                {suggestion.title}
              </li>
            );
          })}
        </ul>
      )
      :
     (<div class="no-suggestions">
            <em>No suggestions.</em>
      </div>
      )))
      :
      (<div class="error-message">
            <em>{errorMessage}</em>
      </div>)
      ):(<Loader/>)
      }

    </div>


  );
}



export default Autocomplete;
