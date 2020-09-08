import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductAction from "./pages/ProductActionPage/ProductAction";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/product-list",
    exact: false,
    main: () => <ProductListPage />,
  },
  {
    path: "/products/add",
    exact: false,
    main: ({history}) => <ProductAction history={history} />,
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({ match }) => <ProductAction match={match} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];
export default routes;
