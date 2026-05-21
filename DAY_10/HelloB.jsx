import './App.css'

function HelloB(){
    // const isLoggedIn=true;
    // return (
    //     <div>
    //         {isLoggedIn?<h1> Welcome user!</h1>:<h2>Please login</h2>}
    //     </div>
    // )


    // const hasMessage =True;
    // return(
    //     <div>
    //         {hasMessage && <p> You have new Message!</p>}
    //     </div>
    // )

    const isVisible =true;
    return(
        <div>
            <h1 className={isVisible ? "visible" : "unvisible"}>Condition rendered!</h1>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
    )
}
export default HelloB
