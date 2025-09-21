import React from 'react'

function contact() {
  return (

        <section id="contact" class="py-5 container">
  <h2 class="text-center mb-4">Contact Us</h2>
  <div class="row">
    <div class="col-md-6">
      <form>
        <input type="text" class="form-control mb-3" placeholder="Your Name" required>
        <input type="email" class="form-control mb-3" placeholder="Your Email" required>
        <input type="text" class="form-control mb-3" placeholder="Phone Number">
        <textarea class="form-control mb-3" rows="4" placeholder="Your Message"></textarea>
        <button class="btn btn-primary w-100">Send Message</button>
      </form>
    </div>
    <div class="col-md-6">
      <h5>Call Us</h5>
      <p>Tel: 0208 003 5967 <br> Mob: 07593 780 250</p>
      <h5>Find Us</h5>
      <iframe src="https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" height="250" style="border:0;" allowfullscreen></iframe>
    </div>
</div>
</section>

  )
}

export default contact;