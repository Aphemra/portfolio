function Project({ title, description, imageSource, skillsUsed }) {
	return (
		<div className="project-container">
			<img className="project-image" src={imageSource} alt={`${title} thumbnail`} />
			<h2 className="project-title">{title}</h2>
			<div className="project-description">{description}</div>
			<div className="project-skills">
				{skillsUsed.map((skill) => {
					return <h3>{skill}</h3>;
				})}
			</div>
		</div>
	);
}

export default Project;
