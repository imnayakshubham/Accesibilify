import { createRoot } from "react-dom/client";
import { AppContextProvider } from './Context/Context';
import { Widget } from './components/Widget/Widget';
import './index.css';

interface AccessibilityWidgetConfig {
    appId?: string;
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    theme?: {
        primaryColor?: string;
    };
}

declare global {
    interface Window {
        AccessibililtyWidgetSDK: {
            initialize: (config: AccessibilityWidgetConfig) => void;
        };
    }
}
// Function to load external scripts
const loadScript = (url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.crossOrigin = "anonymous";
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.head.appendChild(script);
    });
};

const initialize = async (config: AccessibilityWidgetConfig): Promise<void> => {
    try {
        // Load React and ReactDOM
        await Promise.all([
            loadScript('https://unpkg.com/react@18/umd/react.production.min.js'),
            loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js'),
        ]);

        const { appId = "default" } = config;

        if (!appId) {
            console.error('App ID is required');
            return;
        }

        // Remove existing widget if present
        const existingWidget = document.getElementById('accessibility-widget-root');
        if (existingWidget) {
            existingWidget.remove();
        }

        const widgetRoot = document.createElement('div');
        widgetRoot.id = 'accessibility-widget-root';
        document.body.appendChild(widgetRoot);

        createRoot(widgetRoot).render(
            <AppContextProvider>
                <Widget />
            </AppContextProvider>
        );
    } catch (error) {
        console.error('Failed to initialize AccessibilityWidget:', error);
    }
};

// For UMD/script tag usage
window.AccessibililtyWidgetSDK = { initialize };

// For ESM/npm usage
export { initialize as initializeAccessibililtyWidget };