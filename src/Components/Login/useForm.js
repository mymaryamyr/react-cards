import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [name] = useState('');
  const [email] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      localStorage.setItem('username', values.name);
      localStorage.setItem('email', values.email);
      callback()
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (Object.keys(validate(values)).length !== 0) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));

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