function Footer() {
  return (
    <>
      <footer className="flex grow">
        <div className="border-t border-gray-100 bg-gray-50 py-10 grow">
          <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-600 lg:px-8">
            <a href="#">Contact support</a>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="h-0.5 w-0.5 fill-gray-300"
            >
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <a href="#">Order status</a>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="h-0.5 w-0.5 fill-gray-300"
            >
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <a href="#">Twitter</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
