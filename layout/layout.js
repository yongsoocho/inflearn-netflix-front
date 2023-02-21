import Header from "@/components/header";

export function Layout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>{children}</main>
    </div>
  );
}
