import React from "react";
import './Error.css'

class Error extends React.Component {
    render() {
        return (
            <div className="error-message">
                 <h1 className="main-message">404</h1>
                 <h1>Page not found</h1>
                 <p>Search term entered is wrong</p>
                 <p>Please try again with some valid entry</p>
            </div>
        )
    }
}
export default Error