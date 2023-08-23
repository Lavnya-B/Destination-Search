import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchUserInput = event => this.setState({searchInput: event.target.value})

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filterSearchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destination-search-bg-container">
        <div className="destination-search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              className="search-input"
              value={searchInput}
              onChange={this.searchUserInput}
              placeholder="Search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destination-items-container">
            {filterSearchResults.map(eachItem => (
              <DestinationItem destinationItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
