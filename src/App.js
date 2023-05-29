import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AppRoutes from './routes/Routes';


const App = () => {
  return (
    <>
    <Router>
    <NavBar />
    <AppRoutes />
    </Router>
    </>
  );
}


export default App;
