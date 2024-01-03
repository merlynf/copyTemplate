import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './index.css'
import '@mantine/dates/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <MantineProvider><App /></MantineProvider>    
)
