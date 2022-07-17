import React,{createContext,useContext,useReducer} from "react";

//data layer
export const StateContext = createContext();

export const Stateprovider =({reducer,initialState,children}) => (

    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>

);
//pull information
export const useStateValue =()=> useContext(StateContext);