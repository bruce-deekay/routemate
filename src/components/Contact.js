import {useNavigate} from 'react-router-dom';

export const Contact = () => {
  const navigate = useNavigate();
  // This holds the logic for the button click event, which will navigate back to the home page when clicked.

  const handleSubmit = () => {
    console.log('------');
    navigate('/');
    // This line uses the navigate function to programmatically change the route to the home page ('/').
  }

  return (
    <>
      <div className="component">Contact</div>
      <button onClick={handleSubmit}>Submit Form</button>
    </>
  )
}
