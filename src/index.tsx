import { createRoot } from 'react-dom/client';
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./app/providers/themeProvider";



const rootElem = document.getElementById('root');
const root = createRoot(rootElem);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);