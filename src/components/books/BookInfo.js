import React, {useState} from 'react';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {auth, firestore} from "../../config/fbConfig";
import Loader from "../Loader";
import {Box, Button, Card, CardContent, CardMedia, TextField, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {addCommentToBook} from "../../store/books/bookActionCreater";
import Comment from "../Comment";
import {useAuthState} from "react-firebase-hooks/auth";

const BookInfo = ({match, addComment}) => {
    const id = +match.params.id

    const [user] = useAuthState(auth)

    const [books, loading] = useCollectionData(firestore.collection('books'))
    const [comments] = useCollectionData(firestore.collection('comments'))

    const [bookComment, setBookComment] = useState('')

    const onChangeHandler = ({target}) => {
        setBookComment(target.value)
    }

    if (loading) return <Loader/>

    const book = books.find(item => item.id === id)

    return (
        <>
            <Card sx={{
                margin: '15px auto',
                width: '1000px',
            }}>
                <Box display={"flex"}>
                    <Box width={'340px'}>
                        <CardMedia
                            component="img"
                            width="340px"
                            image={`${book.image}`}
                            alt="green iguana"
                            sx={{margin: '10px'}}
                        />
                    </Box>
                    <Box flexDirection={"column"} width={'50%'} sx={{margin: '20px 30px'}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                {book.title}
                            </Typography>
                            <Typography gutterBottom variant="h6">
                                Author: <span style={{color: 'grey'}}>{book.author}</span>
                            </Typography>
                            <Typography gutterBottom variant="h6">
                                Description: <span style={{color: 'grey'}}>{book.description}</span>
                            </Typography>
                            <Typography gutterBottom variant="h6">
                                Rate: <span style={{color: 'grey'}}>{book.rate}</span>
                            </Typography>
                        </CardContent>
                    </Box>
                </Box>
            </Card>
            <Card sx={{
                margin: '15px auto',
                width: '1000px',
            }}>
                <Box display={'flex'} flexDirection={"column"} gap={'10px'} justifyContent={'space-around'}>
                    {user ?
                        <Box display={'flex'} flexDirection={'column'} sx={{padding: "5px"}}>
                            <TextField onChange={onChangeHandler} id="standard-basic"
                                       label="Type comment"
                                       variant="standard"/>
                            <Button onClick={() => {
                                addComment({text: bookComment, id: Date.now(), bookId: id, author: user.displayName})
                                setBookComment('')
                            }}
                                    variant={"contained"} sx={{width: "150px", alignSelf: 'flex-end', marginTop: '5px'}}>Add
                                comment</Button>
                        </Box>
                        : <h2 style={{margin: "15px 20px"}}>Login to add comment</h2>
                    }
                    <Box flexDirection={"column"} sx={{margin: '20px 30px'}}>
                        <CardContent>
                            <Typography variant={'h5'} sx={{marginBottom: '15px'}}>Comments</Typography>
                            {comments === undefined ? <h1>No comments</h1> : comments.filter(item => item.bookId === id).length !== 0 ? comments.filter(item => item.bookId === id).map(item => <Comment key={item.id} comment={item}/>): <h1>No comments</h1> }
                        </CardContent>
                    </Box>
                </Box>
            </Card>
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addComment: (comment) => dispatch(addCommentToBook(comment))
    }
}

export default connect(null, mapDispatchToProps)(BookInfo);