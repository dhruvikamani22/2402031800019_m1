export default function Button({label,handleClick}){
    return <button onClick={handleClick}>{label}</button>
}

//App.jsx

// import Button from "./Button"
// function App() {
//   function Message(){
//     alert("Hello from message box")
//   }

//   return (
//     <>
//     <Button label="Click Me" handleClick={Message}/>
//     </>
//   )
// }

// export default App
