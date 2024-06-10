import home from "../pages/Home";
import notfound from "../pages/NotFound";

export const routes = [
  {
    path: "/",
    page: home,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "*",
    page: notfound,
    isShowHeader: false,
    isShowFooter: false,
  },
];
