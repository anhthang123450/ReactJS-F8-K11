import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import Button from "./components/common/Button";
import ProductList from "./components/ui/ProductList";

function App() {
    return (
        <>
            <ProductList></ProductList>
        </>
    );
}

export default App;
