import React from 'react';
import {Box} from "@material-ui/core";

const Loader = () => {
    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={'80vh'}>
            <div className="lds-roller">
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </Box>
    );
};

export default Loader;