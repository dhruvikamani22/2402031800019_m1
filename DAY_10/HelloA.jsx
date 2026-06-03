function HelloA(){
    const isLoggedIn = false;
    let message;
    // if(isLoggedIn){
    //     return <h1> Welcome user!</h1>
    // }
    // else{
    //     return <h2>please login</h2>
    // }


    if(isLoggedIn){
        message = <h1> Welcome user!</h1>
    }
    else{
        message= <h2>please login</h2>
    }
    // return <div>message</div> <=Welcome user!
     return <div>{message}</div>  //<=please login
}

export default HelloA
