
import { Header, Footer } from './components/Base'
import Body from './components/Body';

function App() {
  const { useState } = React;
  const [showContentArea, setShowContentArea] = useState(false);
  return (
    <div id="mockup-root" class="bg-wincom-gray" style={{ overflow: 'hidden' }}>
      <Header />
      {
        showContentArea ?
          <Body /> :
          <div id="mockup-body" className="mw-100" style={{ display: 'flex', justifyContent: 'center', padding: '20px', }}>

            <div id="login" style={{ border: '1px solid black', borderRadius: '5px', width: '470px', height: '370px' }} >
              <div class="container-fluid" >
                <div class="span12">
                  <div class="login well well-small">
                    <div class="card-header bg-muted text-white" style={{ display: 'inline-flex', gap: '290px', marginTop: '5px' }}>
                      <h4>Login</h4>
                      <p style={{ float: 'right' }} >
                        <img src={"https://cromero-wincomplm.github.io/provisioning-platform-mockup/public/img/wincomlogo.png"} alt="logo" style={{ width: '40px', height: '40px' }} />
                        <span>Wincom</span>
                      </p>
                    </div>
                    <div class="center">

                    </div>
                    <form class="login-form" id="UserLoginForm" >
                      <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter your username" />
                      </div>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter your password" />
                      </div>

                      <div class="control-group">
                        <label id="remember-me">
                          <input type="checkbox" name="data[User][remember_me]" value="1" id="UserRememberMe" /> Remember Me?</label>
                      </div>
                      <div class="control-group">
                        <button class="btn btn-secondary btn-large btn-block" onClick={() => { setShowContentArea(true) }} id="loginButton">Login</button>
                        <button type="button" class="btn btn-muted" id="registerButton">Register</button>

                       </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div >


      }
      <Footer />
    </div >
  );
}

export default App;
