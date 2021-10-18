import React from 'react';
import {Box, Typography} from "@material-ui/core";

const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginY: '300px',
            userSelect: 'none'
        }}>
            <Typography variant={'h1'}>
                Welcome to PRO BOOKS
            </Typography>
        </Box>
    );
};

export default Home;