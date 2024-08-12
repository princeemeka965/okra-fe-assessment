import React, { createContext, useState } from 'react';

// Create a context
export const Context = createContext();

const Provider = ({ children }) => {
    const [isSubmitted, setSubmittedState] = useState(false);

    return (
        <Context.Provider value={{ isSubmitted, setSubmittedState }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;