import { useState } from "react";
import Skill from "../components/Skill";
import me from "../images/me.jpg";

function About({ allSkillsList }) {
	const skillFilters = { all: "all", web: "web", game: "game", misc: "misc" };
	const [skillFilter, setSkillFilter] = useState(skillFilters.all);

	function setActiveHorizontalFilter(filter) {
		const indicatorEdge = document.querySelectorAll(".indicator-edge.horizontal")[0];
		const indicatorBG = document.querySelectorAll(".indicator-bg.horizontal")[0];
		switch (filter) {
			case skillFilters.all:
				indicatorEdge.style.top = "1.5rem";
				indicatorBG.style.top = "1.5rem";
				break;
			case skillFilters.game:
				indicatorEdge.style.top = "3.5rem";
				indicatorBG.style.top = "3.5rem";
				break;
			case skillFilters.web:
				indicatorEdge.style.top = "5.5rem";
				indicatorBG.style.top = "5.5rem";
				break;
			case skillFilters.misc:
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

	function setActiveVerticalFilter(filter) {
		const indicatorEdge = document.querySelectorAll(".indicator-edge.vertical")[0];
		const indicatorBG = document.querySelectorAll(".indicator-bg.vertical")[0];
		switch (filter) {
			case skillFilters.all:
				indicatorEdge.style.left = "1.1rem";
				indicatorBG.style.left = "1.1rem";
				break;
			case skillFilters.game:
				indicatorEdge.style.left = "4.5rem";
				indicatorBG.style.left = "4.5rem";
				break;
			case skillFilters.web:
				indicatorEdge.style.left = "7.9rem";
				indicatorBG.style.left = "7.9rem";
				break;
			case skillFilters.misc:
				indicatorEdge.style.left = "11.3rem";
				indicatorBG.style.left = "11.3rem";
				break;
			default:
				indicatorEdge.style.left = "1.1rem";
				indicatorBG.style.left = "1.1rem";
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
					<img className="about-photo" src={me} alt="My face!" />
					<p>
						Hello! My name is <span className="highlight">Nic</span> and I've spent the last 15 years of my life pursuing and
						learning game development and - more recently - web development. It has been a passionate hobby of mine since before I
						graduated high school and solidified as my career path since I achieved my{" "}
						<span className="highlight">degree in Computer Science</span> in 2021.
					</p>
					<br />
					<p>
						Fast forward and I've been working to find my place in the{" "}
						<span className="highlight">game development industry</span>. Turns out, it's a pretty hard industry to break into!
						But that's not something that will dissuade me from doing what I <span className="highlight">love to do</span>.
					</p>
					<br />
					<p>So I polished up my web dev skills and made this site to demonstrate my ever-growing skill and project portfolio.</p>
				</div>
			</div>
			<div className="about-skills-horizontal">
				<ul className="about-skills-titles horizontal">
					<li
						tabIndex={0}
						className={skillFilter === skillFilters.all ? "selected" : ""}
						onClick={() => setActiveHorizontalFilter(skillFilters.all)}
					>
						All Skills
					</li>
					<li
						tabIndex={0}
						className={skillFilter === skillFilters.game ? "selected" : ""}
						onClick={() => setActiveHorizontalFilter(skillFilters.game)}
					>
						Game Skills
					</li>
					<li
						tabIndex={0}
						className={skillFilter === skillFilters.web ? "selected" : ""}
						onClick={() => setActiveHorizontalFilter(skillFilters.web)}
					>
						Web Skills
					</li>
					<li
						tabIndex={0}
						className={skillFilter === skillFilters.shared ? "selected" : ""}
						onClick={() => setActiveHorizontalFilter(skillFilters.misc)}
					>
						Misc. Skills
					</li>
				</ul>
				<div className="skills-divider horizontal"></div>
				<div className="indicator-edge horizontal"></div>
				<div className="indicator-bg horizontal"></div>
				<div className="about-skills-filtered horizontal">
					<ul className="skills horizontal">
						{allSkillsList.map((skill) => {
							if (skillFilter !== skillFilters.all && skillFilter !== skill.category)
								return <Skill key={skill.id} skill={skill} hide={true} />;
							return <Skill key={skill.id} skill={skill} hide={false} />;
						})}
					</ul>
				</div>
			</div>
			<div className="about-skills-vertical">
				<ul className="about-skills-titles vertical">
					<li
						tabIndex={0}
						className={skillFilter === skillFilters.all ? "selected" : ""}
						onClick={() => setActiveVerticalFilter(skillFilters.all)}
					>
						All
						<br />
						Skills
					</li>
					<li
						tabIndex={0}
						className={skillFilter === skillFilters.web ? "selected" : ""}
						onClick={() => setActiveVerticalFilter(skillFilters.web)}
					>
						Web Skills
					</li>
					<li
						tabIndex={0}
						className={skillFilter === skillFilters.game ? "selected" : ""}
						onClick={() => setActiveVerticalFilter(skillFilters.game)}
					>
						Game Skills
					</li>
					<li
						tabIndex={0}
						className={skillFilter === skillFilters.shared ? "selected" : ""}
						onClick={() => setActiveVerticalFilter(skillFilters.misc)}
					>
						Misc. Skills
					</li>
				</ul>
				<div className="skills-divider vertical"></div>
				<div className="indicator-edge vertical"></div>
				<div className="indicator-bg vertical"></div>
				<div className="about-skills-filtered vertical">
					<ul className="skills vertical">
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
