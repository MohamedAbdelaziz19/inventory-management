'use client';
import { useState } from "react"; // Importing useState for dropdown functionality
import { Menu, User, Settings, LogOut, ChevronDown } from "lucide-react"; // Importing icons from lucide-react
import Link from "next/link"; // Importing Link for navigation

const DashboardPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Toggle mobile sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className={`w-64 bg-gray-800 text-white ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <div className="p-4 text-lg font-semibold border-b border-gray-700">
          Dashboard
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link href="src/components/profile" className="p-3 hover:bg-gray-700 flex items-center gap-3 transition duration-300">
                <User className="w-5 h-5" />
                Profile
              </Link>
            </li>
            <li>
              <Link href="/components/statique" className="p-3 hover:bg-gray-700 flex items-center gap-3 transition duration-300">
                <User className="w-5 h-5" />
                Statique
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between p-3 w-full text-left hover:bg-gray-700 transition duration-300"
              >
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5" />
                  Product
                </div>
                <ChevronDown className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-1 w-full bg-gray-700 rounded-md shadow-lg z-10">
                  <li>
                    <Link href="/components/addproduct" className="p-3 hover:bg-gray-600 cursor-pointer transition duration-300">Add Product</Link>
                  </li>
                  <li>
                    <Link href="/components/deleteproduct" className="p-3 hover:bg-gray-600 cursor-pointer transition duration-300">Delete Product</Link>
                  </li>
                  <li>
                    <Link href="/components/updateproduct" className="p-3 hover:bg-gray-600 cursor-pointer transition duration-300">Update Product</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/components/settings" className="p-3 hover:bg-gray-700 flex items-center gap-3 transition duration-300">
                <Settings className="w-5 h-5" />
                Settings
              </Link>
            </li>
            <li className="p-3 hover:bg-gray-700 flex items-center gap-3 transition duration-300">
              <LogOut className="w-5 h-5" />
              Logout
            </li>
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden fixed top-0 left-0 z-50">
        <button className="text-white p-4" onClick={toggleSidebar}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="font-semibold">Welcome, User</span>
            <div className="w-10 h-10 rounded-full bg-gray-300"></div> {/* User Avatar */}
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example cards */}
            <div className="bg-white p-4 rounded-lg shadow-sm transition-transform transform hover:scale-105 duration-300">
              <h2 className="text-lg font-bold">Card 1</h2>
              <p className="text-gray-600 mt-2">Content for card 1</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm transition-transform transform hover:scale-105 duration-300">
              <h2 className="text-lg font-bold">Card 2</h2>
              <p className="text-gray-600 mt-2">Content for card 2</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm transition-transform transform hover:scale-105 duration-300">
              <h2 className="text-lg font-bold">Card 3</h2>
              <p className="text-gray-600 mt-2">Content for card 3</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
