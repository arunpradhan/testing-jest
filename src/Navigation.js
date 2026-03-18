import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
        <Link to="/">Home</Link> | 
        <Link to="/my-form">My Form</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/users">Users</Link> | 
        <Link to="/item">Item</Link> | 
    </div>
  );
}

export default Navigation;