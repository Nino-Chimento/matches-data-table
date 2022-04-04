import "bootstrap/dist/css/bootstrap.css";
import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import Main from "./components/main";

const CounterView = lazy(() => import("./view/Counter/CounterView"));
const DataMatchesView = lazy(() => import("./view/DataMatches"));

function App() {
  return (
    <div className="App">
      <Main>
        <Suspense fallback={<p> Loading...</p>}>
          <Routes>
            <Route path={`/counter`} element={<CounterView />} />
            <Route path="/" element={<DataMatchesView />} />
          </Routes>
        </Suspense>
      </Main>
    </div>
  );
}

export default App;
