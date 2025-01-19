import { createRoot } from "react-dom/client";
import { AppContextProvider } from './Context/Context';
import { Widget } from './components/Widget/Widget';

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

const initialize = (config: AccessibilityWidgetConfig): void => {
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
};

// For UMD/script tag usage
window.AccessibililtyWidgetSDK = { initialize };

// For ESM/npm usage
export { initialize as initializeAccessibililtyWidget };