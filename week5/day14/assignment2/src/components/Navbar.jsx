function Navbar(){

    return(
        <nav className="flex justify-between px-10 py-5 bg-blue-200">
       <div>LOGO</div>
       <ul className="flex justify-around gap-9">
        <li><a href="">Home</a></li>
        <li><a href="">Signup</a></li>
        <li><a href="">Login</a></li>
       </ul>
        </nav>
    )
}



export default Navbar;