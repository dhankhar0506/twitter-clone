import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import logo from './logo.png';
import google from './google.png';
import apple from './apple.png';
import styles from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  border: 'none',
  outline: 'none',
  borderRadius: '15px'
};


export default function Login() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e){
    setEmail(e.target.value);
  }

  function handlePasswordChange(e){
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!email || !password){
      alert('please fill the required details');
    }
    else{
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find((user) => user.email === email && user.password === password);

      if(user){
        alert("Login Succesful!");
        navigate('/');
      }
      else{
        alert('Invalid email and password');
      }
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.container}>

            <form onSubmit={handleSubmit}>


              <div className={styles.logo}>
                <img src={logo} alt="twitter logo" />
              </div>


              <div className={styles.heading}>
                <h2>Sign in to Twitter</h2>
              </div>


              <div className={styles.signId}>
                <div className={styles.google}>
                  <img className={styles.google_image} src={google} alt='google logo' />
                  <span>Sign in with Google</span>
                </div>
                <div className={styles.apple}>
                  <img src={apple} alt='apple logo' />
                  <span>Sign in with Apple</span>
                </div>
              </div>


              <div className={styles.info}>
                <input type="email" name='email' placeholder='Phone,email or username' onChange={handleEmailChange} value={email} />
              </div>
              <div className={styles.info}>
                <input type="password" name='password' placeholder='Password' onChange={handlePasswordChange} value={password} />
              </div>

              <div className={styles.button}>
                <button id={styles.next} type='submit'>Next</button>
                <button id={styles.fpass}>Forget Password</button>
              </div>


              <div className={styles.not_account}>
                <p>Don't have an account? <span><Link to="/signup">SignUp</Link></span></p>
              </div>
            </form>
          </div>

        </Box>
      </Modal>
    </div>
  );
}
