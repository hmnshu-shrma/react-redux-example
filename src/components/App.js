import React from 'react'
import List from './List'
import Form from './Forms'
const App = () => (
  <div className='row mt-5'>
    <div className='col-md-5'>
      <h3>Articles</h3>
      <List />
      <Form />
    </div>
  </div>
)

export default App
