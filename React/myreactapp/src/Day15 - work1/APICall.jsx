import React from 'react'

export default function APICall() {

  const [data, setData] = React.useState(null);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json();
    setData(json);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {
        data 
        ? <h2>{data.title}</h2> 
        : <h2>Loading...</h2>
      }
    </div>
  )
}
