import React from 'react'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Image from './Image'


export default function Page() {
    return (
        <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
            <Projects />
            <About />
            <Contact />
            <Image />
        </div>

    )
}
