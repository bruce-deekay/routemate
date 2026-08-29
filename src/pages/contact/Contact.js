import {useNavigate, Outlet} from 'react-router-dom';
// Outlet is a component that helps us display nested routes. It acts as a placeholder for the child routes defined in the parent route. In this case, it will render the appropriate contact component (ContactKe, ContactEu, or ContactUs) based on the current URL path.

export const Contact = () => {
  const navigate = useNavigate();
  // This holds the logic for the button click event, which will navigate back to the home page when clicked.

  const handleSubmit = () => {
    console.log('------');
    navigate('/');
    // This line uses the navigate function to programmatically change the route to the home page ('/').
  }

  return (
    <main>
      <div className="component">Contact</div>      
      <Outlet />
      {/* This will display the appropriate contact component based on the current URL path (ContactKe, ContactEu, or ContactUs) */}
      <button onClick={handleSubmit}>Submit Form</button>
    </main>
  )
}
