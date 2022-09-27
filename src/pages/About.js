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
				indicatorEdge.style.top = "4.0rem";
				indicatorBG.style.top = "4.0rem";
				break;
			case skillFilters.game:
				indicatorEdge.style.top = "6.5rem";
				indicatorBG.style.top = "6.5rem";
				break;
			case skillFilters.shared:
				indicatorEdge.style.top = "9.0rem";
				indicatorBG.style.top = "9.0rem";
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
				<img className="about-photo" src={me} alt="My face!" />
				<div className="about-description">
					This is a descripton about me. Have fun reading it as much as I found writing. It is also placeholder.
				</div>
			</div>
			<div className="about-skills">
				<ul className="about-skills-titles">
					<li
						className={skillFilter === skillFilters.all ? "selected" : ""}
						onClick={() => setActiveFilter(skillFilters.all)}
					>
						All Skills
					</li>
					<li
						className={skillFilter === skillFilters.web ? "selected" : ""}
						onClick={() => setActiveFilter(skillFilters.web)}
					>
						Web Skills
					</li>
					<li
						className={skillFilter === skillFilters.game ? "selected" : ""}
						onClick={() => setActiveFilter(skillFilters.game)}
					>
						Game Skills
					</li>
					<li
						className={skillFilter === skillFilters.shared ? "selected" : ""}
						onClick={() => setActiveFilter(skillFilters.shared)}
					>
						Shared Skills
					</li>
				</ul>
				<div className="indicator-edge"></div>
				<div className="indicator-bg"></div>
				<div className="about-skills-filtered">
					<ul className="skills">
						{allSkillsList.map((skill) => {
							if (skillFilter !== skillFilters.all && skillFilter !== skill.category)
								return <Skill key={skill.id} skill={skill.name} hide={true} />;
							return <Skill key={skill.id} skill={skill.name} hide={false} />;
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default About;
