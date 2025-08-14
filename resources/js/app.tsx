import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const segments = name.split('/');
        const last = segments.pop()!;
        const pascalLast = last.replace(/(^\w|-\w)/g, (match) => match.replace('-', '').toUpperCase());
        const route = [...segments, pascalLast].join('/');
        return resolvePageComponent(`./pages/${route}.tsx`, import.meta.glob('./pages/**/*.tsx'));
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#0e504bff',
    },
});

// This will set light / dark mode on load...
initializeTheme();
