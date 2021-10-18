import React from 'react';

const Comment = ({comment}) => {
    return (
        <div style={{borderBottom: '1px solid lightgrey', width: "100%", marginBottom: '30px'}}>
            <h1>{comment.author}</h1>
            <p>{comment.text}</p>
        </div>
    );
};

export default Comment;