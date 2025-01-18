import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/*
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://6ca82d2725fecba5ca6ec544a535d77d@o4508573542187008.ingest.de.sentry.io/4508573549658192",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
 
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
});

*/


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
