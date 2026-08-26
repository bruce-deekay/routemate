import {useParams} from 'react-router-dom';

export const ProductDetail = () => {
  const params = useParams();
  console.log(params.id); // This will log the dynamic parameters from the URL, such as the product ID.
  return (
    <div className="component">Product {params.id} - ProductDetail</div>
  )
}
