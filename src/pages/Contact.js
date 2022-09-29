import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact({ resumePDFLink }) {
	return (
		<div id="contact" className="section">
			<h1 className="contact-title">
				<span className="contact-title highlight">Contact</span>.
			</h1>
			<div className="contact-container">
				<div className="contact-left">
					<div className="contact-subtitle">
						<div>I appreciate you checking out my site and my work!</div>
						<div>Check out my resume and other links here!</div>
					</div>
					<div className="contact-divider"></div>
				</div>
				<div className="contact-right">
					<div className="contact-buttons">
						<div className="contact-me-button">
							<a target="_blank" rel="noreferrer" href="mailto:aphemra@gmail.com">
								Contact Me
							</a>
						</div>
						<div className="contact-resume-button">
							<a target="_blank" rel="noreferrer" href={resumePDFLink}>
								Resume
							</a>
						</div>
					</div>
					<div className="contact-social-links">
						<div className="contact-icon">
							<a title="Visit my GitHub page!" target="_blank" rel="noreferrer" href="https://github.com/Aphemra">
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</div>
						<div className="contact-icon">
							<a
								title="Visit my LinkedIn page!"
								target="_blank"
								rel="noreferrer"
								href="https://www.linkedin.com/in/nickibler/"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</div>
						<div className="contact-icon">
							<a
								title="Visit my Twitter page!"
								target="_blank"
								rel="noreferrer"
								href="http://www.twitter.com/aphemra"
							>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
