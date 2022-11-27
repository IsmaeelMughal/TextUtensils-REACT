import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class="page-footer font-small blue pt-4">
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <Link to="/"> Ismaeel Mughal</Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
