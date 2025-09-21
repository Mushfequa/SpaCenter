import React from 'react'

function Home() {
  return (
<div>
<div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
      
       
        <div className="footer container-fluid position-relative bg-dark py-5" style="margin-top: 90px;">
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-6 pr-lg-5 mb-5">
                <a href="index.html" class="navbar-brand">
                  <h1 className="mb-3 text-white"><span class="text-primary">SPA</span> Center</h1>
                </a>
                <p>Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy...</p>
                <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
              </div>
      
              <div className="col-lg-6 pl-lg-5">
                <div className="row">
                  <div className="col-sm-6 mb-5">
                    <h5 className="text-white text-uppercase mb-4">Quick Links</h5>
                    <div className="d-flex flex-column justify-content-start">
                      <a className="text-white-50 mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Home</a>
                      <a className="text-white-50 mb-2" href="/about"><i className="fa fa-angle-right mr-2"></i>About Us</a>
                      <a className="text-white-50 mb-2" href="/service"><i className="fa fa-angle-right mr-2"></i>Our Services</a>
                      <a className="text-white-50 mb-2" href="price"><i className="fa fa-angle-right mr-2"></i>Pricing Plan</a>
                      <a className="text-white-50" href="contact"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                    </div>
                  </div>
      
                  <div className="col-sm-6 mb-5">
                    <h5 className="text-white text-uppercase mb-4">Our Services</h5>
                    <div className="d-flex flex-column justify-content-start">
                      <a className="text-white-50 mb-2" href="#">Body Massage</a>
                      <a className="text-white-50 mb-2" href="#">Stone Therapy</a>
                      <a className="text-white-50 mb-2" href="#">Facial Therapy</a>
                      <a className="text-white-50 mb-2" href="#">Skin Care</a>
                      <a className="text-white-50" href="#">Nail Care</a>
                    </div>
                  </div>
      
                  <div className="col-sm-12 mb-5">
                    <h5 className="text-white text-uppercase mb-4">Newsletter</h5>
                    <div className="w-100">
                      <div className="input-group">
                        <input type="text" class="form-control border-light" style="padding: 30px;" placeholder="Your Email Address"/>
                        <div className="input-group-append">
                          <button className="btn btn-primary px-4">Sign Up</button>
                        </div>
                      </div>
                    </div>
                  </div>
      
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div class="container-fluid bg-dark text-light border-top py-4" style="border-color: rgba(256, 256, 256, .15) !important;">
          <div class="container">
            <div class="row">
              <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <p class="m-0 text-white">&copy; <a href="#">Your Site Name</a>. All Rights Reserved.</p>
              </div>
              <div class="col-md-6 text-center text-md-right">
                <p class="m-0 text-white">Designed by <a href="https://htmlcodex.com">HTML Codex</a></p>
              </div>
            </div>
          </div>
        </div>
      
</div>
   
  )
}

export default Home