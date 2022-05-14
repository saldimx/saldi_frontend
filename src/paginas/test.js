import React  from "react";
import { useSearch } from "../api_rest/useSearch";
import { useState } from "react";

export const Test = () => {
 
    const [text, setText] = useState('');
    const {data:list, isLoading:loadingList} = useSearch(text);
    if(loadingList){
        return(<>Cargando!</>);
    }

    const handleChange = (event) => {
        setText(event.target.value);   
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(text);

    }
    return (
      <>
        <div className="">
          <form className="">
            <input 
              type="number" 
              className="" 
              placeholder="Enter Year eg 2015" 
              data-testid="app-input"
              onChange={handleChange}
              //onChange={e=>setText(e.target.value)}
            />
            <button 
              className="" 
              data-testid="submit-button"
              onClick={onSubmit}
              >Search</button>
          </form>
    
          <ul className="" data-testid="movieList">
            {
                list.data.map((item,i)=>{
                    return(
                        <li key={i}>{item.Title}</li>
                    )
                })
            }
            

          </ul>
    
          <div className="" data-testid="no-result"></div>
        </div>




</>
        
      );
}