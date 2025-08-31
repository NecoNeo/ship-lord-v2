import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('view/pages/home/home.tsx'),
  route('ship-design', 'view/pages/shipDesign/shipDesign.tsx'),
] satisfies RouteConfig;
