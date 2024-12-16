
import { useAppContext } from '../../constant';
import { HeaderSubTitle } from './FontStylesChanger'
import { Toggler } from './LinkHighLighter';


export const TitlesHighLigther = () => {
    const { widgetState, dispatch } = useAppContext();

    const handleToggle = (value: boolean) => {
        dispatch({
            type: 'SET_HIGHLIGHT_TITLES', data: value,
        })
    }

    return (
        <div className='flex flex-col gap-2 border p-2 rounded-md'>
            <HeaderSubTitle children={`HighLight Title(s)`} />
            <div>
                <Toggler checked={widgetState.highlightTitles} onChange={handleToggle} />
            </div>
        </div>
    )
}
