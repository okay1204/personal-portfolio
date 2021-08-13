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

                <div className='display-case-list languages'>
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
                        title='Docker'
                        description="For deploying applications using containers to create an organized infrasructure"
                        img='fab fa-docker'
                    />
                </div>

                <h1>Skills</h1>
                <h3>Example projects of these skills are below this section</h3>

                <div className='display-case-list skills'>
                    <DisplayCase
                        title='Full Stack Web Development'
                        description="I currently use React.js, Python's FastAPI, and PostgreSQL to make many of my websites."
                        img='fas fa-globe'
                    />
                    <DisplayCase
                        title='Web Scraping'
                        description="I use Python along with asyncio in order to create speedy scripts to gather large amounts of data from websites."
                        img='fas fa-table'
                    />
                    <DisplayCase
                        title='Game Development'
                        description="I've created an online multiplayer game with pygame, a Python library. I also have extensive experience in Minecraft plugins using Java."
                        img='fas fa-gamepad'
                    />
                    <DisplayCase
                        title='Chatbots'
                        description="I specialize in Discord bots that serve many different purposes, from a fun economy game to a voice channel utility bot."
                        img='fas fa-robot'
                    />
                    <DisplayCase
                        title='Database Management'
                        description="I'm very familiar with SQLite and PostgreSQL, which almost all my projects use."
                        img='fas fa-robot'
                    />
                </div>
            </div>
        )
    }
}

export default App
