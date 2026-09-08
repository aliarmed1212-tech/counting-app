import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
 const [obtainedMarks, setObtainedMarks] = useState(0);
 const [totalMarks, setTotalMarks] = useState(0);
 const [percentage, setPercentage] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  function calculatePercentage(e) {
    e.preventDefault();
    const percentage = (obtainedMarks / totalMarks) * 100;
    setPercentage(percentage);
    console.log(`Percentage: ${percentage}%`);
  }

  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
      </div>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <form onSubmit={calculatePercentage}>
        <input type="number" name="obtained marks" id="obtained-marks" onChange={(e) => {setObtainedMarks(e.target.value)} }/>
        <input type="number" name="total marks" id="total-marks" onChange={(e) => {setTotalMarks(e.target.value)}} />
        <button type="submit">Submit</button>
      </form>
      your percentage is: {percentage}%
    </div>
  );
}

export default App;