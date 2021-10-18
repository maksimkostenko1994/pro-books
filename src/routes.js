import {
    ADD_BOOK_ROUTE,
    BOOK_INFO_ROUTE,
    BOOKS_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE, USER_PROFILE
} from "./components/utils/consts";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Books from "./components/books/Books";
import BookInfo from "./components/books/BookInfo";
import AddBook from "./components/books/AddBook";
import Home from "./components/Home";
import UserProfile from "./components/user/UserProfile";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: BOOKS_ROUTE,
        Component: Books
    },
    {
        path: BOOK_INFO_ROUTE,
        Component: BookInfo
    },
    {
        path: HOME_ROUTE,
        Component: Home
    }
]

export const privateRouters = [
    {
        path: USER_PROFILE,
        Component: UserProfile
    },
    {
        path: BOOKS_ROUTE,
        Component: Books
    },
    {
        path: BOOK_INFO_ROUTE,
        Component: BookInfo
    },
    {
        path: ADD_BOOK_ROUTE,
        Component: AddBook
    },
    {
        path: HOME_ROUTE,
        Component: Home
    }
]