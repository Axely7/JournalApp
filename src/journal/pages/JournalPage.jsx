import { MailOutline } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/* <Typography>Aute consequat do aliqua excepteur adipisicing sunt minim labore ad aliquip ut consectetur. Sit ipsum sit minim commodo consequat cupidatat aliqua ipsum. Mollit cillum ea nulla in velit exercitation ea nisi exercitation incididunt. Veniam laboris nulla labore ut elit esse dolore ex do. Ex qui enim amet duis qui laborum consequat mollit reprehenderit do in qui id. Officia reprehenderit fugiat fugiat et cupidatat.</Typography> */}
        {/* <NothingSelectedView /> */}
        <NoteView />
      </JournalLayout>
    </>
  
  )
}
