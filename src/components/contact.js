import React, { Component } from 'react'
import './contact.css'
import axios from 'axios';
export default class Contact extends Component {
    state = {
        username:null,
        email:null,
        password:null,
        address:null,
        phonenum:null,
       
		users:{username:"",email:"",password:"",address:"",phonenum:""} /* */
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
	handleSubmit=(e)=>{
		e.preventDefault(); /*prevet page from refreshig  stopig event*/
		const userData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password,
            address:this.state.address,
            phonenum:this.state.phonenum,
            
		}
		this.setState({
			users:userData
			
		})
    }
   
    
    render() {
        return (
            <div>
            <div className="custombackground">
                <div className="row mx-0">
                  
                  
                    <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                                            <div className="cardParent">

                    <div class="card customcard">

                    <div class="card-body p-3">
                    <h5 class="card-title text-center pb-3">CONTACT FORM</h5>
                   
                   
                    <div className="row mx-0 py-4">
                        <div className="col-2 custom_col">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div className="col-10">
                    <input type="text" name="username" required onChange={this.handleChange} className="cardInput" placeholder="Username"/>					
                    </div>
                    </div>

                    <div className="row mx-0 py-4">
                    <div className="col-2 custom_col">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    </div>
                    <div className="col-10">
                    <input type="text" name="email" required onChange={this.handleChange} className="cardInput" placeholder="email"/>				
                    </div>
                    </div>

                    <div className="row mx-0 py-4">
                    <div className="col-2 custom_col">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    </div>
                    <div className="col-10">
                    <input type="password" className="cardInput"  name="password" required onChange={this.handleChange} className="cardInput" placeholder="Password"/>				
                    </div>
                    </div>

                    <div className="row mx-0 py-4">
                    <div className="col-2 custom_col">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    </div>
                    <div className="col-10">
                    <input type="text" name="address" required onChange={this.handleChange} className="cardInput" placeholder="address"/>				
                    </div>
                    </div>

                    <div className="row mx-0" py-4>
                    <div className="col-2 custom_col">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    </div>
                    <div className="col-10">
                    <input type="number" name="phonenum" required onChange={this.handleChange} className="cardInput" placeholder="number"/>				
                    </div>
                    </div>

                    <div className="row mx-0 pt-4 pb-2">
                    <div className="mx-auto">
                    <button type="submit"  value="submit" className="btn btn-primary mx-auto">Submit</button>
                    </div>
                    </div>


                    </div>
                    </div> 
                    </div>
                    </form>

                    </div>

                    <div className="col-md-6">
					
							<div className="text-center mt-5">
							<h1>SHOW FORM DETAILS WITHOUT LOADING THE PAGE</h1>
							<p>{this.state.users.username}</p>
                            <p>{this.state.users.email}</p>
							<p>{this.state.users.password}</p>

        <p>{this.state.users.address}</p>
    <p>{this.state.users.phonenum}</p>
    
							</div>
							
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
