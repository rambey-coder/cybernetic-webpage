export const Navbar = () => {
  return (
    <div className="bg-[#DEEFF0]">
      <div className="container flex flex-row items-center justify-between">
        <h1 className="text-[20px]">CYBERNETIC</h1>

        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/about">Service</a>
            </li>
          </ul>
        </nav>

        <button className="button">Contact Us</button>
      </div>
    </div>
  );
};
