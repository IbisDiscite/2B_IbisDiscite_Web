import React from 'react'

var style = {
    backgroundColor: "#000158",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "16px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "120px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

var text = {
    color: "white",
    height: '60px',
    
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
                <p style={text}>Contact Us:
                	<li>Nicolas Sastoque:jnsastoquee@unal.edu.co</li>
                	<li>Pedro Berrio:pcberriop@unal.edu.co</li>
                	<li>David Rodriguez:dafrodriguezro@unal.edu.co</li>
                	<li>Sergio Gil:sagilm@unal.edu.co</li>
                	<li>John Hernandez:joahernandezca@unal.edu.co</li></p>
            </div>
        </div>
    )
}

export default Footer