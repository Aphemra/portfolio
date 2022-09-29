function Project({ title, description, imageSource, skillsUsed, projectRepoLink, projectLiveLink, projectDownloadLink }) {
	return (
		<div className="project-container">
			<img className="project-image" src={imageSource} alt={`${title} thumbnail`} />
			<div className="project-data-container">
				<h2 className="project-title">{title}</h2>
				<div className="project-description">{description}</div>
				<div className="project-links">
					<div className={projectLiveLink || projectDownloadLink ? "project-button" : "project-button large"}>
						<a target="_blank" rel="noreferrer" href={projectRepoLink}>
							Source Code
						</a>
					</div>
					<div className={projectLiveLink ? "project-button" : "project-button hide"}>
						<a target="_blank" rel="noreferrer" href={projectLiveLink}>
							Live Demo
						</a>
					</div>
					<div className={projectDownloadLink ? "project-button" : "project-button hide"}>
						<a target="_blank" rel="noreferrer" href={projectDownloadLink}>
							Download
						</a>
					</div>
				</div>
				<div className="project-skills-title">Skills Used:</div>
				<div className="project-skills">
					{skillsUsed.map((skill, index) => {
						return (
							<div className="project-skill" key={skill}>
								{index !== skillsUsed.length - 1 ? `${skill},` : `${skill}`}&nbsp;
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Project;
