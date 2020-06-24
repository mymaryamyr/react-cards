import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      localStorage.setItem('username', values.name);
      localStorage.setItem('email', values.email);
      callback()
    }
  }, [errors]);

  const handleSubmit = (event) => {
    setIsSubmitting(true);
    setErrors(validate(values));
    if (Object.keys(validate(values)).length !== 0) event.preventDefault();
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));

  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    name,
    email
  }
};

export default useForm;