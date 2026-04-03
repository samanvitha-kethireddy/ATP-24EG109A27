import { CounterProvider } from "./CounterContext";
import CounterControls from "./component/CounterControls";

function App() {
  return (
    <CounterProvider>
      <div className="min-h-screen flex items-center justify-center bg-blue-200 p-10">
        <CounterControls />
      </div>
    </CounterProvider>
  );
}

export default App;