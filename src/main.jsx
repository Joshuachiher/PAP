import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import * as Sentry from "@sentry/react";


Sentry.init({
  dsn: "https://b59db514a109ac2b151af3580e7b2789@o4509789071540224.ingest.us.sentry.io/4509789072850944",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
