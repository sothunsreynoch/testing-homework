export function FormSubmit(){
    const handleClick = () =>{
        console.log("Hi")
    }
    return(
        <>
        <h1>Welcome</h1>
        <button onClick={()=> alert("Hi")}>Click here</button>
        <button onClick={handleClick}>Click Me</button>
        </>
    )
}