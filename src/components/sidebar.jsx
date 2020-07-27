import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpeg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Thiago Mariotto</a></h1>
              <span className="email"><i className="icon-mail"></i> thiagomariotto@outlook.com.br</span>
            </div>
            <br/>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introdução</a></li>
                  <li><a href="#about" data-nav-section="about">Sobre</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Acontecimentos</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu" className="text-justify">
              <ul >
                <li><a href="https://www.facebook.com/thiiagomariotto" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /> Facebook </a></li>
                {/* <li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li> */}
                <li><a href="https://www.instagram.com/thiiagomariotto/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /> Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/thiagomariotto/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /> Linkedin   </a></li>
                <li><a href="https://github.com/thiago-mariotto" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i> GitHub      </a></li>
                {/* <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li> */}
              </ul>
            </nav>
            <br/>
            <div className="colorlib-footer">
              {/* <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p> */}
              <p><small>
              “Talvez não tenha conseguido fazer o melhor, mas lutei para que o melhor fosse feito. Não sou o que deveria ser, mas Graças a Deus, não sou o que era antes”.
                  (Marthin Luther King)
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
