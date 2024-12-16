
import { useAppContext } from '../../constant';
import { HeaderSubTitle } from './FontStylesChanger';
import { Toggler } from './LinkHighLighter';

export const HideImagesChanger = () => {
    const { widgetState, dispatch } = useAppContext();

    const handleToggle = (value: boolean) => {
        dispatch({
            type: 'HIDE_IMAGES', data: value,
        })
    }

    return (
        <div className='flex flex-col gap-2 border p-2 rounded-md'>
            <HeaderSubTitle children={`Hide Images`} />
            <div>
                <Toggler checked={widgetState.hideImages} onChange={handleToggle} />
            </div>
        </div>
    )
}
