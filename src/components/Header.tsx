export default function Header() {
  return (
    <>
      <header>
        <div className="bg-teal shadow-md">
          <header className="bg-teal shadow-md text-white">
            <div className="container mx-auto flex justify-between items-center py-4">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold">
                  Flowbite
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="/features" className="text-sm font-medium">
                  Features
                </a>
                <a href="/marketplace" className="text-sm font-medium">
                  Marketplace
                </a>
                <a href="/company" className="text-sm font-medium">
                  Company
                </a>
                <a href="/team" className="text-sm font-medium">
                  Team
                </a>
                <a href="/contact" className="text-sm font-medium">
                  Contact
                </a>
              </div>
              <div className="flex items-center">
                <a href="/login" className="text-sm font-medium mr-4">
                  Login
                </a>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md bg-brown shadow-md"
                >
                  <a href="/signup">Sign up</a>
                </button>
              </div>
            </div>
          </header>
        </div>
      </header>
    </>
  );
}
