import './index.css'

const List = props => {
  const {initialHistoryDetails, change} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = initialHistoryDetails
  const deleteHistory = () => {
    change(id, title)
  }
  return (
    <li className="List-container">
      <div className="list-fist-part">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="img" />
        <p>{title}</p>
        <p>{domainUrl}</p>
        <p className="domain-name">{domainUrl}</p>
      </div>
      <div className="delete-button">
        <button type="button" onClick={deleteHistory}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-button"
            id={id}
          />
        </button>
      </div>
    </li>
  )
}
export default List
