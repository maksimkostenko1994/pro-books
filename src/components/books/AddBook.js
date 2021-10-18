import React, {useState} from 'react';
import {Box, Button} from "@material-ui/core";
import {TextField} from "@mui/material";
import {connect} from "react-redux";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../config/fbConfig";
import {addBook} from "../../store/books/bookActionCreater";
import {BOOKS_ROUTE} from "../utils/consts";

const AddBook = ({bookAdd, history}) => {
    const [user] = useAuthState(auth)

    const [data, setData] = useState({
        image: '',
        description: '',
        pageQuantity: 0,
        rate: 0,
        title: '',
        author: ''
    })

    const onChangeHandler = ({target}) => {
        setData({...data, [target.name]: target.value})
    }

    return (
        <>
            <h1 style={{textAlign: 'center', marginTop: '30px'}}>Add Book</h1>
            <Box display={'flex'} flexDirection={'column'} gap={'20px'} width={'500px'} sx={{
                margin: '20px auto'
            }}>
                <TextField name={'title'} onChange={onChangeHandler} placeholder={'Type title...'}/>
                <TextField name={'author'} onChange={onChangeHandler} placeholder={'Type author...'}/>
                <TextField name={'image'} onChange={onChangeHandler} placeholder={'Type image...'}/>
                <TextField name={'description'} onChange={onChangeHandler} placeholder={'Type description...'}/>
                <TextField name={'pageQuantity'} type={'number'} onChange={onChangeHandler} placeholder={'Type page quantity...'}/>
                <Button variant={'contained'} onClick={() => {
                    bookAdd({
                        ...data, rate: 0, userId: user.uid, id: Date.now()
                    })
                    setData({
                        image: '',
                        description: '',
                        pageQuantity: 0,
                        rate: 0,
                        title: '',
                        author: ''
                    })
                    history.push(BOOKS_ROUTE)
                }}>Add</Button>
            </Box>
        </>
    );
};

const mapDispatchToProps = dispatch => {
  return {
      bookAdd: (book) => dispatch(addBook(book))
  }
}


export default connect(null, mapDispatchToProps)(AddBook);