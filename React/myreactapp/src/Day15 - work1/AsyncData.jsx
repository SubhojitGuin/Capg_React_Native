import React from 'react'

export default function AsyncData() {

  const [msg, setMsg] = React.useState('Loading...')

  React.useEffect(() => {
    setTimeout(() => {
      setMsg('Data loaded');
    }, 1000);
  }, []);

  return (
    <div>
      {msg}
    </div>
  )
}
