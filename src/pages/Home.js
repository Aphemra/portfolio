function Home({ resumePDFLink }) {
	return (
		<div id="home" className="section">
			<h1 className="home-header">
				<span className="home-header highlight">Nichalus Kibler</span>.
			</h1>
			<p className="home-subtitle">
				That's my name, but you can call me <span className="home-subtitle highlight">Nic</span>.
			</p>
			<p className="home-content">
				I'm a <span className="home-content highlight bold">software engineer</span> and{" "}
				<span className="home-content highlight bold">game developer</span> with a keen interest in furthering my own
				knowledge and expanding my skillset into more technologies. I am{" "}
				<span className="home-content highlight bold">currently looking for a place to call my own</span> in either space
				and would appreciate a look at what I have to offer.
			</p>
			<button type="button" title="Download my resume!" className="home-resume-download">
				<a target="_blank" rel="noreferrer" href={resumePDFLink}>
					Checkout my Resume!
				</a>
			</button>
		</div>
	);
}

export default Home;
