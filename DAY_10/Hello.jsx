// import './App.css'
function Hello(){

//    function getName(youname){
//     return youname;
//    }
const getName = (yourname) =>{
    return yourname;
}
function handleClick(){
    alert("Button was clicked")
}
const handleInput=(event)=>{
    console.clear()
    console.log("value:",event.target.value)
}
   const name="YahuBaba"
   const name1="dhruvi"
   const handleMouseOver = () => {
    console.log("Mouse is over the text")
}
   const handleDoubleClick =() => {
    console.log("Text Double clicked")}
   return(
    <>
        <h1>Hello {getName(name)}</h1>
        <h2>Bye {getName(name1)}</h2>
        <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button onClick={handleClick}> Click Me</button>
        <button onClick={()=>alert("Hello from inline function!")}>Say Hello</button>
        <br/>
        <input type="text" onChange={handleInput} placeholder="Type something"/>
    </>
   )
}
export default Hello
