import { useState } from "react";
import { useEffect } from "react"; 
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




// const ShowPassword = () => {
//   const [password, setPassword] = useState('');
//   const [user, setUser] = useState('');
  
//   const handelLogin = (e) => {
//     if(user === '' || password === ''){
//       alert('username and password are required')
//       return;
//     }
//     if(password.length < 6){
//       alert('password must be at least 6 characters')
//       return;
//     }
//     if(user.length < 3){
//       alert('username must be at least 3 characters')
//       return;
//     }
    
//     e.preventDefault();
//     console.log({user, password}); 
    
//   }
  
//   return (
//     <div style={{position:'absolute',top:'50%',left:'50%',transform:"translate(-50%, -50%)",textAlign:'center'}}>
//     <form onSubmit={handelLogin}>
//       <label htmlFor="username" style={{display:'block'}}>username</label>
//       <input type="text" name="userName" id="username" onChange={(e)=> setUser(e.target.value)} value={user} />
//       <label htmlFor="password">password</label>
//       <input type="password" name="password" style={{display:'block'}} id="password" onChange={(e)=> setPassword(e.target.value)} value={password} />
//       <button type="submit">Submit</button>
//     </form>

//     </div>


//   )
// }

//https://jsonplaceholder.typicode.com/photos
// learn how to fetch data from an API and display it in a React component using useState and useEffect hooks.

function App (){
const [fetchData, setFetchData] = useState([]);

useEffect( () => {
  const api = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos')
      const data = await res.json()
      setFetchData(data)
    } catch (error) {
      console.log(error)
    }
  }
  api();
}, [])
return (
  <div>
    {fetchData.slice(0, 10).map((item)=>
    <div key={item.id}>
      <h2>{item.title}</h2>
      <img src={item.url} alt={item.title} />
    </div>)}
  </div>
)
}

export default App;


