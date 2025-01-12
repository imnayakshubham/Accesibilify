import { createRoot } from 'react-dom/client';
import { AppContextProvider } from './Context/Context';
import { Widget } from './components/Widget/Widget';

interface AccesibilifyConfig {
    containerId?: string;
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    theme?: {
        primaryColor?: string;
        secondaryColor?: string;
    };
    styles?: {
        buttonSize?: string;
        buttonRadius?: string;
    };
}

const defaultConfig: AccesibilifyConfig = {
    containerId: 'accesibilify-widget',
    position: 'bottom-right',
    theme: {
        primaryColor: '#3B82F6',
        secondaryColor: '#1D4ED8'
    },
    styles: {
        buttonSize: '48px',
        buttonRadius: '50%'
    }
};

export const initAccesibilify = (userConfig: AccesibilifyConfig = {}) => {
    const config = { ...defaultConfig, ...userConfig };

    // Load required CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css';
    document.head.appendChild(cssLink);

    // Create container if it doesn't exist
    let container = document.getElementById(config.containerId!);
    if (!container) {
        container = document.createElement('div');
        container.id = config.containerId!;
        document.body.appendChild(container);
    }

    // Apply position classes
    const positionClasses = {
        'bottom-right': 'fixed bottom-4 right-4',
        'bottom-left': 'fixed bottom-4 left-4',
        'top-right': 'fixed top-4 right-4',
        'top-left': 'fixed top-4 left-4'
    };
    container.className = positionClasses[config.position!];

    // Create style element for theme
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --accesibilify-primary: ${config.theme?.primaryColor};
            --accesibilify-secondary: ${config.theme?.secondaryColor};
        }
    `;
    document.head.appendChild(style);

    // Render the widget
    const root = createRoot(container);
    root.render(
        <AppContextProvider>
            <Widget />
        </AppContextProvider>
    );

    // Return destroy method
    return {
        destroy: () => {
            root.unmount();
            container?.remove();
            style.remove();
            cssLink.remove();
        }
    };
};

// Make it available globally for UMD
if (typeof window !== 'undefined') {
    (window as any).AccesibilifySDK = {
        init: initAccesibilify
    };
}

export default {
    init: initAccesibilify
};