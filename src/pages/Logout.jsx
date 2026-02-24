import { getAuth,signOut, onAuthStateChanged} from "firebase/auth";
import { app } from "../auth/authConfig";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if(user){
            window.mcpIdentity = {
                emailAddress: user.email,
                customerId: user.uid
            }
        }
    })

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