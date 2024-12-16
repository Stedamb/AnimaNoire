export interface Route {
  path: string;
  label: string;
  icon?: string;
}

export const routes: Route[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/artists",
    label: "Artisti",
  },
  {
    path: "https://animanoireshop.com/",
    label: "Shop",
  },
];

export default routes;
