function Skill({ skill, hide }) {
	return <li className={`skill ${hide ? "hide" : ""}`}>{skill}</li>;
}

export default Skill;
