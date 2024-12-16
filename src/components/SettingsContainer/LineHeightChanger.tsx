import { useMemo } from "react";
import { useAppContext } from "../../constant";
import { CommonCounter } from "./FontSizeChanger";

export const LineHeightChanger = () => {
    const { widgetState, dispatch } = useAppContext();
    const lineHeight = useMemo(() => widgetState.lineHeight, [widgetState.lineHeight])

    const onMinusChange = () => {
        if (lineHeight > -100) {
            dispatch({
                type: "MINUS_LINE_HEIGHT"
            })
        }
    }

    const onAddChange = () => {
        if (lineHeight < 100) {
            dispatch({
                type: "ADD_LINE_HEIGHT"
            })
        }
    }

    return <div className='border p-2 rounded-md'>
        <span className="font-bold">Font Height</span>
        <CommonCounter value={lineHeight} onMinusChange={onMinusChange} onAddChange={onAddChange} />
    </div>
}
