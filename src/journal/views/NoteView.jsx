import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { ImageGallery } from '../components'

export const NoteView = () => {

  const { active: note } = useSelector(state => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(note)


  return (
    <Grid
    className='animate__animated animate__fadeIn animate__faster'
     container 
     direction='row' 
     justifyContent='space-between' 
     alignItems='center' sx={{ mb:1 }}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>38 de agosto, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx={{padding: 2}}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                Guardar
            </Button>
        </Grid>
        <Grid container>
          <TextField 
            type="text" 
            variant="filled" 
            fullWidth 
            placeholder='Ingrese un título'
            label='Título'
            sx={{border: 'none', mb: 1}}
          />

          <TextField 
            type="text" 
            variant="filled" 
            fullWidth 
            multiline
            placeholder='¿Qué sucedió en el día de hoy?'
            minRows={5}
          />
        </Grid>

        <ImageGallery />
    </Grid>
  )
}
