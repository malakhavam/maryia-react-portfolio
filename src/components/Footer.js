import React from "react";
function Footer() {
  return (
    <footer class="footer fixed-bottom font-small special-color-dark pt-4">
      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a
              class="btn-floating btn-fb mx-1"
              href="https://linkedin.com/in/maryia-malakhava-ba50309b"
            >
              <i class="fab fa-github"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-li mx-1"
              href="https://linkedin.com/in/maryia-malakhava-ba50309b"
            >
              <i class="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-fb mx-1"
              href="https://www.facebook.com/mary.malahau"
            >
              <i class="fab fa-facebook"> </i>
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2020 Copyright: Maryia Malakhava
        
      </div>
    </footer>
  );
}

export default Footer;