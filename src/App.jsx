import { Box } from "@chakra-ui/react";
// import { Maincom } from "./Structrue/Maincom";
// import CodeEditor from "./components/CodeEditor";
import './App.css';
import { Navbar } from "./Structrue/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Component1 } from "./componentcount/Component1";
import { Component2 } from "./componentcount/Component2";
import { Component3 } from "./componentcount/Component3";
import { Component4 } from "./componentcount/Component4";
import { Component5 } from "./componentcount/Component5";
import { Component6 } from "./componentcount/Component6";
import { Component7 } from "./componentcount/Component7";
import { Component8 } from "./componentcount/Component8";
import { Component9 } from "./componentcount/Component9";
import { Component10 } from "./componentcount/Component10";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8} className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Component1 />} />
          <Route path="/Component2" element={<Component2 />} />
          <Route path="/Component3" element={<Component3 />} />
          <Route path="/Component4" element={<Component4 />} />
          <Route path="/Component5" element={<Component5 />} />
          <Route path="/Component6" element={<Component6 />} />
          <Route path="/Component7" element={<Component7 />} />
          <Route path="/Component8" element={<Component8 />} />
          <Route path="/Component9" element={<Component9 />} />
          <Route path="/Component10" element={<Component10 />} />

        </Routes>

      </BrowserRouter>

    </Box>
  );
}

export default App;
