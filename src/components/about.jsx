import React, { Component } from 'react'

useEffect(() => {
    document.title = "Thiago Mariotto"
 }, []);

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Sobre mim</span>
                    <h2 className="colorlib-heading">Quem sou eu?</h2>
                    <div className="col-md-6 text-justify">
                    <p>Brasileiro, 24 anos, nascido e criado na cidade da grávida (Taubaté-SP).<br/>
                        Formado em Ciêncida da Computação (2016-2020).<br/><br/>

                            Minha história com tecnologia se inicia na infância com jogos eletrônicos de console, até ganhar meu primeiro computador.
                        Desde então o aprendizado foi acontecendo, fuçando em tudo quanto era lugar da máquina. Foi então quando decidi, meu futuro na área de TI.

                    <br/>     Quando na faculdade procurei conhecer todas as áreas dentro da tecnologia da informação, 
                        desde a parte de infraestura, segurança, análise, gestão de projetos e etc. No final me apaixonei por desenvolvimento Web do qual pretendo trilhar por um longo tempo.
                    <br/>Iniciei aprendendo backend com PHP, passei por Python (Django), mas me apeguei com Javascript, quando descobri sua facilidade
                        no backend (Node.js), desde então venho me desenvolvendo também no frontend (React.js) e também no mobile (React Native).</p>
                    <p>Um eterno aprendiz, me desafiando a novas conquistas DIÁRIAMENTE. </p>
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">O que eu faço?</span>
                <h2 className="colorlib-heading">Conhecimentos</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-settings" />
                </span>
                <div className="desc">
                    <h3>Backend</h3>
                    <p>Desenvolvimento de API REST/RESTful com Node.js/Express. Javascript ES6</p>   
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Frontend</h3>
                    <p>Interface de usuário com React.js 
                        || JavaScript, HTML e CSS com uma ajudinha de nosso amigo Bootstrap :p</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-puzzle" />
                </span>
                <div className="desc">
                    <h3>Games</h3>
                    <p>Desenvolvimento de jogos: Unity 2D/3D, Unreal Engine 4, Construct 3. 
                    </p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div >
                <span >
                    <i  />
                </span>
                <div >
                    <h3></h3>
                    <p></p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-pencil" />
                </span>
                <div className="desc">
                    <h3>Designer Gráfico</h3>
                    <p>Comunicação visual Instagram/Facebook.<br/> PhotoShop CS6, Adobe Illustrator</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div >
                <span >
                    <i  />
                </span>
                <div >
                    <h3></h3>
                    <p></p>
                </div>
                </div>
            </div>
           
            </div>
        </div>
        </section>
      </div>
    )
  }
}
