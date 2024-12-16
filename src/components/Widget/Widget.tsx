import { useAppContext } from "../../constant";
import { Accessibility } from 'lucide-react';
import { SettingsContainer } from "../SettingsContainer/SettingsContainer";

export const Widget = () => {
    const { widgetState, dispatch } = useAppContext();

    return (
        <div className="fixed bottom-4 right-4" id="accessibility__widget">
            <button
                className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-all"
                onClick={() => {
                    dispatch({
                        type: widgetState.widgetOpen ? "CLOSE_WIDGET" : 'OPEN_WIDGET'
                    })
                }}
            >
                {widgetState.widgetOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg> : <Accessibility />}
            </button>

            <div
                className={`absolute bottom-12 right-0 w-[90vw] sm:w-[400px] bg-white text-black shadow-lg rounded-lg border border-gray-200 h-[80vh] flex flex-col transform transition-all ease-in-out duration-300 ${widgetState.widgetOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="p-2 flex justify-between align-middle items-center">
                    <h2 className="text-lg font-semibold text-gray-800">Accessibility Settings</h2>
                    <button
                        className="text-black"
                        onClick={() => {
                            dispatch({
                                type: 'CLOSE_WIDGET'
                            })
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="overflow-y-scroll border-t border-gray-200 p-4 flex-1">
                    <div className="text-gray-600 text-sm overflow-y-scroll">
                        <SettingsContainer />
                    </div>
                </div>
                <div className="p-2 border-t text border-gray-200 flex justify-end">
                    <button
                        className="bg-red-500 items-end text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition-all"
                        onClick={() =>
                            dispatch({
                                type: 'RESET_SETTINGS',
                            })
                        }
                    >
                        Reset Settings
                    </button>
                </div>
            </div>
        </div>
    )
}