import home from "../pages/Home";
import store from "../pages/Store";
import news from "../pages/News";
import faq from "../pages/FAQ";
import contact from "../pages/Contact";
import notfound from "../pages/NotFound";

export const routes = [
  {
    path: "/",
    page: home,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/store",
    page: store,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/news",
    page: news,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/faq",
    page: faq,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/contact",
    page: contact,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "*",
    page: notfound,
    isShowHeader: false,
    isShowFooter: false,
  },
];
