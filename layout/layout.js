import Footer from "@/components/Footer";
import Header from "@/components/header";

export function Layout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
