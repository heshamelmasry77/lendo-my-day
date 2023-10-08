import Router from "./routes/Router.jsx";
import Header from "./components/shared/Header.jsx";
import Footer from "./components/shared/Footer.jsx";
import Toaster from "./components/shared/Toaster.jsx";
import Loader from "./components/shared/Loader.jsx";
import { useSelector } from "react-redux";

function App() {
  const { isLoading } = useSelector((state) => state.loader);
  const { isToaster } = useSelector((state) => state.toaster);

  return (
    <>
      <div>
        <Header />
        <Router />
        <Footer />
        {isToaster && <Toaster />}
        {isLoading && <Loader />}
      </div>
    </>
  );
}

export default App;
