import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Momentos</span>
                <h2 className="colorlib-heading animate-box">Experiências</h2>
              </div>
            </div>

          {/* TIMELINE */}  
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">

          {/* DEV WEB */}
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-location" />
                      </div>
                      <div className="timeline-label">
                        <h2>Desenvolvedor Web (Pleno) <span> 2019-presente</span></h2>
                        <span className="heading-meta">Tecnologias</span>
                        <ul>
                          <li>Backend: Javascript(Node.js) || PHP 7</li>
                          <li>DataBase: NoSQL (MongoDB) || SQL (MySQL, PostgreSQL) </li>
                          <li>Frontend: React.js || Javascript, HTML, CSS, Bootstrap</li>
                          <li>DevOps: Docker</li>
                          <li>Metodologia Ágil: Scrum</li>
                        </ul>
                      </div>
                    </div>
                  </article>

          {/* INST PROG */}
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-location" />
                      </div>
                      <div className="timeline-label">
                        <h2>Instrutor de Programação (Pleno) <span>2017-presente</span></h2>
                        <span className="heading-meta">Atividades</span>
                        <ul>
                          <li>
                            Responsável por lecionar aulas de programação utilizando o desenvolvimento de jogos como meio de aprendizado. 
                            Por meio de diversas ferramentas e Engines, tais como: Unreal 4, Unity3D, Godot, GameMaker Studio 2, Roblox Studio, Stencyl, 
                            Construct 3 entre outros.
                          </li>
                          <li>
                            Ministração de aulas práticas utilizando dispositivos eletrônicos controlados por microcontrolador Arduino.
                          </li>
                          <li>
                            Preparação de material em C++/Python para alunos competidores da OBI (Olimpiada Brasileira de Informatica).
                          </li>
                          <li>
                            Mentor Responsável pela programação do Robô competidor da TBR (Torneio Brasil de Robótica) em 2019.
                          </li>
                          <li>
                            Desenvolvimento de Aplicação Web para facilitar o envio de mensagens via WhatsApp.
                          </li>
                          <li>
                            Desenvolvimento de aplicação geradora de relatórios individuais dos alunos.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </div>

    )
  }
}
