import './Button.css'
import { useNavigate } from 'react-router-dom'

export default function Button(props){
const navigate = useNavigate()

    function handleRedirect(){
    navigate = '/Login'
}
    return(
        <button onClick={handleRedirect}className="btn"><a href='/Login'>{props.login}</a></button>
    )
}