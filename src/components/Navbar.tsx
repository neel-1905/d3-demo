import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  const navLinks = [
    { name: "selections", route: "/selections" },
    { name: "data joins", route: "/data-joins" },
    { name: "scales", route: "/scales" },
  ];

  return (
    <div className=" bg-blue-500  font-medium text-white">
      <nav className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        <Link to={`/`}>
          <h1 className="text-2xl capitalize font-Poppins">d3 demo</h1>
        </Link>
        <div>
          <ul className="flex items-center gap-3">
            {navLinks.map((link, index) => {
              return (
                <li key={index} className="text-base font-Poppins capitalize">
                  <Link to={link.route}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
