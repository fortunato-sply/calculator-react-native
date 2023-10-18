import { createContext, useState } from "react";

export const HistoryContext = createContext(null);
HistoryContext.displayName = 'HistoryContext';

export const HistoryProvider = ({ children }) => {
    const [history, setHistory] = useState([]);

    const addCalculation = (calc) => {
        setHistory([...history, calc]);
    }

    return (
        <HistoryContext.Provider
            value={{
                history,
                addCalculation
            }}
        >
            {children}
        </HistoryContext.Provider>
    )
}