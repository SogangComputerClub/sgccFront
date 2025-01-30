import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {

    const [step, setStep] = useState(1);

    const [data, setData] = useState({
        name: '',
        studentId: '',
        email: '',
        phone: '',
        id: '',
        password: '',
        confirmPassword: '',

    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    //     return(

    // );
};
export default SignUp;
