import { BrowserRouter as Router } from 'react-router-dom';
import WebRoutes from '../src/Routes/WebRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return (
        <Router>
            <WebRoutes />
        </Router>
    );
}

export default App;
