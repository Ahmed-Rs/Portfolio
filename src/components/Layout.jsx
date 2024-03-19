// Layout.js
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Cela rendra le composant de la route enfant */}
      </main>
      {/* <footer>Votre pied de page ici</footer> */}
    </>
  );
};

export default Layout;
