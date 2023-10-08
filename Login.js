import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='loginp'>
        <center>
      <form className='down'>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="email">Email</label></td>
              <td><input type="text" name="email" id="email" placeholder='Enter the example@email.com' /></td>
            </tr>
            <tr>
              <td><label htmlFor="passw">Password</label></td>
              <td><input type="text" name="passw" id="passw" placeholder='Enter the strong password'/></td>
            </tr>
            <tr>
              <td  style={{ textAlign: 'center' }}>
                <button type="submit" >Login</button>
              </td>
              <td>
              <button type="signup">Signup</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      </center>
    </div>
  );
}

export default Login;
