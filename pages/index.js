import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));

import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Kuji Bolkvadze",
					description:
						"A passionate Full Stack Web Developer and Blockchain Developer.",
					keywords: [
						"Kuji",
						"Kuji Bolkvadze",
						"Portfolio",
						"Kuji Bolkvadze Portfolio ",
						"Kuji Bolkvadze Portfolio",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Education />
			<Experience />
			<Feedbacks /> 
			<Projects />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

