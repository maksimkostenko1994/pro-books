import React from 'react';
import {connect} from "react-redux";
import {login} from "../store/users/userActionCreater";
import {Box, Button} from "@material-ui/core";

const Login = ({userLogin}) => {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{
                marginY: '150px',
                borderRadius: '15px',
                width: '500px',
                height: '300px',
                backgroundColor: 'lightgray',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h3 style={{
                    marginBottom: '20px'
                }}>We are using google api for authenticate</h3>
                <Button onClick={userLogin} variant={"outlined"}>Login using google</Button>
            </Box>
        </Box>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        userLogin: () => dispatch(login())
    }
}


export default connect(null, mapDispatchToProps)(Login);