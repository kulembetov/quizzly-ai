import React from "react";
import Quiz from "./components/ui/Quiz.tsx";
import Footer from "@/components/ui/Footer.tsx";

const App: React.FC = () => {
  return (
    <div>
      <Quiz />
      <Footer />
    </div>
  );
};

export default App;
