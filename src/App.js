import './App.css'
import 'animate.css/animate.min.css'

import React from 'react'

import DisplayCase from './components/displayCase.js'

const fullIntroTitle = 'Zackaria Ghanbari.exe'
class App extends React.Component {

    constructor() {
        super()

        this.state = {
            introTitle: '',
            introTimeouts: []
        }

    }

    componentDidMount() {
        
        for (let i = 1; i < fullIntroTitle.length + 1; i++) {
            let { introTimeouts } = this.state

            introTimeouts.push(
                setTimeout(() => this.setState({introTitle: fullIntroTitle.slice(0, i)}), (i * 100) + 1000)
            )

            this.setState({introTimeouts})
        }
    }
    
    componentWillUnmount() {
        this.state.introTimeouts.forEach(timeout => clearTimeout(timeout))
    }

    render() {
        return (
            <div className="App body">
                <div className='intro-wrapper'>
                    <div>
                        <h1 className='intro-title'>{this.state.introTitle}</h1>
                        <span className='intro-underscore'>_</span>
                    </div>
                    <h2 className='intro-subtitle'>I'm a passionate delevoper in the process of mastering all sorts of things</h2>
                </div>

                <hr />

                <h1>Languages</h1>

                
            </div>
        )
    }
}

export default App
