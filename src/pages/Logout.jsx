import { getAuth,signOut } from "firebase/auth";
import { app } from "../auth/authConfig";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();

    signOut(auth).then(() => {
        navigate('/');
    }).catch((error) => {
        if(error){
            navigate('/')
        }
    })
    return(
        <div></div>
    )
}

export default Logout;