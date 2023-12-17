import { Link } from "react-router-dom";
import UserProduct from "./UserProduct"

function UserProducts() {
  return (
    <div>
      {/* cia reikalingas gautu produktu mapinimas */}
      <Link to="./1">
        foto<br />
        pavadinimas<br />
        kaina<br />
        likutis<br />
        prideti i krepseli nurodant kieki<br />
      </Link>
    </div>
  )
}

export default UserProducts