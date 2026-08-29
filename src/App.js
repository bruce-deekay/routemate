import {AllRoutes} from './routes/AllRoutes';
import {Header, Footer} from './components/index';

import './App.css';

function App() {
  const user = true; // This is a placeholder for user authentication status. In a real application, this would be determined by your authentication logic.
  // const loggedIn = true; // This is a placeholder for user login status. In a real application, this would be determined by your authentication logic.
  return (
    <div className="App">
      <Header/>
        <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
