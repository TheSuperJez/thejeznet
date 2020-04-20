import { Form, Menu, Portfolio, PortfolioFilter, Skill, Study, Testimonal, Work } from './MainModule/stateDescriptor';

import Immutable from 'immutable';

let initialState = new Immutable.Map()
	.set('mainModule', new Immutable.Map()
		.set('menuList', new Immutable.List()
			.push(new Menu({ text: 'home', href: '#wrapper' }))
			.push(new Menu({ text: 'about', href: '#about' }))
			.push(new Menu({ text: 'resume', href: '#resume' }))
			.push(new Menu({ text: 'portfolio', href: '#portfolio' }))
			.push(new Menu({ text: 'contact', href: '#contact' }))
			.push(new Menu({ text: 'blog', target: '_blank', href: 'http://thesuperjez.blogspot.com'}))
			)
		.set('skillList', new Immutable.List()
			.push(new Skill({ title: 'ECMAScript 6', percent: '90%' }))
			.push(new Skill({ title: 'React/Redux', percent: '90%' }))
			.push(new Skill({ title: 'Java/Web/Spring Hibernate', percent: '90%' }))
			.push(new Skill({ title: 'Node', percent: '80%' }))
			.push(new Skill({ title: 'C#/.NET Platform', percent: '80%' }))
			.push(new Skill({ title: 'Relational Databases', percent: '90%' }))
			.push(new Skill({ title: 'Non-Relational Databases', percent: '80%' }))
		)
		.set('workList', new Immutable.List()
			.push(new Work({
				nombre: 'Globant',
				posicion: 'Software Engineer',
				de: 'September 2018 ',
				a: 'Actual',
				descripcion: ['Web UI Development',
					'Tech lead',
					'React, Redux, SASS, GraphQL Web Application Development, HandleBars, Node',
					'SCRUM',
					'Fullstack Node Developer',
					'Unit Test',
					'Java'
				]
			}))
			.push(new Work({
				nombre: 'Clé',
				posicion: 'Fullstack Manager',
				de: 'October 2017 ',
				a: 'September 2018',
				descripcion: ['SCRUM project team management',
					'Lean/Model Bussiness Canvas',
					'Providers evaluation',
					'UML diagramming',
					'Java API Services development for digital identity (Spring boot, Gradle)',
					'Web Development (Angular)',
					'React Native App development (using AWS)',
					'Mobile Team Management',
					'Participate on definition of architectures',
					'AWS Lambda Development (Java & Python)',
					'AWS Rekogniton',
					'AWS SQS',
					'AWS S3',
					'Image processing & optimizing using OpenCV']
			}))
			.push(new Work({
				nombre: 'Interware',
				posicion: 'Promotion to Innovation and New Bussiness Lead',
				de: 'October 2016 ',
				a: 'September 2017',
				descripcion: ['SCRUM project team management', 'Tech lead for software projects',
					'Provide technical experience and direction in the design, development and integration of systems.',
					'Technical training and design of certification courses.',
					'Product presentations with customers, technical demonstrations and economyc proposal development.',
					'Provide experience in innovation for the design of software products.',
					'Design of products that uses Machine Learning algorithms.',
					'Promote software products in easy-to-understand terms for marketing purposes (magazines, brochures, social media, videos, etc.).',
					'Writing of technical texts for software product (Manuals, Presentations, Study books for certifications of product).',
					'Software development and definition of architectures (Javascript, Node Clojure, Clojure Script, React & Redux, Reagent).',
					'Web Archictect for customers']
			}))
			.push(new Work({
				nombre: 'Interware',
				posicion: 'Fullstack Consultant',
				de: 'August 2015',
				a: 'October 2016',
				descripcion: ['Native and hybrid application development (React, IBM Mobile First Platform).',
					'Web application development for enrollment and administration of Users (fingerprints, voice, etc.)',
					'Training for mobile and web development (Java, Javascript, React, Apache Cordova, IBM Mobile First Platform)',
					'Java and CRON Web application development for customer (bank)',
					'Java Web application migration, from Websphere (AIX) to JBoss (Solaris) (bank)',
					'Development of Bash, AWK and Clojure scripts for monitoring environments (bank)',
					'Development of responsive Web and mobile applications for enrollment and customer administration, branch map, payments and user administration']
			}))
			.push(new Work({
				nombre: 'Independent consultant',
				posicion: 'Consultant/Instructor',
				de: 'August 2014',
				a: 'August 2015',
				descripcion: ['Training and certification courses delivery for customer such as Secretary of the National Defense of Mexico, México Air Force, NYCE, ISSFAM. Ser-Sinergia',
					'Course: “Aptech Certified Technology Specialist (.NET, C#, ASP.NET, WCF, WPF, Silverlight, WPF, Windows Phone, Web Services)”.',
					'Course: “Certified SQL Server Data Management”',
					'Course: “Aptech Certified Java” (Elementary, Advanced y Web)',
					'Course: “Aptech Certified C Elementary Programmer “',
					'Course: “SUSE Linux Enterprise Server 11 Fundamentals”',
					'Course: “SUSE Linux Enterprise Server 11 Administration”',
					'Course: “Ethical Hacking”',
					'Course: “Moodle Administración y Gestión”',
					'Technical training program in forstartups incubator (iLab):',
					'HTML5, CSS, Javascript, PHP, MySQL, Python, InfoSec Java, Android, Linux',
					'Development for innovation startups: Arduino, MongoDB, Android, C++, Java, Linux.',
					'Technical advice for the development of technological products for innovation startups']
			}))
			.push(new Work({
				nombre: 'Lobo Software',
				posicion: 'Senior Software Developer',
				de: 'February 2012',
				a: 'June 2012',
				descripcion: ['Development of web application for accounting (Grails)',
					'Web Services Development (.NET)',
					'Software testing (volume, concurrency, usability) (JMeter, Selenium)',
					'Research and implementation of software technologies.',
					'Cassandra NO-SQL implementation and migration for high performance data environments.',
					'Training and courses (Grails, Groovy, Hibernate, Spring).']
			}))
			.push(new Work({
				nombre: 'Universidad Autónoma de Tlaxcala | SEDESOL',
				posicion: 'Developer/Technical Lead',
				de: 'August 2014',
				a: 'August 2015',
				descripcion: ['Development of an application for the administration of SEDESOL/INEGI catalogs in tree form.',
					'Development of security application and access management of the applications of social programs.',
					'Java/Android development training.',
					'Developer team selection.',
					'Definition of architecture and technologies to be used.']
			}))
			.push(new Work({
				nombre: 'Lobo Software',
				posicion: 'Senior Developer',
				de: 'December 2010',
				a: 'March 2011',
				descripcion: ['Software product development for fund management (Payroll)',
					'Development of finance administration application (JAVA)',
					'Development of client desktop applications (Java, .NET).',
					'Implementation of high performance servers and clusters (Tomcat and Glassfish) under Unix environments.']
			}))
			.push(new Work({
				nombre: 'AXIA Software',
				posicion: 'Developer',
				de: 'August 2010',
				a: 'December 2010',
				descripcion: ['Desarrollo de aplicación RIA para inventario y administración de productos',
					'Application development for advertising and offers.',
					'Development of Shopping Cart Web application']
			}))
			.push(new Work({
				nombre: 'Kimpack Mfg Co. S.A. de C.V.',
				posicion: 'Developer',
				de: 'December 2010',
				a: 'March 2011',
				descripcion: ['Development of Enterprise Resource Planning (ERP) Java Web application.',
					'Development of fund management software using RIA interfaces.',
					'Software testing (Volume, funcionality)',
					'Implementation of Windows and Linux servers.']
			}))
		)
		.set('studyList', new Immutable.List()
			.push(new Study({
				nombre: 'Certification',
				grado: 'Aptech C# Programmer. ( A Grade Certification )',
				fecha: 'May. 2015'
			}))
			.push(new Study({
				nombre: 'Certification',
				grado: 'Aptech SQL Server Database Manager. ( A Grade Certification)',
				fecha: 'Apr. 2015'
			}))
			.push(new Study({
				nombre: 'Certification',
				grado: 'Aptech C Programmer. ( A Grade Certification)',
				fecha: 'Apr. 2015'
			}))
			.push(new Study({
				nombre: 'UAEMEX',
				grado: 'Master of Science (Computer Science)',
				fecha: 'Agosto 2014'
			}))
			.push(new Study({
				nombre: 'TESI',
				grado: 'Computer Systems Engineering',
				fecha: 'Agosto 2012'
			}))
		)
		.set('testimonialList', new Immutable.List()
			.push(new Testimonal({
				mensaje: '"I do not fear computers. I fear the lack of them."',
				autor: 'Asimov',
			}))
			.push(new Testimonal({
				mensaje: '"Computer science is no more about computers than astronomy is about telescopes"',
				autor: 'Dijkstra',
			}))
			.push(new Testimonal({
				mensaje: '"Imagination is more important than knowledge. For knowledge is limited to all we now know and understand,' +
					'while imagination embraces the entire world, and all there ever will be to know and understand."',
				autor: 'Einstein',
			}))
			.push(new Testimonal({
				mensaje: '"The best way to predict the future is to invent it"',
				autor: 'Alan Kay',
			}))
		)
		.set('portFolioFilterList', new Immutable.List()
			.push(new PortfolioFilter({
				className: 'all current',
				text: 'All',
			}))
			.push(new PortfolioFilter({
				className: 'catDev',
				text: 'Development',
			}))
			.push(new PortfolioFilter({
				className: 'catText',
				text: 'Writting',
			}))
			.push(new PortfolioFilter({
				className: 'catEvents',
				text: 'Talks & Courses Delivery',
			}))
		)

		.set('portfolioList', new Immutable.List()
			.push(new Portfolio({
				id: 'trabajo-1',
				cat: 'catText',
				img: 'images/portfolioImages/libro.png',
				imgLarge: 'images/portfolioImages/libro-full.jpg',
				title: 'Published Book',
				description: 'Master thesis published as a book'
			}))
			.push(new Portfolio({
				id: 'trabajo-2',
				cat: 'catDev',
				img: 'images/portfolioImages/facerekog.jpg',
				imgLarge: 'images/portfolioImages/facerekog-full.jpg',
				title: 'Face Recognition',
				description: 'Using AWS y OpenCV'
			}))
			.push(new Portfolio({
				id: 'trabajo-3',
				cat: 'catDev',
				img: 'images/portfolioImages/cert.png',
				imgLarge: 'images/portfolioImages/cert.png',
				title: 'React Course',
				description: 'React, Redux, ES6 Course'
			}))
			.push(new Portfolio({
				id: 'trabajo-4',
				cat: 'catDev',
				img: 'images/portfolioImages/ES2017.png',
				imgLarge: 'images/portfolioImages/ES2017.png',
				title: 'React ES6',
				description: 'React, Redux & ES2017 Template'
			}))
			.push(new Portfolio({
				id: 'trabajo-5',
				cat: 'catEvents',
				img: 'images/portfolioImages/courses.jpg',
				imgLarge: 'images/portfolioImages/courses.jpg',
				title: 'Ethical Hacking',
				description: 'Ethical Hacking Course'
			}))
			.push(new Portfolio({
				id: 'trabajo-6',
				cat: 'catText',
				img: 'images/portfolioImages/articulo.png',
				imgLarge: 'images/portfolioImages/articulo.png',
				title: 'Published Paper',
				description: 'Master thesis paper'
			}))
			.push(new Portfolio({
				id: 'trabajo-7',
				cat: 'catEvents',
				img: 'images/portfolioImages/talk-prev.jpg',
				imgLarge: 'images/portfolioImages/talk.jpg',
				title: 'Talk',
				description: 'Face recognition AWS, OPEN CV talk'
			}))
			.push(new Portfolio({
				id: 'trabajo-8',
				cat: 'catEvents',
				img: 'images/portfolioImages/talk2-prev.png',
				imgLarge: 'images/portfolioImages/talk2.jpg',
				title: 'Talk',
				description: 'Metrics for performance thresholds'
			}))
			.push(new Portfolio({
				id: 'trabajo-9',
				cat: 'catEvents',
				img: 'images/portfolioImages/prototype.jpg',
				imgLarge: 'images/portfolioImages/prototype.jpg',
				title: 'Technical Program Course',
				description: 'Startup focused technical consultancy'
			}))
			.push(new Portfolio({
				id: 'trabajo-10',
				cat: 'catEvents',
				img: 'images/portfolioImages/programming.jpg',
				imgLarge: 'images/portfolioImages/programming.jpg',
				title: 'Programming Courses',
				description: 'Web UI, Java, .NET, Groovy'
			}))
			.push(new Portfolio({
				id: 'trabajo-11',
				cat: 'catText',
				img: 'images/portfolioImages/blog-prev.png',
				imgLarge: 'images/portfolioImages/blog.png',
				title: 'Technical Blog',
				description: 'Technical blog Writter'
			}))
			.push(new Portfolio({
				id: 'trabajo-12',
				cat: 'catText',
				img: 'images/portfolioImages/article.png',
				imgLarge: 'images/portfolioImages/article.png',
				title: 'Magazine article',
				description: 'Technical Magazine article'
			}))
		)

		.set('form', new Form())
	)

	.set('ajaxModule', 0);

export default initialState;
