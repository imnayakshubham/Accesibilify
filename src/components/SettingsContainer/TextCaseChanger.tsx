import React from 'react';
import { useAppContext } from '../../constant';

export const TextCaseChanger = () => {
    const { widgetState, dispatch } = useAppContext();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: "SET_TEXT_CASE", data: e.target.value
        })
    };

    return (
        <div className='border p-2 rounded-md'>
            <span className="font-bold mb-2 block">Text Case</span>
            <div className="w-full">
                <select
                    value={widgetState.textCase}
                    onChange={handleChange}
                    className="w-full p-2 border bg-white "
                >
                    <option value="initial">Default</option>
                    <option value="uppercase">Uppercase</option>
                    <option value="lowercase">Lowercase</option>
                    <option value="capitalize">Capitalize</option>
                </select>
            </div>
        </div>
    );
};
