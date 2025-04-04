import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/create_recipe";
import { Home } from "./pages/Home";
import { SavedRecipes } from "./pages/saved_recipes";
import { CookiesProvider } from 'react-cookie';
function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create_recipe" element={<CreateRecipe />} />
            <Route path="/saved_recipes" element={<SavedRecipes />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Router>
      </CookiesProvider>
    </div>
  );
}

export default App;