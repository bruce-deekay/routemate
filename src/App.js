import { Routes, Route, Navigate } from 'react-router-dom';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Home} from './components/Home';
import {ProductList} from './components/ProductList';
import {ProductDetail} from './components/ProductDetail';
import {Contact} from './components/Contact';
import{Admin} from './components/Admin';
import {PageNotFound} from './components/PageNotFound';
import {ContactKe} from './components/ContactKe';
import {ContactEu} from './components/ContactEu';
import {ContactUs} from './components/ContactUs';
import './App.css';

function App() {
  const user = true; // This is a placeholder for user authentication status. In a real application, this would be determined by your authentication logic.
  // const loggedIn = true; // This is a placeholder for user login status. In a real application, this would be determined by your authentication logic.
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} /> 
          {/* :id is a dynamic parameter which we captured to help us display the correct product details */}
            <Route path="contact" element={<Contact />} >
            <Route path="ke" element={<ContactKe />} />
            <Route path="eu" element={<ContactEu />} />
            <Route path="us" element={<ContactUs />} />
            {/* Created a nested route for contact pages. Contact will display all contact options  */}
          </Route>
          <Route path="admin" element={user ? <Admin/> : <PageNotFound /> }/>
          <Route path="*" element={<PageNotFound title="404 - Page Not Found" />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
