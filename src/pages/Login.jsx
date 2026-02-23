import logo from '../assets/logo.svg';
import { Formik,useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import { app } from '../auth/authConfig';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();
    const [message,setMessage] = useState('')
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: new Yup.ObjectSchema({
            email: Yup.string().email().required('This field is required'),
            password: Yup.string().required('This field is required')

            

        }),
        onSubmit:(data) => {
         setMessage('');
          signInWithEmailAndPassword(auth, data.email, data.password).then((userCredentials) => {
            if(userCredentials){
                window.dataLayer = window.dataLayer || {};
                window.dataLayer = {
                event: "sign_in",
                ecommerce: {
                    currency: "ZAR",
                    items:[]
                }
                }
                navigate('/')
            }
          }).catch((err) => {
            if(err){
                setMessage('Incorrect Credentials')
            }
          })
        }
    })
    return (
        <div className="h-[100vh] grid items-center text-left">
            <div className="h-100 w-150 m-auto">
                <img src={logo} className='h-40 w-40 block m-auto' />
                <form action="" onSubmit={formik.handleSubmit}>
                    <p>{message}</p>
                <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
                    Email
                </label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Email Address"
                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </div>
                        {formik.touched.email && formik.errors.email && <p className='text-right text-red-500 pt-1'>Field required</p>}
                </div>
                <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900 mt-5">
                    Password
                </label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </div>
                    {formik.touched.password && formik.errors.password && <p className='text-right text-red-500 pt-1'>Field required</p>}
                </div>
                <button type="submit" className='block mt-10 p-2 text-center w-full bg-violet-500 rounded-md text-white cursor-pointer'>SIGN IN</button>
                <p className='text-center mt-2'>Don't have an account? <Link to="/register" className='underline'>Sign Up</Link></p>

                </form>
            </div>
        </div>
    )
}

export default Login;