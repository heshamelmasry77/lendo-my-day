import Router from "./routes/Router.jsx";
import Header from "./components/shared/Header.jsx";
import Footer from "./components/shared/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    </>
  );
}

export default App;
