import Project from "../components/Project";
import lightModeAvatar from "../images/lmAvatar.png";

function Portfolio() {
	return (
		<div id="portfolio" className="section">
			<h1 className="portfolio-title">Portfolio</h1>
			<div className="portfolio-projects">
				<Project
					title="Project 1"
					description="A Project's Description"
					imageSource={lightModeAvatar}
					skillsUsed={["Javascript", "HTML", "CSS", "React"]}
				/>
			</div>
		</div>
	);
}

export default Portfolio;
