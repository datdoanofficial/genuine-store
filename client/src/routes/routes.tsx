import home from "../pages/Home";
import store from "../pages/Store";
import news from "../pages/News";
import faq from "../pages/FAQ";
import contact from "../pages/Contact";
import login from "../pages/Auth/Login";
import register from "../pages/Auth/Register";
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
    path: "/sign-in",
    page: login,
    isShowHeader: false,
    isShowFooter: false,
  },
  {
    path: "/sign-up",
    page: register,
    isShowHeader: false,
    isShowFooter: false,
  },
  {
    path: "*",
    page: notfound,
    isShowHeader: false,
    isShowFooter: false,
  },
];
