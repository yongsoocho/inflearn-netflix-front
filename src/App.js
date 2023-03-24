import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer.component";
import { Header } from "./components/header.component";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
