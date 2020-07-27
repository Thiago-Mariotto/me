import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Meu Trabalho</span>
								<h2 className="colorlib-heading animate-box">Projetos Recentes</h2>
							</div>
						</div>

						{/* PROJETOS */}
						<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/nlw-01.jpg)'}}>
									<div className="desc">
										<div className="con">
											<span><b>NLW 01 - Ecoleta</b></span>									
											<span>Website, Mobile Application</span>
											<br/>
											<span>Projeto desenvolvido durante a semana Next Level Week, organizada e planejada pela 
												RocketSeat. A ideia do projeto é um marketplace do qual pontos de coleta de resíduos, se cadastram para que
												a população possa descartar seus objetos como: Pilhas, baterias, reciclagem, e outros materias de forma eficiente.
										
											<ul>
												<li>
													Backend: Node.js (Express), MongoDB(NoSQL).
												</li>
												<li>
													Frontend: React,js (Single Page Application).
												</li>
												<li>
													Mobile: React Native (Expo).
												</li>
											</ul>
											</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>


						
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/omistack-11.png)'}}>
									<div className="desc">
										<div className="con">
											<span><b>Oministack 11 - Be The Hero</b></span>
											<span>Website, Mobile Application</span>
											<br/>
											<span>Projeto desenvolvido durante a semana Next Level Week, organizada e planejada pela 
												RocketSeat. O projeto é desenvolvido com o intuito de que Ongs cadastrem suas necessidades de
												doações, para que o público possa doar e ajudar quem precisa. 

											<ul>
												<li>
													Backend: Node.js (Express), SQLite(SQL).
												</li>
												<li>
													Frontend: React,js (Single Page Application).
												</li>
												<li>
													Mobile: React Native (Expo).
												</li>
											</ul>
											</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>


							


							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/sist-car.png)'}}>
									<div className="desc">
										<div className="con">
											<span><b>E-Concessionário</b></span>
											<span>Website</span>
											<br/>
											<span>
												Sistema de estoque para utilização de concessionárias possuindo: Cadastro,
												edição, busca e filtros de todos os veículos disponiveis ou não em seu sistema. 
												<ul>
													<li>
														Backend: Node.js (Express), MySQL(SQL).
													</li>
													<li>
														Frontend: HTML 5, CSS 3, Botstrap 4, Javascript.
													</li>
													<li>
														Mobile: Em construção.
													</li>
												</ul>
											</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>

						</div>
						<div className="row">
							<div className="col-md-12" data-animate-effect="fadeInTop">
								<p><a href="https://docs.google.com/document/d/e/2PACX-1vQp-2DGH8tPCl3ukpetur2Da6A-Tr4jBrfyhJe4TA3_qq-G0EgRxc7PHrIV-GPC8c6WvFoYuvbsOsqH/pub" className="btn btn-primary btn-lg btn-load-more">Ver CV Completo </a></p>
							</div>
						</div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</section>
      </div>
    )
  }
}
