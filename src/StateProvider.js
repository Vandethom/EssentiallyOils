import React, { createContext, useContext, useReducer } from "react";


// Prepares the dataLayer
export const StateContext = createContext();


// Wrap the app and provides DataLayer to every component
// initialState is the... initial state of the data / reducer is what we do to it

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        { children }
    </StateContext.Provider>
);


// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);