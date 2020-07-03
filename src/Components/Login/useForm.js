import { useState, useEffect } from 'react';
import { useHistory, useLocation} from "react-router-dom";

const useForm = (callback, validate) => {
  
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/home" } };
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