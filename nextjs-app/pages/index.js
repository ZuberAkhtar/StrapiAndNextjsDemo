import axios from 'axios';

const Home = ({ restaurants, categories, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <>
    <h1>Restaurants</h1>
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
    <br/>
    <h1>Categories</h1>
    <ul>
      {categories.map(category => <li key={category.id}>{category.name}</li>)}
    </ul>
    </>
    
  );
};

Home.getInitialProps = async ctx => {
  try {
    const resRestaurants = await axios.get('http://localhost:1337/restaurants');
    const resCategories = await axios.get('http://localhost:1337/categories');
    const restaurants = resRestaurants.data;
    const categories = resCategories.data;
    return { restaurants, categories };
  } catch (error) {
    return { error };
  }
};

export default Home;