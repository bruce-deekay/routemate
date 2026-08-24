import {Link, NavLink} from 'react-router-dom';
import Logo from '../assets/logo512.png';

export const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        <img src={Logo} alt="Routemate Logo"/>
        <span>Routemate</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        {/* end prop is used to indicate that this link should only be active on the exact path ie it stops home from being always active */}
        <NavLink to="/products" className="link">Products</NavLink>
        <NavLink to="/contact" className="link">Contact</NavLink>
        {/* When we use <a> tags, we refresh the entire website since it's not using React Router's navigation. Thus we use <Link> or <NavLink> instead. */}
        {/* NavLink automatically adds active class to the page we are on in the browser */}
        {/* Link and NavLink are only used when we want to navigate within the React application. We use <a> tag when we want to link to an external website. */}
      </nav>
    </header>
  )
}
