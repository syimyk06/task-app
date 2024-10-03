import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import initializeStore from "./store/store";
import "./assets/style/index.scss";

// Async function to initialize and render the app
const renderApp = async () => {
  const store = await initializeStore(); // Await store initialization

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
};

// Call the render function
renderApp();
