import React from "react";
import { useState } from "react";
import styles from './register.module.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link, useNavigate } from 'react-router-dom';

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
  border:'none',
  outline:'none',
  borderRadius:'15px'
};

const Register= () => {

  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const [data, setData] = useState({
    name:'',
    email:'',
    phone:'',
    dob:'',
    password:''
  });

  function handleChange(e){
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e){
    e.preventDefault();

    if(!data.name || !data.email || !data.phone || !data.dob || !data.password){
      alert("please fill all the required details!")
    }
    else{

        // Retrieve existing users from local storage
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
        // Add the new user to the existing users array
        const updatedUsers = [...existingUsers, data];
    
        // Save the updated users array to local storage
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    
        alert('Registration Successful!')
    
        // Reset the form fields
        setData({ name: '', email: '', phone: '', dob: '',password: '' });
        navigate('/login')
    }
  }

  return (
    <>
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
            <div className={styles.heading}>
                <h2>Create your account</h2>
            </div>


            <div className={styles.info}>
                <input type="text" name="name" placeholder='Name' value={data.name} onChange={handleChange}/>
                <input type="email" name="email" placeholder='Email' value={data.email} onChange={handleChange}/>
                <input type="tel" name="phone" placeholder='Phone' value={data.phone} onChange={handleChange}/>
                <input type="password" name="password" placeholder='Password' value={data.password} onChange={handleChange}/>
                <label>Date of birth</label>
                <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                <input type="date" name="dob" placeholder='Month day and year' value={data.dob} onChange={handleChange}/>

            </div>

            <div className={styles.button}>
                <button id={styles.next} type="submit">Next</button>
            </div>


            <div className={styles.not_account}>
                <p>Have an account? <span><Link to="/login">Login</Link></span></p>
            </div>
          </form>

        </div>

        </Box>
      </Modal>
    </div>
    </>
  );
};

export default Register;
