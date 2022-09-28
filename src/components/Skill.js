function Skill({ skill, hide }) {
	function getConfidenceColor(confidence) {
		if (confidence <= 0.2) return "#B40300";
		if (confidence <= 0.4) return "#CC7E00";
		if (confidence <= 0.6) return "#DBC900";
		if (confidence <= 0.8) return "#85BE00";
		return "#09AD00";
	}

	return (
		<li tabIndex={0} className={`skill ${hide ? "hide" : ""}`}>
			<div className="skill-name">{skill.name}</div>
			<div className="confidence-title">Confidence:</div>
			<div
				className="confidence-meter"
				style={{ width: skill.confidence * 80 + "%", backgroundColor: getConfidenceColor(skill.confidence) }}
			></div>
			<div className="confidence-meter background"></div>
		</li>
	);
}

export default Skill;
