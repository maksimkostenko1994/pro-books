import React from 'react';
import {AppBar, Button, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {ADD_BOOK_ROUTE, BOOKS_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "./utils/consts";
import {Typography} from "@material-ui/core";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../config/fbConfig";

import {connect} from "react-redux";
import {logout} from "../store/users/userActionCreater";

const Navbar = ({logoutUser}) => {
    const [user] = useAuthState(auth)

    return (
        <AppBar position="static">
            <Toolbar>
                {user ?
                    <>
                        <NavLink style={{textDecoration: 'none'}} to={BOOKS_ROUTE}>
                            <Button sx={{color: 'white'}} variant={"text"}>Books</Button>
                        </NavLink>
                        <NavLink style={{textDecoration: 'none'}} to={ADD_BOOK_ROUTE}>
                            <Button sx={{color: 'white'}} variant={"text"}>Add Book</Button>
                        </NavLink>
                        <Typography sx={{flexGrow: 1}}/>
                        <NavLink style={{textDecoration: 'none'}} to={`/user/${user.uid}`}> {/*как сделать уникальную сылку*/}
                            <Button sx={{color: 'white'}} variant={"text"}>{user.displayName}</Button>
                        </NavLink>
                        <NavLink style={{textDecoration: 'none'}} to={HOME_ROUTE}>
                            <Button onClick={logoutUser} sx={{color: 'white'}} variant={"text"}>Logout</Button>
                        </NavLink>
                    </>
                    :
                    <>
                        <NavLink style={{textDecoration: 'none'}} to={HOME_ROUTE}>
                            <Button sx={{color: 'white'}} variant={"text"}>Home</Button>
                        </NavLink>
                        <NavLink style={{textDecoration: 'none'}} to={BOOKS_ROUTE}>
                            <Button sx={{color: 'white'}} variant={"text"}>Books</Button>
                        </NavLink>
                        <Typography sx={{flexGrow: 1}}/>
                        <NavLink style={{textDecoration: 'none'}} to={LOGIN_ROUTE}>
                            <Button sx={{color: 'white'}} variant={"text"}>Login</Button>
                        </NavLink>
                    </>
                }
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = ({userReducer}) => {
  return {
      currentUser: userReducer.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
      logoutUser: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);