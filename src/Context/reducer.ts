import { initialState } from "../constant";


export default (state: any, action: any) => {

    switch (action.type) {
        case 'OPEN_WIDGET':
            return {
                ...state,
                widgetOpen: true,
            };
        case 'CLOSE_WIDGET':
            return {
                ...state,
                widgetOpen: false,
            };

        // ? === font color ===

        case 'SET_FONT_COLOR':
            return {
                ...state,
                fontColor: action.data,
            };

        // ? === font size ===
        case 'ADD_FONT_SIZE':
            return {
                ...state,
                fontSizeAdjustment: state.fontSizeAdjustment + 10,
            };

        case 'MINUS_FONT_SIZE':
            return {
                ...state,
                fontSizeAdjustment: state.fontSizeAdjustment - 10,
            };

        // ? === Line Height ===

        case 'ADD_LINE_HEIGHT':
            return {
                ...state,
                lineHeight: state.lineHeight + 5,
            };

        case 'MINUS_LINE_HEIGHT':
            return {
                ...state,
                lineHeight: state.lineHeight - 5,
            };

        // ? === Letter spacing ===

        case 'ADD_LETTER_SPACING':
            return {
                ...state,
                letterSpacing: state.letterSpacing + 10,
            };

        case 'MINUS_LETTER_SPACING':
            return {
                ...state,
                letterSpacing: state.letterSpacing - 10,
            };

        // ? === BOLD Text ===

        case 'TOGGLE_BOLD':
            return {
                ...state,
                textBold: !state.textBold,
            };

        // ? === Italic Text ===

        case 'TOGGLE_ITALIC':
            return {
                ...state,
                textItalic: !state.textItalic,
            };

        // ? === Uppercase  ===

        case 'SET_TEXT_CASE':
            return {
                ...state,
                textCase: action.data,
            };

        // ? === Alignment  ===

        case 'SET_TEXT_ALIGNMENT':
            return {
                ...state,
                textAlignment: state.textAlignment === action.data ? "initial" : action.data,
            };

        // ? === Title Settings ===

        case 'SET_TITLE_COLOR':
            return {
                ...state,
                titleColor: action.data,
            };

        case 'SET_TITLE_BACKGROUND_COLOR':
            return {
                ...state,
                titleBackgroundColor: action.data,
            };

        case 'SET_HIGHLIGHT_TITLES':
            return {
                ...state,
                highlightTitles: action.data,
            };

        case 'SET_HIGHLIGHT_LINKS':
            return {
                ...state,
                highlightLinks: action.data,
            };


        case 'HIDE_IMAGES':
            return {
                ...state,
                hideImages: action.data,
            };

        case 'SET_MONOCHROME':
            return {
                ...state,
                monochrome: action.data,
            };

        case 'SET_HIGH_CONTRAST':
            return {
                ...state,
                contrast: action.data
            };
        // ? === global settings ===

        case 'RESET_SETTINGS':
            return {
                ...initialState,
                widgetOpen: state.widgetOpen,
            };

        default:
            console.log('Error - No Action Could Be Found');
    }
};