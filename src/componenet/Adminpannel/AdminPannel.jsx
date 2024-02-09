import './AdminPannel.css';
import SignInTable from './SignInTable';

import { useNavigate } from 'react-router-dom';

const AdminPannelNav =() =>{
  const navigate=useNavigate()
  return(
    <><div className='container-fluid'>
      <div className="row ">
        <div className="col-xl-12">
          <nav class="navbar navbar-expand-lg   sticky-top p-0" >

            <button type="button" class="navbar-toggler me-4 " data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarCollapse">
              <div class="navbar-nav  admin-Nav   nav" style={{ padding: "0px", margin: "0px" }}>
                <a class="nav-item nav-link hover-underline-animation  ps-4 pe-4" onClick={() => navigate("/SignInTable")}>Sign In</a>
                <a class="nav-item nav-link hover-underline-animation ps-4 pe-4" onClick={() => navigate("/ContactTable")}>Contacts</a>
                <a class="nav-item nav-link hover-underline-animation ps-4 pe-4" onClick={() => navigate("/ClassRegTable")}>Registrations</a>
                <a class="nav-link  hover-underline-animation ps-4 pe-4" onClick={() => navigate("/OrderTable")}>Orders</a>
                {/* <a  class="nav-item nav-link hover-underline-animation ps-4 pe-4" onClick={() => navigate("")}>Contact</a> */}
              </div>
            </div>
          </nav>
        </div>
      </div></div>
    </>
  )
}
function AdminPannel() {
return (
    <>
    
    <SignInTable />
      
    </>

  );
}

export  {AdminPannel , AdminPannelNav };
