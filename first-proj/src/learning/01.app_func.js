// Function Approach

function App() {
  return (
    <div className='App'>
      <h2>Hello Dolly</h2>
    </div>
  )

  // Alternative of the avobe process
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement('h2', null, 'Hello Dolly'),
    <Person />
  )
}

function Person() {
  return <h2>I'm Person</h2>
}
