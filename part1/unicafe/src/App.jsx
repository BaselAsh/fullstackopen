import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  if (good || neutral || bad) {
    return (
      <>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine
              text="average"
              value={(good - bad) / (good + bad + neutral)}
            />
            <StatisticLine
              text="positive"
              value={100 * (good / (good + bad + neutral)) + ' %'}
            />
          </tbody>
        </table>
      </>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <button
        onClick={() => {
          setGood(good + 1);
        }}
      >
        good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      >
        neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
        }}
      >
        bad
      </button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
