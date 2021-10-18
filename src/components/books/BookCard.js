import React, {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, firestore} from "../../config/fbConfig";
import {connect} from "react-redux";
import {removeBook} from "../../store/books/bookActionCreater";
import {StarBorder} from '@mui/icons-material';

const BookCard = ({id, title, author, image, index, rate, remove}) => {
        const [user] = useAuthState(auth)
        const books = firestore.collection("books")

        const [click, setClick] = useState(false)
        const [docId, setId] = useState('')

        useEffect(() => {
            if (click) {
                books.get().then(data => setId(data.docs[index].id))
                if (docId) {
                    firestore.collection("books").doc(docId).delete().then(() => {
                        setClick(false)
                    }).catch((error) => {
                        console.error("Error removing document: ", error);
                    });
                }
            }
        }, [docId, click, books, index])


        const removeBookFromCollection = async () => {
            setClick(true)
        }

        return (
            <Card sx={{width: 245, margin: '15px 5px'}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`${image}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        <StarBorder/>{rate}
                    </Typography>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h6">
                        {author}
                    </Typography>
                </CardContent>
                <CardActions>
                    <NavLink to={`/books/${id}`} style={{textDecoration: 'none'}}>
                        <Button size="small">View info</Button>
                    </NavLink>
                    {user ? <Button onClick={() => removeBookFromCollection()} style={{marginLeft: 'auto'}}
                                    variant={'contained'} color={'error'} size="small">Remove</Button> : ''}
                </CardActions>
            </Card>
        );
    }
;

const mapDispatchToProps = dispatch => {
    return {
        remove: (path) => dispatch(removeBook(path))
    }
}

export default connect(null, mapDispatchToProps)(BookCard);