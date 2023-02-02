import UserContext from "../context/UserContext";
import { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

const Register = () => {
  
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
  };
  const {users, addNewUser, setLoggedInUser } = useContext(UserContext);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (values,{ setSubmitting }) =>{
    if (values.password !== values.confirmPassword){
      setSubmitting(false);
      return;
    }
    if (users.find(user => user.email === values.email)){
      setInvalidEmail(true);
      setSubmitting(false);
    }else {
      let newUser = {
        ...values,
        id: Date.now()
      };
      
      addNewUser(newUser);
      setLoggedInUser(newUser);
      navigate('/home');
    }
  }

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const validationSchema = yup.object().shape({
    email: yup.string()
      .email ('Must be valid email')
      .max(255)
      .required('Email is required'),
      password: yup.string()
      .min(5)
      .matches(passwordRules, {message: "Password must contain at least 5 characters, one uppercase, one number and one lowercase character"})
      .required('Required'),
   confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Password must match')
      .required('Required')
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values,errors, touched, setValues }) => (
        <Form >
          <label>
            Email:
          <Field 
            type="email" name="email" value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          {invalidEmail && <span>Username already taken</span>}
           
          {errors.email && touched.email ? 
            <div className="error-message">{errors.email}</div>
            :null
          }
          </label>
          <label>
            Password:
          <Field 
            type="password" name="password" value={values.password} 
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          {errors.password && touched.password ? 
            <div className="error-message">{errors.password}</div>
            :null
          }
          </label>
          <label>
            Confirm Password:
          <Field 
            type="password" name="confirmPassword" value={values.confirmPassword}  
            onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
          />
          {errors.confirmPassword && touched.confirmPassword ?
            <div className="error-message">{errors.confirmPassword}</div>
            : null
          }
          </label>
          <div>
        <input type="submit" value="Register" />
        </div>
        </Form>
      )}
    </Formik>
  );

  
};

export default Register;