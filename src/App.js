import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GlobalStyles from './common/GlobalStyles';
import Portfolio from './pages/Portfolio';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
