import './App.css'
import 'animate.css/animate.min.css'

import React from 'react'
import DisplayCase from './components/displayCase.js'

import CppIcon from './images/cppIcon.png'

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

                <div className='display-case-list'>
                    <DisplayCase
                        title='Python'
                        description="My go-to langauge for almost any project"
                        img='fab fa-python'
                    />
                    <DisplayCase
                        title='HTML/CSS'
                        description="For designing websites, or any kind of UI"
                        img='far fa-file-code'
                    />
                    <DisplayCase
                        title='JavaScript'
                        description="Brings websites to life"
                        img='fab fa-js'
                    />
                    <DisplayCase
                        title='NodeJS'
                        description="Express, React, or just a good alternative to Python"
                        img='fab fa-node-js'
                    />
                    <DisplayCase
                        title='Java'
                        description="I use it predominantly for Minecraft"
                        img='fab fa-java'
                    />
                    <DisplayCase
                        title='SQL'
                        description="I utilize it for data queries in either SQLite or PostgreSQL"
                        img='fas fa-database'
                    />
                    <DisplayCase
                        title='C++'
                        description="Still learning it- have plans for game development soon"
                        img={CppIcon}
                    />
                    <DisplayCase
                        title='Bash'
                        description="For automating a lot of tasks I do on my virtual private server"
                        img='fas fa-terminal'
                    />
                    <DisplayCase
                        title='More to come'
                        description="I still plan on learning even more languages to expand my capabilties"
                        img='fas fa-ellipsis-h'
                    />
                </div>
            </div>
        )
    }
}

export default App
