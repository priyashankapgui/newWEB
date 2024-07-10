import { BrowserRouter as Router } from 'react-router-dom';
import WebRoutes from '../src/Routes/WebRoutes';


function App() {
    return (
        <Router>
            <WebRoutes />
        </Router>
    );
}

export default App;
