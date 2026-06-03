import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate();
    const goToAbout =() => {
        navigate("/about")
    }
    return (
        <div>
            <h2>Welcome to home page!</h2>
            <button onClick={goToAbout}>Go to About</button>
        </div>
    )
}
