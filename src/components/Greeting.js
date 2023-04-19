function UserGreeting({name}){
    return (
        <h1>Welcome, back {name}</h1>
    )
}
function GuestGreeting(){
    return(
        <h1>Please sing up!</h1>
    )
}
function Greeting ({isLogin}){
    if(isLogin){
        return(
            <UserGreeting name="Sreynoch"/>
        )
    }
    return<GuestGreeting/>
}
export default Greeting;