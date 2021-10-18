import React from 'react';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {auth, firestore} from "../../config/fbConfig";
import {Box, Button, Card} from "@material-ui/core";
import BookCard from "./BookCard";
import Loader from "../Loader";
import {NavLink} from "react-router-dom";
import {ADD_BOOK_ROUTE} from "../utils/consts";
import {useAuthState} from "react-firebase-hooks/auth";

const Books = () => {
    const [user] = useAuthState(auth)
    const [books, loading] = useCollectionData(
        firestore.collection('books')
    )

    if (loading) {
        return <Loader/>
    }

    return (
        <Box display={"flex"}>
            {
                books.map((book,index) => <BookCard key={book.id} rate={book.rate} index={index} id={book.id} title={book.title} author={book.author}
                                            image={book.image}/>)
            }
            {user ?
                <Card sx={{
                    width: 245,
                    margin: '15px 5px',
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <NavLink to={ADD_BOOK_ROUTE} style={{textDecoration: 'none'}}>
                        <Button variant={'contained'}>Add book</Button>
                    </NavLink>
                </Card> : ''}
        </Box>
    );
};

export default Books;