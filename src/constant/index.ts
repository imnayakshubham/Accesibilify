import { createContext, useContext } from "react"

export const initialState = {
    widgetOpen: false,
    fontColor: null,
    fontSizeAdjustment: 0,
    lineHeight: 0,
    letterSpacing: 0,
    textBold: false,
    textCase: 'initial',
    textAlignment: 'initial',
    textItalic: false,

    titleColor: false,
    titleBackgroundColor: null,
    highlightTitles: false,

    highlightLinks: false,
    hideImages: false,
    monochrome: false,
    highContrast: false,
    lowContrast: false,
}


type Action =
    | { type: 'OPEN_WIDGET' }
    | { type: 'CLOSE_WIDGET' }
    | { type: 'SET_FONT_COLOR'; data: string }
    | { type: 'ADD_FONT_SIZE' }
    | { type: 'MINUS_FONT_SIZE' }
    | { type: 'ADD_LINE_HEIGHT' }
    | { type: 'MINUS_LINE_HEIGHT' }
    | { type: 'ADD_LETTER_SPACING' }
    | { type: 'MINUS_LETTER_SPACING' }
    | { type: 'TOGGLE_BOLD' }
    | { type: 'TOGGLE_ITALIC' }
    | { type: 'SET_TEXT_CASE'; data: string }
    | { type: 'SET_TEXT_ALIGNMENT'; data: string }
    | { type: 'RESET_SETTINGS' }
    | { type: "SET_HIGHLIGHT_LINKS", data: boolean }
    | { type: "SET_HIGHLIGHT_TITLES", data: boolean }
    | { type: "HIDE_IMAGES", data: boolean }
    | { type: "SET_MONOCHROME", data: boolean }

const defaultDispatch: React.Dispatch<Action> = () => {
    throw new Error("Dispatch function must be used within an AppContextProvider");
};

export const AppContext = createContext<{
    widgetState: typeof initialState;
    dispatch: React.Dispatch<Action>;
}>({
    widgetState: initialState,
    dispatch: defaultDispatch,
});


export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};