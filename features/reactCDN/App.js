
import { Header, Footer } from './components/Base'
import Body from './components/Body';

import { Login } from '../components/login/Login';

function App() {
  const { useState } = React;
  const [showContentArea, setShowContentArea] = useState(false);
  return (
    <div id="mockup-root" class="bg-wincom-gray" style={{ overflow: 'hidden' }}>
      <Header />
      {
        showContentArea ?
          <Body /> :
          <div id="mockup-body" className="mw-100" style={{ display: 'flex', justifyContent: 'center', padding:'20px'}}>

            <div id="login"  >
              <div class="container-fluid" >
                <div class="span12">
                  <div class="login well well-small">
                    <div class="center">
                      <p>
                        <img src={"../../../features/reactCDN/img/wincomlogo.png"} alt="logo" style={{ width: '40px', height: '40px' }} />
                        <span>Wincom</span>
                      </p>
                    </div>
                    <form class="login-form" id="UserLoginForm" >
                      <div class="control-group">
                        <div class="input-prepend">
                          <span class="add-on"><i class="icon-user"></i></span>
                          <input name="eml" required="required" placeholder="Username" maxlength="255" type="text" id="UserUsername" />
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="input-prepend">
                          <span class="add-on"><i class="icon-lock"></i></span>
                          <input name="password" required="required" placeholder="Password" type="password" id="UserPassword" />
                        </div>
                      </div>
                      <div class="control-group">
                        <label id="remember-me">
                          <input type="checkbox" name="data[User][remember_me]" value="1" id="UserRememberMe" /> Remember Me?</label>
                      </div>
                      <div class="control-group">
                        <input class="btn btn-muted btn-large btn-block" onClick={()=>{setShowContentArea(true)}} value="Sign in" />
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>


      }
      <Footer />
    </div>
  );
}

export default App;
