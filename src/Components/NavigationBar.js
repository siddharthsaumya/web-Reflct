import { Home, Bell, Trophy, LayoutDashboard, Compass, Star } from "lucide-react";
import logo from "../Assets/logo500.png";

export const NavigationBarTop = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 flex justify-between items-center px-4 py-2 z-50">
      <div className="flex items-center cursor-pointer">
        <Compass className="w-7 h-7 text-gray-600" />
      </div>

      <div className="flex items-center">
        <img src={logo} alt="App Logo" className="w-10 h-10 object-contain" />
      </div>

      <div className="flex items-center cursor-pointer">
        <Bell className="w-7 h-7 text-gray-600" />
      </div>
    </nav>
  );
};

export const NavigationBarBottom = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-evenly items-center px-4 py-2 z-50">
      <div className="flex items-center cursor-pointer">
        <Home className="w-7 h-7 text-gray-600" />
      </div>

      <div className="flex items-center cursor-pointer">
        <Star className="w-7 h-7 text-gray-600" />
      </div>

      <div className="flex items-center cursor-pointer">
        <Trophy className="w-7 h-7 text-gray-600" />
      </div>

      <div className="flex items-center cursor-pointer">
        <LayoutDashboard className="w-7 h-7 text-gray-600" />
      </div>
    </nav>
  );
};
