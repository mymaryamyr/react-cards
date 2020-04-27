import React, { Component } from 'react';
import s from '../CSS.module/Form.module.css'
import { Redirect } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {
            inputs: {
                name: '',
                mobile: ''
            },
            errors: {},
        };
        this.handleSignUp = this.handleSignUp.bind(this)
        this.handleValidation = this.handleValidation.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    render () {
        return  (
            <form className={s.form}>
                <input className={s.input} type="text" onChange={this.handleChange.bind(this, "name")} value={this.state.inputs["name"]} placeholder="نام خود را وارد کنید" />
                <input className={s.input} onChange={this.handleChange.bind(this, "mobile")} value={this.state.inputs["mobile"]} placeholder="شماره موبایل خود را وارد کنید" />
                <button className={s.button} type="submit" onClick={this.handleSignUp}>ثبت شماره موبایل</button>
                <Logout></Logout>
            </form>
        )
    }
    handleValidation () {
        let formIsValid = true;
        /*{
        let inputs = {};
        let errors = {};
        if(!inputs["name"]){
            formIsValid = false;
            errors["name"] = "Cannot be empty";
         }
        if(typeof inputs["name"] !== "undefined") {
            if(!inputs["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "name is unvalid";
            }
        } 
        this.setState({errors: errors});
        }*/
        return formIsValid;
    }
    handleChange(input, e) {
        let inputs = this.state.inputs;

        inputs[input] = e.target.value;
        this.setState({inputs})
    }
    handleSignUp (e) {
        e.preventDefault();
        let loginStorage = localStorage.setItem("username", this.state.inputs["name"])
        if(this.handleValidation()) {
            alert(`${this.state.inputs["name"]} is sigend up!`)
        } else {
            alert("Has Errors!")
        }
    }
}
class Logout extends Component {
    state = {
        navigate: false
    };
    Logout = () => {
        localStorage.clear()
        this.setState({navigate: true});
    }
    render() {
        const { navigate } = this.state;

        if (navigate) {
            return <Redirect to="/listing" push={true} />;
        }
        return <button className={`${s.button} ${s.red}`} onClick={this.Logout}>خروج از حساب کاربری</button>
    }
}


export default Register;