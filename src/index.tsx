import { createRoot } from 'react-dom/client';
import App from "./components/App/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./contexts/theme/ThemeProvider";



const rootElem = document.getElementById('root');
const root = createRoot(rootElem);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);