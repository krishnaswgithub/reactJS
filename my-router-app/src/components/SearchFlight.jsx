import { Link, Outlet } from "react-router-dom";

export const SearchFlight = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Flights" />
        <nav>
          <Link to="featured">Featured</Link>
          <Link to="new">New</Link>
        </nav>
      </div>
      {/* If we're at the following paths :
        /products          -> <Outlet /> is <FeaturedProducts /> (index route)
        /products/featured -> <Outlet /> is <FeaturedProducts />
        /products/new      -> <Outlet /> is <NewProducts />
      */}
      <Outlet />
    </>
  );
};
