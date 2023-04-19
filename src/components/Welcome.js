export function Welcome(props){
    return <h1>Welcome, {props.title}</h1>
}

const Avatar = ({imageURL, size}) => {
    return(
        <img 
          style={avatar}
          src={imageURL}
          alt={size}
          width={size}
          height={size}
        />
    )
}
export default Avatar;
const avatar = {
    borderRadius: '50%',
}
