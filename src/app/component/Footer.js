import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 ">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We provide the best movie reviews and ratings.</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div>
              <Link href="https://twitter.com" className="text-white me-2">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link href="https://facebook.com" className="text-white me-2">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link href="https://instagram.com" className="text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@movieapp.com</p>
          </div>
        </div>
        <p className="mt-3">© 2024 MovieApp. All rights reserved.</p>
      </div>
    </footer>
  );
}
