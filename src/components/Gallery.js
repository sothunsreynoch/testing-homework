export default function Gallery(){
    return(
       <section>
        <h1>Amazing labtop</h1>
        <Profile/>
        <Profile/>
        <Profile/>
       </section>
    )
}
export function Profile(){
    return(
        <img 
        src="https://unsplash.com/photos/pDGNBK9A0sk"
        alt="labtop"
        style={{width:500}}
        />
    )
}

