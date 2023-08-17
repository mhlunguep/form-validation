import { Link } from "react-router-dom"
import RegistrationForm from "../components/RegistrationForm"

function HomePage() {
  return (
    <>
    <div>HomePage</div>  

    <RegistrationForm children="Registration Form"/>
    <Link to="/about">About</Link>
    </>
  )
}

export default HomePage