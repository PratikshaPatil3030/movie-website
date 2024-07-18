import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";

export default function login(){
    return(
        <div><br/><br/><br/><br/><br/>
            <div className="container shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="row g-3">
                      <div class="col-md-12">
                      <h1 className="text-center">LogIn</h1>
                           <hr/>
                               <label class="form-label">First Nmae</label>
                              <input type="text" class="form-control" id="inputEmail4"/>
                     </div>
                     <div class="col-md-12">
                                 <label class="form-label">Last Name</label>
                                 <input type="text" class="form-control" id="inputPassword4"/>
                      </div>

                      <div class="col-md-12">
                               <label for="inputEmail4" class="form-label">Email</label>
                              <input type="email" class="form-control" id="inputEmail4"/>
                     </div>
                     <div class="col-md-12">
                                 <label for="inputPassword4" class="form-label">Password</label>
                                 <input type="password" class="form-control" id="inputPassword4"/>
                    </div>

                    <div className="d-grid gap-2 col-lg-12 mx-auto">
                   <Link href={'/'} className="btn btn-success rounded-pill">Get Started</Link>
                   <hr/>
                 <button className="btn btn-primary rounded-pill" type="button"> <Link href="https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email%20profile&state=STATE&access_type=online" className="text-white me-2"><FontAwesomeIcon icon={faGoogle}/></Link>Continue With Google</button>
                 <button className="btn btn-secondary rounded-pill" type="button"> <Link href="https://www.facebook.com/v10.0/dialog/oauth?client_id=YOUR_APP_ID&redirect_uri=YOUR_REDIRECT_URI&state=STATE&scope=email,public_profile" className="text-white me-2"><FontAwesomeIcon icon={faFacebook} /></Link>Continue With FaceBook</button>
               </div>
                </div>
            </div>
        </div>
    )
}