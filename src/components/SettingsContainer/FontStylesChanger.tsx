import { BsTypeBold } from "react-icons/bs";
import { FaItalic } from "react-icons/fa";

import { useAppContext } from "../../constant";
import { CiTextAlignLeft } from "react-icons/ci";
import { CiTextAlignCenter } from "react-icons/ci";
import { CiTextAlignRight } from "react-icons/ci";
type HeaderSubTitleProps = {
    children: React.ReactNode,
    className?: string
}

export const HeaderSubTitle = ({ children, className = "" }: HeaderSubTitleProps) => {
    return <span className={`font-bold ${className}`}>
        {children}
    </span>
}


export const FontStylesChanger = () => {
    const { widgetState, dispatch } = useAppContext();

    return (
        <div className='flex flex-col gap-2 border p-2 rounded-md'>
            <HeaderSubTitle children={`Font Styles`} />
            <div className="flex gap-2">
                <button
                    className={`${widgetState.textBold ? "bg-blue-200" : ""} p-1`}
                    onClick={() => dispatch({ type: 'TOGGLE_BOLD' })}
                >
                    <BsTypeBold className="text-lg" />
                </button>
                <button
                    className={`${widgetState.textItalic ? "bg-blue-200" : ""} p-1`}

                    onClick={() => dispatch({ type: 'TOGGLE_ITALIC' })}
                >
                    <FaItalic className="text-lg" />
                </button>
                <button
                    className={`${widgetState.textAlignment === "left" ? "bg-blue-200" : ""} p-1`}
                    onClick={() => {
                        dispatch({ type: 'SET_TEXT_ALIGNMENT', data: 'left' })
                    }}
                >
                    <CiTextAlignLeft className="text-lg" />
                </button>

                <button
                    className={`${widgetState.textAlignment === "center" ? "bg-blue-200" : ""} p-1`}
                    onClick={() => {
                        dispatch({ type: 'SET_TEXT_ALIGNMENT', data: 'center' })
                    }}
                >
                    <CiTextAlignCenter className="text-lg" />
                </button>

                <button
                    className={`${widgetState.textAlignment === "right" ? "bg-blue-200" : ""} p-1`}
                    onClick={() => {
                        dispatch({ type: 'SET_TEXT_ALIGNMENT', data: 'right' })
                    }}
                >
                    <CiTextAlignRight className="text-lg" />
                </button>
            </div>
        </div>
    )
}
