import { NavLink, Outlet } from 'react-router-dom';

// localhost:3000/
//localhost:3000/dogs
//localhost:3000/dogs/dog-5

export const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};