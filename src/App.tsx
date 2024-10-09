// type in rafce- This is a shortcut for creating a reactArrowFunctionComponent which is below
// import React from "react";

// const App = () => {
//   return <div>App</div>;
// };
import { Routes, Route } from "react-router-dom";
// export default App;
import "./globals.css";
const App = () => {
  // flex h-screen will make the application take the whole screen.
  return (
    <main className="flex h-screen">
      <Routes>
        {/*public routes --> These are routes which everyone will be able to see.*/}
        <Route path="/sign-in" element={<SigninForm />} />
        {/*private routes --> These are routes which only the person signed in will be able to see.
        index below means that this is the starting page when the customer signs in the application.*/}
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
