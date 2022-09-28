import { useState } from "react";
import Skill from "../components/Skill";
import me from "../images/me.jpg";

function About({ allSkillsList }) {
	const skillFilters = { all: "all", web: "web", game: "game", shared: "shared" };
	const [skillFilter, setSkillFilter] = useState(skillFilters.all);

	function setActiveFilter(filter) {
		const indicatorEdge = document.getElementsByClassName("indicator-edge")[0];
		const indicatorBG = document.getElementsByClassName("indicator-bg")[0];
		switch (filter) {
			case skillFilters.all:
				indicatorEdge.style.top = "1.5rem";
				indicatorBG.style.top = "1.5rem";
				break;
			case skillFilters.web:
				indicatorEdge.style.top = "3.5rem";
				indicatorBG.style.top = "3.5rem";
				break;
			case skillFilters.game:
				indicatorEdge.style.top = "5.5rem";
				indicatorBG.style.top = "5.5rem";
				break;
			case skillFilters.shared:
				indicatorEdge.style.top = "7.5rem";
				indicatorBG.style.top = "7.5rem";
				break;
			default:
				indicatorEdge.style.top = "1.5rem";
				indicatorBG.style.top = "1.5rem";
				break;
		}
		setSkillFilter(filter);
	}

	return (
		<div id="about" className="section">
			<h1 className="about-title">
				<span className="about-title highlight">About Me</span>.
			</h1>
			<div className="about-me">
				<div className="about-description">
					<div className="about-photo-container">
						<img className="about-photo" src={me} alt="My face!" />
					</div>
					<p>
						Hey! My name is <span className="highlight">Nic</span> and I hold many interests. I've wanted to work with
						tech since I realized actual people make the sites and games I enjoy -{" "}
						<span className="highlight">turns out you can become one of those people</span>!
					</p>
					<br />
					<p>
						Fast forward and I've got a <span className="highlight">degree in computer science</span> and an ever
						growing list of skills and portfolio projects under my belt. My main focus these days is{" "}
						<span className="highlight">finding my own little corner</span> of our industry and I plan to continue to
						expand my skill set and portfolio while I search.
					</p>
					<br />
					<p>
						You'll find an <span className="highlight">list of my skills and portfolio projects below</span>. Links to{" "}
						<span className="highlight">project source code and live demos</span> (if available) are also below. I
						appreciate you coming to check out my site and hope you enjoyed your stay!
					</p>
				</div>
			</div>
			<div className="about-skills">
				<ul className="about-skills-titles">
					<li
						tabIndex={0}
						className={skillFilter === skillFilters.all ? "selected" : ""}
						onClick={() => setActiveFilter(skillFilters.all)}
					>
						All Skills
					</li>
					<li
						tabIndex={0}
						className={skillFilter === skillFilters.web ? "selected" : ""}
						onClick={() => setActiveFilter(skillFilters.web)}
					>
						Web Skills
					</li>
					<li
						tabIndex={0}
						className={skillFilter === skillFilters.game ? "selected" : ""}
						onClick={() => setActiveFilter(skillFilters.game)}
					>
						Game Skills
					</li>
					<li
						tabIndex={0}
						className={skillFilter === skillFilters.shared ? "selected" : ""}
						onClick={() => setActiveFilter(skillFilters.shared)}
					>
						Shared Skills
					</li>
				</ul>
				<div className="skills-divider"></div>
				<div className="indicator-edge"></div>
				<div className="indicator-bg"></div>
				<div className="about-skills-filtered">
					<ul className="skills">
						{allSkillsList.map((skill) => {
							if (skillFilter !== skillFilters.all && skillFilter !== skill.category)
								return <Skill key={skill.id} skill={skill} hide={true} />;
							return <Skill key={skill.id} skill={skill} hide={false} />;
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default About;
