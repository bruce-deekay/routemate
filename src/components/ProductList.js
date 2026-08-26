import {useSearchParams, useLocation} from 'react-router-dom';

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get('keyword'), searchParams.get('instock'), searchParams.get('rating')); // This will log the query parameters from the URL, such as keyword, instock, and rating.
  const location = useLocation();
  // console.log(location); // This will log the location object, which contains information about the current URL, including pathname, search, hash, and state.
  // useSearchParams is a hook that allow us to search for a speific query parameter whereaas useLocation is a hook that allow us to get the current location object which contains all the information about the current URL
  return (
    <div className="component">ProductList</div>
  )
}
