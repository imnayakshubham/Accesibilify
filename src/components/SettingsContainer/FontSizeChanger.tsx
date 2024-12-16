import { FaMinus, FaPlus } from "react-icons/fa";
import { useAppContext } from "../../constant";
import { useMemo } from "react";


export const FontSizeChanger = () => {
    const { widgetState, dispatch } = useAppContext();
    const fontSize = useMemo(() => widgetState.fontSizeAdjustment, [widgetState.fontSizeAdjustment])

    const onMinusChange = () => {
        if (fontSize > -100) {
            dispatch({
                type: "MINUS_FONT_SIZE"
            })
        }
    }

    const onAddChange = () => {
        if (fontSize < 100) {
            dispatch({
                type: "ADD_FONT_SIZE"
            })
        }
    }

    return <div className='border p-2 rounded-md'>
        <span className="font-bold">Font Size</span>
        <CommonCounter value={widgetState.fontSizeAdjustment} onMinusChange={onMinusChange} onAddChange={onAddChange} />
    </div>
}


type CommonCounterProps = {
    onMinusChange: () => void,
    value: number
    onAddChange: () => void,
    maxCount?: number,
    minCount?: number
}

export const CommonCounter = ({ onMinusChange, value, onAddChange, maxCount = 100, minCount = -100 }: CommonCounterProps) => {
    return <div>
        <div className="flex gap-1 items-center py-2">
            <button
                className="p-2 bg-blue-50 disabled:bg-gray-200"
                onClick={onMinusChange}
                disabled={value <= minCount}
            >
                <FaMinus />
            </button>
            <div>{value}%</div>
            <button
                className="p-2 bg-blue-50 disabled:bg-gray-200"
                disabled={value >= maxCount}
                onClick={onAddChange}
            >
                <FaPlus />
            </button>
        </div>
    </div>
}
