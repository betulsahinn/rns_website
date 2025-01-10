import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [isEnter, setIsEnter] = useState(false);

    const handleMouseEnter = () => {
        setIsEnter(true);
    };

    const handleMouseLeave = () => {
        setIsEnter(false);
    };

    return (
        <AppContext.Provider value={{
            isEnter,
            handleMouseEnter,
            handleMouseLeave
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useApp = () => useContext(AppContext);