import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const formData = {
  email: 'axely7@hotmail.com',
  password: '123456',
  displayName: 'Axel Jimenez'
}



export const RegisterPage = () => {

  const { displayName, email, password, onInputChange, formState} = useForm(formData)

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
  }


  return (
   <AuthLayout title='Crear Cuenta'>
    <form onSubmit={onSubmit}>
      <Grid container>

        <Grid item xs={12} sx={{mt: 2}}>
          <TextField label="Nombre Completo" type="text" placeholder='Nombre Completo' name="displayName" value={displayName} onChange={onInputChange} fullWidth/>
        </Grid>

        <Grid item xs={12} sx={{mt: 2}}>
          <TextField label="Correo" type="email" placeholder='correo@google.com' name="email" value={email} onChange={onInputChange} fullWidth/>
        </Grid> 

        <Grid item xs={12} sx={{mt: 2}}>
          <TextField label="Contraseña" type="password" placeholder='Contraseña' name="password" value={password} onChange={onInputChange} fullWidth/>
        </Grid>

        <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' fullWidth>Crear Cuenta</Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent='end'>
          <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
          <Link component={RouterLink} color='inherit' to='/auth/login'>
            Ingresar
          </Link>
        </Grid>
      </Grid>
    </form>
   </AuthLayout>
  
  
  )
}
