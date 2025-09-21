// src/Footer.jsx
export default function Footer() {
    return (
      <div className="footer container-fluid position-relative bg-dark py-5" style={{ marginTop: "90px" }}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6 pr-lg-5 mb-5">
              <a href="/" className="navbar-brand">
                <h1 className="mb-3 text-white">
                  <span className="text-primary">SPA</span> Center
                </h1>
              </a>
              <p>Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy...</p>
              <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
              <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
              <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  