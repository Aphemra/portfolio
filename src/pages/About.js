import me from "../images/me.jpg";

function About({ webSkillsList, gameSkillsList, sharedSkillsList }) {
	return (
		<div id="about" className="section">
			<h1 className="about-title">
				<span className="about-title highlight">About Me</span>.
			</h1>
			<div className="about-me">
				<img className="about-photo" src={me} alt="My face!" />
				<div className="about-description">
					This is a descripton about me. Have fun reading it as much as I found writing. It is also placeholder.
				</div>
			</div>
			<div className="about-skills">
				<h2>Web Skills</h2>
				<div className="about-web-skills">
					<ul>
						{webSkillsList.map((skill) => {
							return <li className="skill">{skill}</li>;
						})}
					</ul>
				</div>
				<h2>Game Skills</h2>
				<div className="about-game-skills"></div>
				<h2>Shared Skills</h2>
				<div className="about-shared-skills"></div>
			</div>
		</div>
	);
}

export default About;
