import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

// Spline attempts to polyfill fetch and throws if it's getter-only.
// We patch it here to make it writable before Spline loads.
if (typeof window !== 'undefined') {
  try {
    const originalFetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      value: originalFetch,
      writable: true,
      configurable: true
    });
  } catch (e) {
    console.warn('Could not re-define window.fetch:', e);
  }
}

import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
