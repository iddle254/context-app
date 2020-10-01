import React, { useContext } from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Avatar from 'react-avatar';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {withStyles} from "@material-ui/core/styles";
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
    english: {
        signIn: "Sign in",
        email: "Email address",
        password: "Password"
    },
    french:{
        signIn: "Se Connnecter",
        email: "Adresse Electronique",
        password: "Mot de passe"
    },
    spanish : {
        signIn: "Registrarse",
        email:"Correo Electronico",
        password:"Contrasena"
    }
};

function Form(props) {
    const { language, changeLanguage } = useContext(LanguageContext);
    const {classes} = props; 
    console.log(language);
    const {signIn, email, password} = words[language];
    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h5'>{signIn}</Typography>
                <Select value={language} onChange={changeLanguage}>
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="french">French</MenuItem>
                    <MenuItem value="spanish">Spanish</MenuItem>
                </Select>
                <form className={classes.form}>
                    <formControl margin='normal' required fullWidth>
                        <InputLabel htmlFor="email">{email}</InputLabel>
                        <Input id='email' name='email' autoFocus />
                    </formControl>
                    <formControl margin='normal' required fullWidth>
                        <InputLabel htmlFor="email">{password}</InputLabel>
                        <Input id='password' name='password' autoFocus />
                    </formControl>
                    <FormControlLabel control={<Checkbox color='primary'/> }
                    label='Remember Me' />
                    <Button
                    variant='contained'
                    type='submit'
                    fullWidth
                    color='primary'
                    className={classes.submit}
                    >{signIn}</Button>
                </form>
            </Paper>
        </main>
    )
}

export default withStyles(styles)(Form); 