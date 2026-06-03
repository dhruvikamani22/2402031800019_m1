function Day11b({name="Guest", age=18, city="Unknown",hobbies}){
    return (
        <div>
            <h2>Hello, {name}</h2>
            <p>Age: {age}</p>
            <p>City: {city} </p>
            <ul>
                {hobbies.map((hobby,indesx)=>(
                    <li key={indesx}>{hobby}</li>
                ))}
            </ul>
        </div>
    )

}
export default Day11b

// App.jsx

// import Day11b from "./Day11b"
// function App() {
//   const hobbies = ["Reading", "coding", "Travelling"]

//   return (
//     <>
//     <Day11b name="Dhruvi kamani" age={20} city="junagadh" hobbies={hobbies}/>
//     {/* <Day11b name="Dhruvi"/> */}

//     </>
//   )
// }

// export default App
