import { useMemo } from "react";
import { useAppContext } from "../../constant";
import { CommonCounter } from "./FontSizeChanger";

export const LetterSpacingChanger = () => {
    const { widgetState, dispatch } = useAppContext();
    const letterSpacing = useMemo(() => widgetState.letterSpacing, [widgetState.letterSpacing])

    const onMinusChange = () => {
        if (letterSpacing > -50) {
            dispatch({
                type: "MINUS_LETTER_SPACING"
            })
        }
    }

    const onAddChange = () => {
        if (letterSpacing < 50) {
            dispatch({
                type: "ADD_LETTER_SPACING"
            })
        }
    }

    return <div className='border p-2 rounded-md'>
        <span className="font-bold">Letter Spacing</span>
        <CommonCounter value={letterSpacing} onMinusChange={onMinusChange} onAddChange={onAddChange} minCount={-50} maxCount={50} />
    </div>
}