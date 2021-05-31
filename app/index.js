import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
    render() {
        return (
            <h1>Hello</h1>
        )
    }
}

ReactDOM.render(
    // React Element
    // Where to render the element to

    <App/>,
    document.getElementById('app')
)
