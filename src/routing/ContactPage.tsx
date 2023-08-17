import { useNavigate } from "react-router-dom";


function Contact() {
   const navigate = useNavigate();
  return (
   <>
    <div>Contact</div>
    <form onSubmit={(event)=>{
        event.preventDefault();

        navigate('/');
    }}>
        <button className="btn btn-primary">Submit</button>
    </form>
   </>
  )
}

export default Contact