import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./index.css";
import { Outlet } from "react-router-dom";

export default function App() {
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  } else {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
