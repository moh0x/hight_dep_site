import './navbar.css'
function CustomNavBar() {
    return(
        <nav className="navbar navbar-expand-lg bg-dark nav-bar p-0 m-0">
  <div className="container">
 <div className='row align-items-center'> <div className="row text-center col">
                            <img src={require('../../images/logo.PNG')} style={{width:"85px"}} className=''></img>
                            
                    </div>
    <a className="navbar-brand col p-0 m-0" style={{fontWeight:"bolder",fontSize:"28px"}}>HighDep</a></div>
 
  </div>
</nav>
    )
}
export default CustomNavBar