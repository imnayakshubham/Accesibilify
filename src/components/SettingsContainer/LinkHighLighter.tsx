
import { useAppContext } from '../../constant';
import { HeaderSubTitle } from './FontStylesChanger'
import Switch from "react-switch";


export const LinkHighLighter = () => {
    const { widgetState, dispatch } = useAppContext();

    const handleToggle = (value: boolean) => {
        dispatch({
            type: 'SET_HIGHLIGHT_LINKS', data: value,
        })
    }

    return (
        <div className='flex flex-col gap-2 border p-2 rounded-md'>
            <HeaderSubTitle children={`HighLight Links`} />
            <div>
                <Toggler checked={widgetState.highlightLinks} onChange={handleToggle} />
            </div>
        </div>
    )
}

type TogglerProps = {
    checked: boolean,
    onChange: (value: boolean) => void
}


export const Toggler = ({ checked, onChange }: TogglerProps) => {
    return <label className="switch" >
        <Switch checked={checked} onChange={onChange} />
        <span className="slider round"></span>
    </label>
}
