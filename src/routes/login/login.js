import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const defaultState = {
  name:null,
  email:null,
  password:null,
  nameError:null,
  emailError:null,
  passwordError:null
  }
  class CustomFormValidation extends React.Component{
    constructor(){
      super();
      this.state = defaultState;
      this.handleInputChange = this.handleInputChange.bind(this);
      }
      handleInputChange(event) {
      const target = event.target;
      var value = target.value;
      const name = target.name;
      this.setState({
      [name]: value
      });
      }
      validate(){
      let nameError = "";
      let emailError = "";
      let passwordError = "";
      if(!this.state.name){
      nameError = "नाव आवश्यक आहे";
      }
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!this.state.email || reg.test(this.state.email) === false){
      emailError = "चुकीचे ईमेल स्वरूप";
      }
      if(!this.state.password){
      passwordError = "चुकीचे पासवर्ड स्वरूप";
      }
      if(emailError || nameError || passwordError){
      this.setState({nameError,emailError,passwordError});
      return false;
      }
      return true;
      }
      submit(){
      if(this.validate()){
      console.warn(this.state);
      this.setState(defaultState);
      }
      }
    render(){
      return(
        <div className="App">
          <div class="container-fluid ps-md-0">
              <div class="row g-0">
                <div class="d-none d-md-flex col-md-4 col-lg-8 bg-image">
                <div class="login d-flex align-items-center p-t-24 width-100 flex-direction-column">
                  <div>
                    <p class="color-white fs-40 font-weight-600"><span><img class="m-r-18" src="Seal_of_Maharashtra.png" height="100" width="100"/></span>सोलापूर तहसीलदार कार्यालय</p>
                  </div>
                  <form class='padding-top-5vh width-25vw'>
                    <div class="form-floating mb-3">
                      <input className={"form-control " + (this.state.emailError ? 'invalid' : '')} id="floatingInput" name='email' placeholder="175485718555"  />
                      <label for="floatingInput">अर्ज क्रमांक</label>
                    </div>
                    <div class="d-grid">
                    <a class="download" type="button" onClick={()=>this.submit()}><span><svg class="m-r-10" xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="##116dfa"><path d="M5.5 36Q4.05 36 3.025 34.975Q2 33.95 2 32.5Q2 31.05 3.025 30.025Q4.05 29 5.5 29Q5.75 29 6 29.025Q6.25 29.05 6.65 29.15L16.65 19.15Q16.55 18.75 16.525 18.5Q16.5 18.25 16.5 18Q16.5 16.55 17.525 15.525Q18.55 14.5 20 14.5Q21.45 14.5 22.475 15.525Q23.5 16.55 23.5 18Q23.5 18.1 23.35 19.15L28.85 24.65Q29.25 24.55 29.5 24.525Q29.75 24.5 30 24.5Q30.25 24.5 30.5 24.525Q30.75 24.55 31.15 24.65L39.15 16.65Q39.05 16.25 39.025 16Q39 15.75 39 15.5Q39 14.05 40.025 13.025Q41.05 12 42.5 12Q43.95 12 44.975 13.025Q46 14.05 46 15.5Q46 16.95 44.975 17.975Q43.95 19 42.5 19Q42.25 19 42 18.975Q41.75 18.95 41.35 18.85L33.35 26.85Q33.45 27.25 33.475 27.5Q33.5 27.75 33.5 28Q33.5 29.45 32.475 30.475Q31.45 31.5 30 31.5Q28.55 31.5 27.525 30.475Q26.5 29.45 26.5 28Q26.5 27.75 26.525 27.5Q26.55 27.25 26.65 26.85L21.15 21.35Q20.75 21.45 20.5 21.475Q20.25 21.5 20 21.5Q19.9 21.5 18.85 21.35L8.85 31.35Q8.95 31.75 8.975 32Q9 32.25 9 32.5Q9 33.95 7.975 34.975Q6.95 36 5.5 36Z" fill="#116dfa"/></svg></span>अर्ज ट्रॅक करा</a>
                    </div>
                  </form>
                </div>
                </div>
                <div class="col-md-8 col-lg-4">
                  <div class="login d-flex align-items-center py-5">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h3 class="login-heading mb-4">कर्मचारी लॉगिन</h3>
                          <form>
                            <div class="form-floating mb-3">
                              <input type="email" className={"form-control " + (this.state.emailError ? 'invalid' : '')} id="floatingInput" name='email' placeholder="name@example.com" value={this.state.email} onChange={this.handleInputChange} />
                              <label for="floatingInput">ईमेल</label>
                              <span className="text-danger">{this.state.emailError}</span>
                            </div>
                            <div class="form-floating mb-3">
                              <input type="password" className={"form-control " + (this.state.passwordError ? 'invalid' : '')} id="floatingPassword" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                              <label for="floatingPassword">पासवर्ड</label>
                              <span className="text-danger">{this.state.passwordError}</span>
                            </div>
                            <div class="d-grid">
                            <a class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2 fs-22" type="button" onClick={()=>this.submit()}><span><svg class="m-r-10" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M20.55 32.75 18.4 30.6 23.5 25.5H6V22.5H23.4L18.3 17.4L20.45 15.25L29.25 24.05ZM24.45 42V39H39Q39 39 39 39Q39 39 39 39V9Q39 9 39 9Q39 9 39 9H24.45V6H39Q40.2 6 41.1 6.9Q42 7.8 42 9V39Q42 40.2 41.1 41.1Q40.2 42 39 42Z" fill="#ffffff"/></svg></span>लॉगिन कर</a>
                              <div class="text-center">
                                <a class="small" href="#">पासवर्ड विसरला ?</a>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
 )
}
}
export default CustomFormValidation;
