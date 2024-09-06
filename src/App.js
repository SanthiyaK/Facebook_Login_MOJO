import axios from 'axios';

import './App.css';
import FacebookLogin from "react-facebook-login"; 
function App() {

  async function responseFacebook(response) {

    try {
      var result = await axios.post('http://localhost:5000/user/facebook', {
        userId: response.authResponse.userID,
        accessToken: response.authResponse.accessToken
      })
      console.log(result.data); 
    } catch (error) {
      console.log(error);     }
  }

  

  return (
    <div>
    <FacebookLogin
    appId="3813687222222314"
    autoLoad={true}
    callback={responseFacebook} />
   </div>
  );
}

export default App;