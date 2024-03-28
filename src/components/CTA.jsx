import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Vous lancez un projet ? <br className="sm:block hidden" />
        Réalisons-le ensemble !
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
