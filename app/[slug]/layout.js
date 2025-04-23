import HomeLink from "../HomeLink";

export default function Layout({ children }) {
  return (
    <div className="relative">
      {" "}
      {children}
      <footer className="mt-12">
        <HomeLink />
      </footer>
    </div>
  );
}
