import "./App.css";
import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

function App() {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((val) => {
        const newVal = val + 0.1;
        return newVal >= 100 ? 100 : newVal;
      });
    }, 20);

    return () => {
      clearInterval(intervalId);
      setDone(true);
    };
  }, []);

  useEffect(() => {
    if (value === 100) {
      setDone(true);
    }
  }, [value]);

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl uppercase underline text-slate-700 mb-4">
        Progress Bar
      </h1>
      <ProgressBar value={value} onComplete={() => setDone(true)} />
      <p className="text-xl mt-4">
        {value < 100 ? "Still Downloading Wait!!!" : "Done Download!!!"}
      </p>
    </div>
  );
}

export default App;
