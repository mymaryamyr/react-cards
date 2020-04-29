import React, { Component } from 'react';
import s from '../CSS.module/Form.module.css'
import { Redirect } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: '',
                mobile: ''
            },
            errors: "",
            local: ""
        };
    }
    Logout = () => {
        localStorage.clear()
        this.setState({local: false});
    }
    SignIn = (e) => {
        e.preventDefault();
       if(this.handleValidation()) {
            localStorage.setItem("username", this.state.inputs["name"])
            alert(`${this.state.inputs["name"]} is sigend up!`)
            this.setState({local: true});
        } else {
            alert(this.state.errors)
        }

    }
    componentDidMount() {
        this.input.focus();
    }
    render () {
        return  (
            <form className={s.form}>
                {this.state.local ? 
                    <button 
                        className={`${s.button} ${s.red}`} 
                        onClick={this.Logout}
                    >
                        خروج از حساب کاربری
                    </button> 
                : 
                    <div>
                        <input 
                            className={s.input} 
                            type="text" 
                            onChange={(e) => (this.handleChange(e, "name"))}
                            ref={(node) => {this.input = node; }} 
                            placeholder="نام خود را وارد کنید" 
                        />
                        <input 
                            className={s.input} 
                            onChange={(e) => (this.handleChange(e, "mobile"))}
                            placeholder="شماره موبایل خود را وارد کنید" 
                        />                
                        <button 
                            className={s.button} 
                            type="submit" 
                            onClick={this.SignIn}
                        >
                            ثبت شماره موبایل
                        </button>                
                    </div>
                }
            </form>
        )
    }
    handleValidation = () => {
        let formIsValid = true;
        let { inputs, errors } = this.state;
        if(!inputs["name"]){
            formIsValid = false;
            errors = "Cannot be empty";
         }
        if(typeof inputs["name"] !== "undefined") {
            if(!inputs["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors = "name is invalid";
            }
        } 
        if(!inputs["mobile"]){
            formIsValid = false;
            errors = "Cannot be empty";
        }
        if(typeof inputs["mobile"] !== "undefined") {
            if(!inputs["mobile"].match(/09\d{7}/)) {
                formIsValid = false;
                errors = "mobile is invalid";
            }
        } 
        this.setState({errors});
        return formIsValid;
    }
    handleChange = (e, input) => {
        let { value } = e.target;
        this.setState({
            inputs: {
                ...this.state.inputs,
                [input] : value
            }
        })
    }
}


export default Register;