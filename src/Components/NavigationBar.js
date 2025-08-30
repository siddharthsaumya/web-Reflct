import { Home, Bell, Trophy, LayoutDashboard, Compass, Star } from "lucide-react";
import logo from "../Assets/logo500.png";

export const NavigationBarTop = ({handleChooseView, currentView}) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 flex justify-between items-center px-4 py-2 z-50">
      <div className="flex items-center cursor-pointer" onClick={() => handleChooseView("discover")}>
        <Compass className={`w-7 h-7 ${currentView === "discover" ? "text-blue-600" : "text-gray-600"}`} />
      </div>

      <div className="flex items-center">
        <img src={logo} alt="App Logo" className="w-10 h-10 object-contain cursor-pointer" />
      </div>

      <div className="flex items-center cursor-pointer" onClick={() => handleChooseView("notification")}>
        <Bell className={`w-7 h-7 ${currentView === "notification" ? "text-blue-600" : "text-gray-600"}`} />
      </div>
    </nav>
  );
};

export const NavigationBarBottom = ({handleChooseView, currentView}) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-evenly items-center px-4 py-2 z-50">
      <div className="flex items-center cursor-pointer" onClick={() => handleChooseView("home")}>
        <Home className={`w-7 h-7 ${currentView === "home" ? "text-blue-600" : "text-gray-600"}`} />
      </div>

      <div className="flex items-center cursor-pointer" onClick={() => handleChooseView("rate")}>
        <Star className={`w-7 h-7 ${currentView === "rate" ? "text-blue-600" : "text-gray-600"}`} />
      </div>

      <div className="flex items-center cursor-pointer" onClick={() => handleChooseView("reward")}>
        <Trophy className={`w-7 h-7 ${currentView === "reward" ? "text-blue-600" : "text-gray-600"}`} />
      </div>

      <div className="flex items-center cursor-pointer" onClick={() => handleChooseView("dashboard")}>
        <LayoutDashboard className={`w-7 h-7 ${currentView === "dashboard" ? "text-blue-600" : "text-gray-600"}`} />
      </div>
    </nav>
  );
};
