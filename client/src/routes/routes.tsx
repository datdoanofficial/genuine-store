import home from "../pages/Home";
import store from "../pages/Store";
import news from "../pages/News";
import faq from "../pages/FAQ";
import contact from "../pages/Contact";
import wishlist from "../pages/Wishlist";
import cart from "../pages/Cart";
import productdetails from "../pages/Products/ProductDetail";
import login from "../pages/Auth/Login";
import register from "../pages/Auth/Register";
import forgotPassword from "../pages/Auth/ForgotPassword";
import birthdayRequired from "../pages/Auth/BirthdayRequired";
import verifyEmail from "../pages/Auth/VerifyEmail";
import emailSent from "../pages/Auth/EmailSent";
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
    path: "/wishlist",
    page: wishlist,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/cart",
    page: cart,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/product-details",
    page: productdetails,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/login",
    page: login,
    isShowHeader: false,
    isShowFooter: false,
  },
  {
    path: "/register",
    page: register,
    isShowHeader: false,
    isShowFooter: false,
  },
  {
    path: "/login/forgot-password",
    page: forgotPassword,
    isShowHeader: false,
    isShowFooter: false,
  },
  {
    path: "/login/forgot-password/email-sent",
    page: emailSent,
    isShowHeader: false,
    isShowFooter: false,
  },
  {
    path: "/register/date-of-birth",
    page: birthdayRequired,
    isShowHeader: false,
    isShowFooter: false,
  },
  {
    path: "/register/verify-email",
    page: verifyEmail,
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
