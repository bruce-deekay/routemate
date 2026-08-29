import {Home, ProductList, ProductDetail, Contact, Admin, PageNotFound, ContactKe, ContactUs, ContactEu} from '../pages/index';
import { Routes, Route, Navigate } from 'react-router-dom';

export const AllRoutes = () => {
    const user = true; // This is a placeholder for user authentication status. In a real application, this would be determined by your authentication logic.
    return (
        <div>
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
        </div>
    )
}
