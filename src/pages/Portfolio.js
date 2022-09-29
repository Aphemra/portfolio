import Project from "../components/Project";

function Portfolio({ projectsList }) {
	return (
		<div id="portfolio" className="section">
			<h1 className="portfolio-title">
				<span className="portfolio-title highlight">Portfolio</span>.
			</h1>
			<div className="portfolio-projects">
				{projectsList.map((project) => {
					return (
						<Project
							key={project.id}
							title={project.title}
							description={project.description}
							imageSource={project.imageSource}
							skillsUsed={project.skillsUsed}
							projectRepoLink={project.repoLink}
							projectLiveLink={project.liveLink}
							projectDownloadLink={project.downloadLink}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Portfolio;
