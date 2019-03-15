import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { articles: state.articles }
}
const ConnectedList = ({ articles }) => (
  <ul className='list-groups'>
    {articles.map(el => (
      <li className='list-groups-item' key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
)

const List = connect(mapStateToProps)(ConnectedList)
export default List
