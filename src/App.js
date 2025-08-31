import './App.css';
import { NavigationBarBottom, NavigationBarTop } from './Components/NavigationBar';
import { useState } from 'react';
import Home from './Pages/Home';
import Discover from './Pages/Discover';
import Rate from './Pages/Rate';
import Reward from './Pages/Reward';
import Dashboard from './Pages/Dashboard';
import Notification from './Pages/Notification';

function App() {
  const [currentView, setCurrentView] = useState("home");

  const handleChooseView = (view) => {
    setCurrentView(view);
  }

  const renderView = () => {
    switch(currentView) {
      case "home":
        return <Home />;
      case "discover":
        return <Discover />;
      case "rate":
        return <Rate />;
      case "reward":
        return <Reward />;
      case "dashboard":
        return <Dashboard />;
      case "notification":
        return <Notification />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="App min-h-screen bg-gray-50">
      <NavigationBarTop handleChooseView={handleChooseView} currentView={currentView} />
      <main className="relative">
        {renderView()}
      </main>
      <NavigationBarBottom handleChooseView={handleChooseView} currentView={currentView} />
    </div>
  );
}

export default App;
