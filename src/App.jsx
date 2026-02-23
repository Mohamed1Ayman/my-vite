import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import Cart from "./components/products/Cart";
import Button from "./components/products/Button";



/*const App = () => {
  const links = [
      { name: 'Home', path: '/home' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Blog', path: '/blog' },
      { name: 'Services', path: '/services' },
    ];

    const text = (name)=>{
      console.log(`hello ${name}`)
    }
  return (
    <div className="App">
    <header>
      <Cart products={Products} />
      <Header />
      
      <Navbar links={links} />
    </header>
    <main>
      <Products />
      <Button text={text} />
      <Button text={text} />
      <Button text={text} />
      <Button text={text} />
    </main>
    </div>
  )
};
export default App; */



// const App = () => {
//   const [count, setCount] = useState(0) 
//   return (
//     <div style={{position:'absolute',top:'50%',left:'50%',transform:"translate(-50%, -50%)",textAlign:'center'}}>
//     <div style={{padding:'20px 0',fontSize:'30px'}}>Count: {count}</div>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//     <button onClick={() => count > 0 && setCount(count - 1)}>Decrement</button>
//     <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   )

// }

// const App = () => {
//   const [user, setUser] = useState({firstName:'Mohamed', lastName:'Ayman', email:'mohamed.ayman@example.com'}) 
//   return (
    
//     <div style={{position:'absolute',top:'50%',left:'50%',transform:"translate(-50%, -50%)",textAlign:'center'}}>
//     <div style={{padding:'20px 0',fontSize:'30px'}}>Name: {user.firstName} {user.lastName}</div>
//     <div style={{padding:'20px 0',fontSize:'30px'}}>Email: {user.email}</div>
//     <button onClick={() => setUser({...user, firstName:'Ahmed'})}>Change Name</button>
//     <button onClick={() => setUser({...user, email:'ahmed.ayman@example.com'})}>Change Email</button>
//     </div>
//   )}

// export default App




const ShowPassword = () => {
  const [password, setPassword] = useState('password')
  const [showPassword, setShowPassword] = useState(false)
  const [text, setText] = useState('mohamed')
  return (
    <div style={{position:'absolute',top:'50%',left:'50%',transform:"translate(-50%, -50%)",textAlign:'center'}}>
    <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
    <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button>

    <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
    <p>you name is {text}</p>
    </div>


  )
}

export default ShowPassword;


