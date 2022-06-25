import emoji from "react-easy-emoji";
import stuLogo from "./public/img/icons/common/stu.webp"
import bulgaria from "./public/img/icons/common/bg.jpeg"
import ebg from "./public/img/icons/common/ebg.png"
import spinom from "./public/img/icons/common/spin.jpeg"
import vue from "./public/img/icons/common/vue.png"
import html from  "./public/img/icons/common/html.webp"
import css from  "./public/img/icons/common/css.png"
import jss from  "./public/img/icons/common/jss.png"
import reactlogo from  "./public/img/icons/common/reactlogo.png"
import jquer from  "./public/img/icons/common/jquer.png"
import ui from  "./public/img/icons/common/ui.png"

export const greetings = {
	name: "Kuji Bolkvadze",
	title: "Hi, I'm Kuji",
	description:
		"Front-End Developer from Georgia with 2+ years of experience in this industry",
	resumeLink:
		"https://drive.google.com/file/d/1Jj4QvvMMhRZQrxngrvlhmuTLhgcisaAp/view?usp=sharing",
};

export const openSource = {
	githubUserName: "1hanzla100",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/kuji2336",
	linkedin: "https://www.linkedin.com/in/kuji-bolkvadze-a71259206/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
				),
				emoji(
					"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Georgian Technical University",
		subHeader: "Bachelor of GIS (Geographic Information System)",
		logo:stuLogo,
		duration: "September 2019 - Current",
		desc: "Complete special requests for various Agencies by utilizing existing data, analyzing results, and producing reports, maps, and supporting documentation",
	},
	{
		schoolName: "New Horizons Bulgaria:",
		subHeader: "IT Training and Certification",
		logo:bulgaria,
		duration: "March 2020 - December 2020",
		desc: "IT and business training courses, including Microsoft, IBM, Information Security, CompTIA, VMware, ITIL, Project Management from New Horizons Bulgaria.",
	},
];

export const experience = [
	{
		role: "Front-End Developer",
		company: "Ebay Georgia",
		companylogo: ebg,
		date: "Jun 2019 – Jan 2021",
		desc: "EBG is online E-commerce platform which provides us over a million products placed on Ebay.com",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Front-End Developer",
		company: "Spinom Digital",
		companylogo: spinom,
		date: "Feb 2021 – Current",
		desc: "Spinom Digital builds digital products for medium-size and large companies and their clients",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
];

export const projects = [
	{   
		bgCover:"https://spinom.digital/wp-content/uploads/2019/01/biblusi.png",
		name: "Biblusi.ge",
		desc: "Biblusi is the largest chain of stores offering books and publishing products in Georgia. With twelve years of operating experience in the market, the company is represented by sixty branches across the country. Biblusi aims to make books accessable throughout Georgia and encaurage people to love reading. To achieve this, Biblusi tries to create a “unique environment” for customers offering large variety of products and best service.",
		link: "https://biblusi.ge/",
	},
	{   
		bgCover:'https://spinom.digital/wp-content/uploads/2018/12/palitral.ge_.png',
		name: "Palitral.ge",
		desc: "Publishing House Palitra L is known as the main innovator in the Georgian publishing space. It published the most diverse literature in printed, electronic format as well as audio books. By increasing the availability of products throughout the country, company promotes knowledge and raises literacy. Palitra L was the first to create original 3D books using new technologies and started highly-important projects like “become a Bestseller Authos”, “Guda Audio Books”, “Maculiteratura”, etc. As a result of sixteen years of operation, the company has a reputation of a reliable partner and has stable business relationship with leading publishers of agencies around the world.",
		link: "https://palitral.ge/",
	},
	{   
		bgCover:'https://spinom.digital/wp-content/uploads/2018/12/ebg.ge_.png',
		name: "EBG.ge",
		desc: "EBG is the official partner of eBay.com, the largest Georgian online store, which gives Georgian customers a unique opportunity to purchase more than a billion eBay.com products online, in Georgian, using national currency, by installments and warranty, after which they bring the parcel from the USA to Georgia, delivering to customers’ addresses in more than 40 regions of the country.",
		link: "https://ebg.ge/",
	},
	{   
		bgCover:'https://spinom.digital/wp-content/uploads/2018/12/litbox.ge_.png',
		name: "Litbox.ge",
		desc: "Litbox is a book box subscription service. According to the terms of the service, users receive a literature box on a monthly basis based on a one-time subscription. Well-known representatives of literary circles, as well as specialists in various fields participate in the selection of books. In the individual box, the books are distributed according to the genres and sub-genres indicated by the user at the time of subscription.",
		link: "https://litbox.ge/",
	},
	{   
		bgCover:'https://spinom.digital/wp-content/uploads/2019/01/guda.png',
		name: "Gudabooks.ge",
		desc: "Gudabooks is the project of Publishing House Palitra L, which offers audio books to its customers. With Gudabooks, customers can read anywhere and anytime in car, train or airplane, cycling, walking, standing in line, exercising or when just relaxing. To use Gudabooks, customer buys audio books on the website and books can be listened online or offline using Guda application, which is synchronized with the Gudabooks.ge-s user’s personal library..",
		link: "https://gudabooks.ge/",
	},
	{   
		bgCover:'https://spinom.digital/wp-content/uploads/2019/01/inventor.ge_.png',
		name: "Inventors.ge",
		desc: "Inventor.ge is an online platform for new and used car parts. The company assists individuals and legal entities in finding or distributing auto parts for any type of vehicle. With the help of the company’s application, call center or Facebook page, the customer can find the desired auto part at the lowest price on the market, without any commission or extra time resources, they can buy online and get the package to the desired address.",
		link: "https://play.google.com/store/apps/details?id=ge.viaro.client2",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];



export const stackDetails = [
	{
		name:'HTML 5',
		logo:html,
		details:[
			{name:'Pug'},
			{name:'Semantic HTML'},
		]
	},
	{
		name:'CSS3',
		logo:css,
		details:[
			{name:'SCSS'},
			{name:'Tailwind CSS'},
			{name:'Bootstrap'},
			{name:'Bootstrap Vue'},
		]
	},
	{
		name:'JavaScript (ES6)',
		logo:jss,
		details:[
		]
	},
{
	name:'Vue.js',
	logo:vue,
	details:[
		{name:'Vuex'},
		{name:'Vuetify'},
		{name:'vue-router'},
		{name:'Nuxt.js'},
	]
},
{
	name:'React.js',
	logo:reactlogo,
	details:[
		{name:'Redux/Redux Toolkit'},
		{name:'react-router'},
		{name:'Material Ui'},
		{name:'Styled Components'},
		{name:'React Query'},
	]
},
{
	name:'React Native',
	logo:reactlogo,
	details:[]
},
{
	name:'JQuery',
	logo:jquer,
	details:[]
},
{
	name:'Design systems',
	logo:ui,
	details:[
		{name:'Figma'},
		{name:'Zeplin'},
		{name:'Adobe XD'},
	]
},

]