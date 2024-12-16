import { useAppContext } from '../../constant';
import { HeaderSubTitle } from './FontStylesChanger';
import { Toggler } from './LinkHighLighter';

export const Monochrome = () => {
    const { widgetState, dispatch } = useAppContext();

    const handleToggle = (value: boolean) => {
        dispatch({
            type: 'SET_MONOCHROME', data: value,
        })
    }

    return (
        <div className='flex flex-col gap-2 border p-2 rounded-md'>
            <HeaderSubTitle children={`Monochrome/B&W`} />
            <div>
                <Toggler checked={widgetState.monochrome} onChange={handleToggle} />
            </div>
        </div>
    )
}
