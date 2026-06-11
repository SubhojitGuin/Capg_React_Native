import React from 'react'

export default function StudentResult() {

  const [marks, setMarks] = React.useState([78, 85, 92, 88, 76]);
  const [themeCount, setThemeCount] = React.useState(0);

  const calculateTotalMarks = React.useMemo(() => {
    console.log("Calculating total marks...");
    return marks.reduce((total, mark) => total + mark, 0);
  }, [marks]);

  return (
    <div>
      <h1>Student Result</h1>
      <p>Total Marks: {calculateTotalMarks}</p>
      <p>Theme Count: {themeCount}</p>
      <button onClick={() => setThemeCount(themeCount + 1)}>Change Theme</button>
    </div>
  )
}
