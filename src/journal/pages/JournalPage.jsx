import { AddOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { startNewNote } from '../../store/journal'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {

  const dispatch = useDispatch();


  const onClickNewNote = () => {
    dispatch(startNewNote());
  }


  return (
    <>
      <JournalLayout>
        {/* <Typography>Aute consequat do aliqua excepteur adipisicing sunt minim labore ad aliquip ut consectetur. Sit ipsum sit minim commodo consequat cupidatat aliqua ipsum. Mollit cillum ea nulla in velit exercitation ea nisi exercitation incididunt. Veniam laboris nulla labore ut elit esse dolore ex do. Ex qui enim amet duis qui laborum consequat mollit reprehenderit do in qui id. Officia reprehenderit fugiat fugiat et cupidatat.</Typography> */}
        <NothingSelectedView /> 
        {/* <NoteView /> */}
        <IconButton 
          onClick={onClickNewNote}
          size='large' 
          sx={{ 
            color: 'white', 
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity:0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
           }}>
            <AddOutlined sx={{ fontSize: 30 }}/>
           </IconButton>
           
      </JournalLayout>
    </>
  
  )
}
