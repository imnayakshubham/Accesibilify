import "./index.css"

import { createRoot } from "react-dom/client"
import { AppContextProvider } from './Context/Context'
import { Widget } from './components/Widget/Widget'


function init() {
    const container = document.createElement('div')
    container.id = 'extension-button'
    document.body.appendChild(container)

    const root = createRoot(container)
    root.render(
        <AppContextProvider>
            <Widget />
        </AppContextProvider>
    )
}

// Ensure the DOM is loaded before injecting
if (document.readyState === 'loading') {
    console.log("DOM not loaded yet")
    document.addEventListener('DOMContentLoaded', init)
} else {
    console.log("DOM already loaded")
    init()
}
