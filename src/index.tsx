import { createRoot } from 'react-dom/client';
import App from "./components/App/App";

const rootElem = document.getElementById('root');
const root = createRoot(rootElem);
root.render(<App />);