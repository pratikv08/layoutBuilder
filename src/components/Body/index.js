// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class Body extends Component {
  renderLeftNavbar = () => (
    <div className="left-navbar-container">
      <h1 className="left-navbar-heading">Left Navbar Menu</h1>
      <ul className="items-container">
        <li className="items">Item 1</li>
        <li className="items">Item 2</li>
        <li className="items">Item 3</li>
        <li className="items">Item 4</li>
      </ul>
    </div>
  )

  renderContent = () => (
    <div className="content-container">
      <h1 className="left-navbar-heading">Content</h1>
      <p className="content-text">
        Lorem ipsum dolor sit amet, consecutor adipiscing elit, sed do eiusmod
        tempor indidunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  )

  renderRightNavbar = () => (
    <div className="right-navbar-container">
      <h1 className="left-navbar-heading">Right Navbar</h1>
      <div className="ads-container">
        <div className="ads">
          <p className="ad-text">Ad 1</p>
        </div>
        <div className="ads">
          <p className="ad-text">Ad 2</p>
        </div>
      </div>
    </div>
  )

  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <div className="body-container">
              {showLeftNavbar && this.renderLeftNavbar()}
              {showContent && this.renderContent()}
              {showRightNavbar && this.renderRightNavbar()}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default Body
