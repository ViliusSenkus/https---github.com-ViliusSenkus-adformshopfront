import { Link } from "react-router-dom";

function Home(){
  return(
    <div>
      <Link to="/login">Prisijungti</Link>
      <Link to="/register">Registruotis</Link>
      <h1>BestestShop</h1>
    </div>
  )
}

export default Home;