//@ts-nocheck

import { useEffect, useState } from "react";
import { Home } from "./blog/pages/Home";
import { Router, Link } from "@reach/router";
import { Post } from "./blog/pages/Post";
import { Login } from "./blog/pages/Login";
import { Dashboard } from "./blog/layouts/Dashboard";
import { NotFound } from "./blog/pages/404";
import { ProtectedPage } from "./blog/components/ProtectedPage";
import { TodoContext } from "./todo-context";
import { Test } from "./blog/components/Test";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const [page, setPage] = useState("home");
  const [userId, setUserId] = useState(1);
  const [loading, setIsLoading] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem("isLoggedIn");
    console.log(value);

    if (value) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <TodoContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Test hamada="dasd"></Test>
        {loading ? (
          "Loading..."
        ) : (
          <Router>
            <Login path="/login" />
            <ProtectedPage path="/dash">
              <Dashboard path="/">
                <Post path="post/:postId" />
                <Home userId={userId} path="/" />
                <NotFound default />
              </Dashboard>
            </ProtectedPage>

            <NotFound default />
          </Router>
        )}
      </TodoContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
