import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from './image'
function App() {

  return (
    <>
    <div className='allform'>
      <div className='form'>
           <Image img="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" height="100px" width="150px"/> <br/>
           <input type="email" placeholder='Email'></input>
           <input type="password" placeholder='Password'></input>
           <button>Sign in</button><br/>
           <div className='signup'>
              <span>Dont have account?</span><a>Sign Up</a>
           </div>
      </div>

      <div className='form2'>
         <Image img="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" height="100px" width="150px"/> <br/>
         <input type="text" placeholder='Full Name'></input>
         <input type="email" placeholder='Email'></input>
         <input type="password" placeholder='Password'></input>
         <input type="number" placeholder='Number'></input>
         <button>Sign up</button><br/>
         <div className='signup'>
            <span>Have ar account?</span><a>Sign in</a>
         </div>
      </div>
      </div>
    </>
  )
}

export default App
