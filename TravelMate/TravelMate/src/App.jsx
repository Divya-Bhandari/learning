import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <Navbar />

      <AppRoutes />

      <Footer />
    </>
  );
};

export default App;