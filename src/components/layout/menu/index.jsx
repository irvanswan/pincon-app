import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <footer className="menu">
      <div className="content">
        <Link to={"/"}>
          World
        </Link>
        <Link to={"/inventory"}>
          Inventory
        </Link>
      </div>
    </footer>
  )
}

export default Menu