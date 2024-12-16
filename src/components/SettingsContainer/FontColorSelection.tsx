import { useAppContext } from "../../constant";


const coloursList = [
    {
        "name": "Midnight Blue",
        "hex": "#191970"
    },
    {
        "name": "Forest Green",
        "hex": "#228B22"
    },
    {
        "name": "Dark Slate Gray",
        "hex": "#2F4F4F"
    },
    {
        "name": "Crimson",
        "hex": "#DC143C"
    },
    {
        "name": "Goldenrod",
        "hex": "#DAA520"
    },
    {
        "name": "Dodger Blue",
        "hex": "#1E90FF"
    },
    {
        "name": "Deep Sky Blue",
        "hex": "#00BFFF"
    },
    {
        "name": "Dark Orchid",
        "hex": "#9932CC"
    },
    {
        "name": "Tomato",
        "hex": "#FF6347"
    },
    {
        "name": "Dark Orange",
        "hex": "#FF8C00"
    }
]

export const FontColorSelection = () => {
    const { widgetState, dispatch } = useAppContext();

    const colorChange = (value: string) => {
        dispatch({ type: 'SET_FONT_COLOR', data: value })
    }

    return (
        <div>
            <span className="font-bold">Font Color</span>
            <div className="flex flex-wrap flex-row gap-0 items-center">
                {
                    coloursList.map((color) => {
                        const isActive = !!widgetState.fontColor && color.hex === widgetState.fontColor;

                        const activeStyles = isActive
                            ? {
                                borderColor: '#000',
                                borderWidth: '2px',
                                borderStyle: 'solid',
                                transform: 'scale(1.25)'
                            }
                            : {};

                        return (
                            <div
                                key={color.hex}
                                onClick={() => colorChange(color.hex)}
                                style={{
                                    backgroundColor: color.hex,
                                    ...activeStyles,
                                }}
                                className="w-5 h-5 rounded-full m-1 hover:opacity-70 cursor-pointer transition-all ease-in-out"
                            />
                        );
                    })
                }
                <input type="color" className="w-5 h-5"
                    onBlur={(e) => colorChange(e.target.value)}
                />
            </div>
        </div>
    )
}
