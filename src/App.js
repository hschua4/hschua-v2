import logo from './logo.svg';

function App() {
	return (
		<div className='App'>
			{/* Navbar */}
			<nav className='navbar'>
				<h1>
					<a>HS CHUA</a>
				</h1>
				<ul>
					<li>
						<a>Projects</a>
					</li>
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Contact</a>
					</li>
				</ul>
			</nav>

			{/* Banner */}
			<section className='banner'>
				<div className='banner-content'>
					<h1>Hey, I'm Hai Siang</h1>
					<p>
						A self-taught web developer specializing in ReactJS and the MERN
						stack
					</p>
					<button>
						<a>My Projects</a>
					</button>
				</div>
			</section>

			{/* Projects */}
			<section className='projects'>
				<h1>Projects</h1>
				<div className='project-item'>
					<div className='image'>
						<img src='./images/hh2.jpg' alt='' />
					</div>
					<div className='project-item-description'>
						<h2>Home's Harmony</h2>
						<p>A mobile e-commerce platform with an admin portal</p>
						<ul>
							<li>
								<i className='fas fa-code'></i> Codeigniter
							</li>
							<li>
								<i className='fas fa-code'></i> Bootstrap
							</li>
							<li>
								<i className='fas fa-code'></i> REST API
							</li>
						</ul>
						<button>See Details</button>
					</div>
				</div>

				<div className='project-item'>
					<div className='project-item-description'>
						<h2>Home's Harmony</h2>
						<p>A mobile e-commerce platform with an admin portal</p>
						<ul>
							<li>
								<i className='fas fa-code'></i> Codeigniter
							</li>
							<li>
								<i className='fas fa-code'></i> Bootstrap
							</li>
							<li>
								<i className='fas fa-code'></i> REST API
							</li>
						</ul>
						<button>Visit site</button>
					</div>
					<div className='image'>
						<img src='./images/hh2.jpg' alt='' />
					</div>
				</div>

				<div className='project-item'>
					<div className='image'>
						<img src='./images/hh2.jpg' alt='' />
					</div>
					<div className='project-item-description'>
						<h2>Home's Harmony</h2>
						<p>A mobile e-commerce platform with an admin portal</p>
						<ul>
							<li>
								<i className='fas fa-code'></i> Codeigniter
							</li>
							<li>
								<i className='fas fa-code'></i> Bootstrap
							</li>
							<li>
								<i className='fas fa-code'></i> REST API
							</li>
						</ul>
						<button>Visit site</button>
					</div>
				</div>

				<div className='project-item'>
					<div className='project-item-description'>
						<h2>Hschua v1</h2>
						<p>The first version of my personal porfolio site</p>
						<ul>
							<li>
								<i className='fas fa-code'></i> ReactJS
							</li>
							<li>
								<i className='fas fa-code'></i> Green Sock Animation
							</li>
							<li>
								<i className='fas fa-code'></i> Static site
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
			<section className='about'>
				<h1>About</h1>
				<div className='about-item'>
					<div className='about-image'>
						<img src='./images/hs.jpg' alt='' />
					</div>
					<div className='about-description'>
						<p>
							After working in the construction industry for 3 years. I've
							decided to take the leap and become a web developer
						</p>
					</div>
				</div>

				<div className='about-item'>
					<div className='skills'>
						<h3>Skills</h3>
						<p>
							HTML &nbsp; CSS &nbsp; Javascript &nbsp; JQuery &nbsp; React
							&nbsp; Redux &nbsp; Codeigniter &nbsp; Bootstrap &nbsp; Node
							&nbsp; Express &nbsp; MongoDB &nbsp; MySQL
							{/* <span>HTML</span>
							<span>CSS</span>
							<span>Javascript</span>
							<span>JQuery</span>
							<span>React</span>
							<span>Redux</span>
							<span>Codeigniter</span>
							<span>Bootstrap</span>
							<span>Node</span>
							<span>Express</span>
							<span>MongoDB</span>
							<span>MySQL</span> */}
						</p>
					</div>
					<div className='tools'>
						<h3>Tools</h3>
						<p>
							Git &nbsp; VSCode &nbsp; Postman &nbsp; XAMPP &nbsp; Fork &nbsp;
							Atlas &nbsp; Netlify &nbsp; Heroku
						</p>
					</div>
				</div>
			</section>

			{/* Contact */}
			<section className='contact'>
				<div className='contact-item'>
					<h1>Contact</h1>
					<p>Interest in building a new project?</p>
					<form action=''>
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
						<label htmlFor='message'>Message</label>
						<textarea name='' id='message' cols='30' rows='10'></textarea>
					</form>
				</div>
			</section>

			<footer className='footer'>
				<p>2021 Hai Siang</p>
			</footer>
		</div>
	);
}

export default App;
