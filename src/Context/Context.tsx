import { useEffect, useReducer } from "react";
import { AppContext, initialState } from "../constant";
import reducer from "./reducer";
import { createStyles } from "../utils/createStyles";


export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [widgetState, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        document.head.insertAdjacentHTML(
            'beforeend',
            `<style id="react-accessibility-styles"></style>`
        );
    }, []);

    useEffect(() => {
        let styleElement = document.getElementById('react-accessibility-styles');

        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'react-accessibility-styles';
            document.head.appendChild(styleElement);
        }

        const safeStyles = createStyles(widgetState);
        styleElement.textContent = safeStyles;

    }, [widgetState]);


    return <AppContext.Provider
        value={{
            widgetState, dispatch
        }}
    >{children}</AppContext.Provider>
}