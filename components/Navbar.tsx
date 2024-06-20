import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-14 py-2 border-b-2">
      <h1 className="font-bold text-xl">askee</h1>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
