// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
      } = value
      const toggleShowContent = () => {
        onToggleShowContent()
      }

      const toggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const toggleShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="configuration-controller-container">
          <h1 className="layout-heading">Layout</h1>
          <ul className="content-list-container">
            <li className="content-list">
              <input
                id="contentCheckbox"
                type="checkbox"
                className="checkbox"
                onClick={toggleShowContent}
                checked={showContent}
              />
              <label className="content-para" htmlFor="contentCheckbox">
                Content
              </label>
            </li>
            <li className="content-list">
              <input
                id="leftNavbarCheckbox"
                type="checkbox"
                className="checkbox"
                onClick={toggleShowLeftNavbar}
                checked={showLeftNavbar}
              />
              <label className="content-para" htmlFor="leftNavbarCheckbox">
                Left Navbar
              </label>
            </li>
            <li className="content-list">
              <input
                id="rightNavbarCheckbox"
                type="checkbox"
                className="checkbox"
                onClick={toggleShowRightNavbar}
                checked={showRightNavbar}
              />
              <label className="content-para" htmlFor="rightNavbarCheckbox">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
