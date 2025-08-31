import { NavLink } from 'react-router';

export function meta() {
  // {}: Route.MetaArg
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div>
      <div>home</div>
      <div>
        <NavLink to="/ship-design">ship-design</NavLink>
      </div>
    </div>
  );
}
