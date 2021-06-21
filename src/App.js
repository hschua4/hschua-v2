function App() {
	return (
		<div className='App' id='top'>
			{/* Navbar */}
			<nav className='navbar'>
				<h1>HS CHUA</h1>
				<ul>
					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</nav>

			{/* Banner */}
			<section className='banner'>
				<div className='banner-content'>
					<h1>Hey, I'm Hai Siang</h1>
					<p>
						A self-taught web developer specializing in ReactJS and the MERN
						stack.
					</p>
					<button>
						<a href='#projects'>My Projects</a>
					</button>
				</div>
			</section>

			{/* Projects */}
			<section className='projects' id='projects'>
				<h1>Projects</h1>
				<div className='project-item'>
					<div className='image'>
						<img src='./images/hh2.jpg' alt='' />
					</div>
					<div className='project-item-description'>
						<h2>Home's Harmony</h2>
						<p>
							A mobile e-commerce platform with an admin portal. Built using the
							CodeIgniter framework and Material Pro UI.
						</p>
						<ul>
							<li>
								<i className='fas fa-code'></i>&nbsp; CodeIgniter
							</li>
							<li>
								<i className='fas fa-code'></i>&nbsp; Bootstrap
							</li>
							<li>
								<i className='fas fa-code'></i>&nbsp; REST API
							</li>
						</ul>
						{/* <button>See Details</button>S */}
					</div>
				</div>

				<div className='project-item'>
					<div className='project-item-description'>
						<h2>87 Keys</h2>
						<p>A simple e-commerce site for mechanical keyboard enthusiasts.</p>
						<ul>
							<li>
								<i className='fas fa-code'></i>&nbsp; MERN stack
							</li>
							<li>
								<i className='fas fa-code'></i>&nbsp; React JS
							</li>
							<li>
								<i className='fas fa-code'></i>&nbsp; Redux
							</li>
							<li>
								<i className='fas fa-code'></i>&nbsp; REST API
							</li>
						</ul>
						<a
							href='https://eighty-seven-keys.herokuapp.com/'
							target='_blank'
							rel='noreferrer'
						>
							<button>Visit site</button>
						</a>
					</div>
					<div className='image'>
						<img src='./images/87keys.jpg' alt='' />
					</div>
				</div>

				<div className='project-item'>
					<div className='image'>
						<img src='./images/devocean.jpg' alt='' />
					</div>
					<div className='project-item-description'>
						<h2>Dev Ocean</h2>
						<p>
							Social network site for developers. Create profiles, share posts,
							and get help from other developers.
						</p>
						<ul>
							<li>
								<i className='fas fa-code'></i>&nbsp; MERN stack
							</li>
							<li>
								<i className='fas fa-code'></i>&nbsp; React JS
							</li>
							<li>
								<i className='fas fa-code'></i>&nbsp; Redux
							</li>
						</ul>
						<a
							href='https://devocean2021.herokuapp.com/'
							target='_blank'
							rel='noreferrer'
						>
							<button>Visit site</button>
						</a>
					</div>
				</div>

				<div className='project-item project-item-mb0'>
					<div className='project-item-description'>
						<h2>Hschua v1</h2>
						<p>The first version of my personal porfolio site.</p>
						<ul>
							<li>
								<i className='fas fa-code'></i>&nbsp; ReactJS
							</li>
							<li>
								<i className='fas fa-code'></i>&nbsp; Green Sock Animation
							</li>
							<li>
								<i className='fas fa-code'></i>&nbsp; Static site
							</li>
						</ul>
						<button>Visit site</button>
					</div>
					<div className='image'>
						<img src='./images/hschua-v1.jpg' alt='' />
					</div>
				</div>
			</section>

			{/* About */}
			<section className='about' id='about'>
				<h1>About</h1>
				<div className='about-item'>
					<div className='about-image'>
						<img src='./images/hs.jpg' alt='' />
					</div>
					<div className='about-description'>
						<p>
							After being in the construction industry for 3 years. I've decided
							to take the leap and become a web developer
						</p>
					</div>
				</div>

				<div className='about-item'>
					<div className='skills'>
						<h3>Skills</h3>
						<p>
							{/* HTML &nbsp; CSS &nbsp; Javascript &nbsp; JQuery &nbsp; React
							&nbsp; Redux &nbsp; Codeigniter &nbsp; Bootstrap &nbsp; Node
							&nbsp; Express &nbsp; MongoDB &nbsp; MySQL */}

							<span>HTML</span>
							<span>CSS</span>
							<span>Javascript</span>
							<span>JQuery</span>
							<span>React</span>
							<span>Redux</span>
							<span>CodeIgniter</span>
							<span>Bootstrap</span>
							<span>Node</span>
							<span>Express</span>
							<span>MongoDB</span>
							<span>MySQL</span>
						</p>
					</div>
					<div className='tools'>
						<h3>Tools</h3>
						<p>
							{/* Git &nbsp; VSCode &nbsp; Postman &nbsp; XAMPP &nbsp; Fork &nbsp;
							Atlas &nbsp; Netlify &nbsp; Heroku */}

							<span>Git</span>
							<span>VS Code</span>
							<span>Postman</span>
							<span>XAMPP</span>
							<span>Fork</span>
							<span>MongoDB Atlas</span>
							<span>Netlify</span>
							<span>Heroku</span>
							<span>Github</span>
							<span>MongoDB Compass</span>
							<span>Gitlab</span>
						</p>
					</div>
				</div>
			</section>

			{/* Contact */}
			<section className='contact' id='contact'>
				<div className='contact-item'>
					<h1>Contact</h1>
					<p>Interested in building a new project?</p>
					<form action='' className='contact-form'>
						<div className='form-row'>
							<div className='form-group'>
								<label htmlFor='name'>Name</label>
								<input type='text' id='name' />
							</div>
							<div className='form-group'>
								<label htmlFor='email'>Email</label>
								<input type='email' id='email' />
							</div>
						</div>
						<div className='form-group textarea'>
							<label htmlFor='message'>Message</label>
							<textarea name='' id='message' cols='30' rows='10'></textarea>
						</div>
						<button>Send Message</button>
					</form>
				</div>
			</section>

			<footer className='footer'>
				<p>© 2021 Hai Siang</p>
			</footer>
		</div>
	);
}

export default App;
