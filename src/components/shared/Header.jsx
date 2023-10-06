import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { numberOfProductsInCart } = useSelector((state) => state.cart); // GETS YOU THE PRODUCTS FROM THE STORE

  function getNavLinkClasses(isActive) {
    const baseClasses =
      "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out";

    if (isActive) {
      return `${baseClasses} border-green-600 text-green-600`;
    } else {
      return `${baseClasses} border-transparent text-gray-700 hover:text-gray-800`;
    }
  }

  return (
    <>
      <header>
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex lg:ml-0">
                <NavLink to="/">
                  <span className="text-green-900 font-extrabold font-sans tracking-tighter">
                    {" "}
                    Lendo My Day
                  </span>
                </NavLink>
              </div>
              <div className="flex h-full space-x-8 ml-8">
                <NavLink
                  to="/"
                  className={({ isActive }) => getNavLinkClasses(isActive)}
                >
                  Listings
                </NavLink>
              </div>
              <div className="ml-auto">
                <NavLink
                  to="/checkout"
                  className={({ isActive }) =>
                    "group -m-2 flex items-center p-2" +
                    (!isActive ? " text-gray-400" : " text-green-500")
                  }
                >
                  <svg
                    className="h-6 w-6 flex-shrink-0 group-hover:text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    ></path>
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {numberOfProductsInCart}
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
