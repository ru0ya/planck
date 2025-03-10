import { z } from "zod";

enum CategoryEnum {
	physicist = "physicist",
	biologist = "biologist",
	chemists = "chemist",
}

const scientistSchema = z.array(
	z.object({
		id: z.number({ message: "Id should be a number" }),
		name: z.string(),
		nationality: z.string(),
		category: z.nativeEnum(CategoryEnum),
		description: z.string(),
		date_of_birth: z
			.string()
			.date("Date should follow the format of YYYY-MM-DD"),
		date_of_death: z
			.string()
			.date("Date should follow the format of YYYY-MM-DD")
			.nullable(),
		discoveries: z.array(
			z.string({ message: "Array items should be strings" }),
		),
		nobel_prize: z
			.array(
				z.object({
					category: z.string(),
					year: z.number().gte(1901, {
						message: "Nobel prizes started being awarded in the year 1901",
					}),
					study: z.string(),
				}),
			)
			.nullable(),
		other_awards: z.array(z.string()).nullable(),
	}),
);

export const scientistsData = [
	// Aage Bohr
	{
		id: 1,
		name: "Aage N Bohr",
		nationality: "Danish",
		category: "physicist",
		description:
			"Aage Bohr was awarded the Nobel Prize in Physics in 1975 for his work detailing the structure of the atomic nucleus",
		date_of_birth: "1922-06-19",
		date_of_death: "2009-09-08",
		discoveries: ["Detailing the structure of the atomic nucleus"],
		nobel_prize: [
			{
				category: "Physics",
				year: 1975,
				study: "Detailing the structure of the atomic nucleus",
			},
		],
		other_awards: null,
	},

	// Abdus Salam
	{
		id: 2,
		name: "Abdus Salam",
		nationality: "Indian",
		category: "physicist",
		description: "was a Pakistani theoretical physicist",
		date_of_birth: "1926-01-29",
		date_of_death: "1996-11-21",
		discoveries: [
			"Electroweak theory",
			"Goldstone boson",
			"Grand Unified Theory",
			"Higgs mechanism",
			"Magnetic photon",
			"Neutral current",
			"Pati–Salam model",
			"Quantum mechanics",
			"Pakistan atomic research program",
			"Pakistan space program",
			"Preon",
			"Standard Model",
			"Strong gravity",
			"Superfield",
			"W and Z bosons",
		],
		nobel_prize: null,
		other_awards: [
			"Smith's Prize (1950)",
			"Adams Prize (1958)",
			"Sitara-e-Pakistan (1959)",
			"Hughes Medal (1964)",
			"Atoms for Peace Prize (1968)",
			"Royal Medal (1978)",
			"Matteucci Medal (1978)",
			"Nobel Prize in Physics (1979)",
			"Nishan-e-Imtiaz (1979)",
			"Lomonosov Gold Medal (1983)",
			"Copley Medal (1990)",
		],
	},

	// Albert Einstein
	{
		id: 3,
		name: "Albert Einstein",
		nationality: "German",
		category: "physicist",
		description:
			"German-born theoretical physicist who is widely held as one of the most influential scientists. Best known for developing the theory of relativity",
		date_of_birth: "1879-03-14",
		date_of_death: "1955-04-18",
		discoveries: [
			"General relativity and the equivalence principle",
			"Provided powerful evidence that atoms and molecules actually exist, through his analysis of Brownian motion",
			"Explained the photoelectric effect",
			"Hole argument and Entwurf theory",
			"Gravitational waves",
			"Wormholes",
			"Special relativity",
			"Unified field theory",
			"Equations of motion",
			"Bose–Einstein statistics",
			"Wave–particle duality",
			"Quantum mechanics",
			"Bose–Einstein condensate",
			"EPR paradox",
			"E=hf (Planck–Einstein relation)",
			"E=mc2 (mass–energy equivalence)",
			"Rewrote the law of gravitation:  showed that matter causes space to curve, which produces gravity",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1921,
				study: "discovery of the law of the photoelectric effect",
			},
		],
		other_awards: [
			"Copley medal (1925)",
			"Max Planck Medal (1929)",
			"Barnard Medal for Meritorious Service to Science (1920)",
			"Matteucci Medal (1921)",
			"ForMemRS (1921)",
			"Gold Medal of RAS (1926)",
			"Time Person of the Century (1999)",
			"Membership of NAS (1942)",
		],
	},

	// Alessandro Volta
	{
		id: 4,
		name: "Alessandro Giuseppe Antonio Anastasio Volta",
		nationality: "Italian",
		category: "physicist",
		description:
			"was an Italian physicist and chemist who was a pioneer of electricity and power",
		date_of_birth: "1745-02-18",
		date_of_death: "1827-03-05",
		discoveries: [
			"Invention of the electric cell",
			"Discovery of methane",
			"Law of capacitance",
			"Volt",
			"Voltage",
			"Voltmeter",
			"Volta potential",
			"Volta pistol",
			"Voltaic pile",
		],
		nobel_prize: null,
		other_awards: [
			"ForMemRS (1791)",
			"Copley Medal (1794)",
			"Legion of Honour (1805)",
			"Order of the Iron Crown (1806)",
		],
	},

	// Alhazen -> BC ERA
	// 	{
	// 	    id: 5,
	// 	    name: "Alhazen Ibn al-Haytham",
	// 	    nationality: "Egyptian",
	// 	    description: "was a pioneering Arab polymath, mathematician, astronomer, and physicist during the Islamic Golden Age. He is often regarded as the father of modern optics and made groundbreaking contributions to the scientific method, experimental physics, and the study of light and vision",
	// 	    date_of_birth: "c.965",
	// 	    date_of_death: "c.1040",
	// 	    discoveries: [
	// 			"Optics (theory of light and vision)",
	// 			"Scientific method (empirical experimentation)",
	// 			"Camera obscura principles",
	// 			"Refraction and reflection laws",
	// 			"Anatomy of the eye (cornea, lens, optic nerve)",
	// 			"Alhazen's problem(mathematical optics)",
	// 			"Critique of Ptolemic astronomy",
	// 			"Early concepts of inertia and momentum"
	// 			],
	// 	    nobel_prize: null,
	// 	    other_awards: null,
	// 	},

	// Amedeo Avogadro
	{
		id: 5,
		name: "Lorenzo Romano Amedeo Carlo Avogadro",
		nationality: "Italian",
		category: "physicist",
		description:
			"was an Italian scientist, most noted for his contribution to molecular theory now known as Avogadro's law, which states that equal volumes of gases under the same conditions of temperature and pressure will contain equal numbers of molecules.",
		date_of_birth: "1776-08-09",
		date_of_death: "1856-07-09",
		discoveries: ["Avogadro's constant", "Avogadro's law"],
		nobel_prize: null,
		other_awards: null,
	},

	// Anaximander
	// {
	//     id: 7,
	//     name: "Anaximander",
	//     nationality: "Turkish",
	//     description: "About Anaximander",
	//     date_of_birth: "1776-08-09",
	//     date_of_death: "1856-07-09",
	//     discoveries: [],
	//     nobel_prize: [],
	//     other_awards: []
	// },

	// Andre-Marie Ampere
	{
		id: 6,
		name: "André-Marie Ampère",
		nationality: "French",
		category: "physicist",
		description:
			"was a French physicist and mathematician who was one of the founders of the science of classical electromagnetism, which he referred to as electrodynamics",
		date_of_birth: "1775-01-20",
		date_of_death: "1836-06-10",
		discoveries: [
			"Ampère's circuital law",
			"Ampère's force law",
			"Ampère's right hand grip rule",
			"Ampèrian loop model",
			"Avogadro-Ampère hypothesis",
			"Monge–Ampère equation",
			"Discovery of fluorine",
			"Needle telegraph",
			"Solenoid",
		],
		nobel_prize: null,
		other_awards: ["FRS (1827)"],
	},

	// Archimedes
	// {
	//     id: 9,
	//     name: "Archimedes",
	//     nationality: "Italian",
	//     description: "About Archimedes",
	//     date_of_birth: "1775-01-20",
	//     date_of_death: "1836-06-10",
	//     discoveries: [],
	//     nobel_prize: [],
	//     other_awards: []
	// },

	// Aristotle
	// {
	//     id: 10,
	//     name: "Aristotle",
	//     nationality: "Greek",
	//     description: "About Aristotle",
	//     date_of_birth: "1775-01-20",
	//     date_of_death: "1836-06-10",
	//     discoveries: [],
	//     nobel_prize: [],
	//     other_awards: []
	// },

	// Arthur Compton
	{
		id: 7,
		name: "Arthur Holly Compton",
		nationality: "U.S",
		category: "physicist",
		description:
			"American physicist who won the Nobel Prize in Physics in 1927 for his 1923 discovery of the Compton effect, which demonstrated the particle nature of electromagnetic radiation.",
		date_of_birth: "1892-09-10",
		date_of_death: "1962-03-15",
		discoveries: [
			"Compton scattering",
			"Compton wavelength",
			"Compton–Getting effect",
			"Compton generator",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1927,
				study: "description",
			},
		],
		other_awards: [
			"Matteucci Medal (1930)",
			"Franklin Medal (1940)",
			"Hughes Medal (1940)",
			"Medal for Merit (1946)",
		],
	},

	// Benjamin Franklin
	{
		id: 8,
		name: "Benjamin Franklin",
		nationality: "U.S",
		category: "physicist",
		description:
			" was an American polymath: a leading writer, scientist, inventor, statesman, diplomat, printer, publisher and political philosopher.",
		date_of_birth: "1705-01-17",
		date_of_death: "1790-04-17",
		discoveries: [
			"He invented the Bifocal Spectacles",
			"The Franklin Stove",
			"The Lightning Rod",
			"Shaping our understanding of electricity",
			"Refrigeration",
			"Founded the American Philosophical Society",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// Bernhard Riemann
	{
		id: 9,
		name: "Georg Friedrich Bernhard Riemann",
		nationality: "German",
		category: "physicist",
		description:
			"was a German mathematician who made profound contributions to analysis, number theory, and differential geometry.",
		date_of_birth: "1826-09-17",
		date_of_death: "1866-07-20",
		discoveries: [
			"Free Riemann gas also called primon gas",
			"Riemann invariant",
			"Riemann–Cartan geometry",
			"Riemann–Silberstein vector",
			"Riemann-Lebovitz formulation",
			"Riemann curvature tensor also called Riemann tensor",
			"Riemann tensor (general relativity)",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// Blaise Pascal
	{
		id: 10,
		name: "Blaise Pascal",
		nationality: "French",
		category: "physicist",
		description:
			"French mathematician, physicist, inventor, philosopher, and Catholic writer.",
		date_of_birth: "1623-06-19",
		date_of_death: "1662-08-19",
		discoveries: [
			"Probability theory",
			"Pascal distribution",
			"Pascal's wager",
			"Pascal's triangle",
			"Pascal's law",
			"Pascal's rule",
			"Pascal's theorem",
			"Pascal's calculator",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// Brian Greene
	{
		id: 11,
		name: "Brian Randolph Greene",
		nationality: "American",
		category: "physicist",
		description: "American physicist known for his research on string theory",
		date_of_birth: "1963-02-09",
		date_of_death: null,
		discoveries: [
			"String theory",
			"The Elegant Universe",
			"The Fabric of the Cosmos",
			"The Hidden Reality",
		],
		nobel_prize: null,
		other_awards: ["Andrew Gemant Award (2003)"],
	},

	// C.V. Raman
	{
		id: 12,
		name: "Sir Chandrasekhara Venkata Raman",
		nationality: "Indian",
		category: "physicist",
		description:
			"Indian physicist known for his work in the field of light scattering.",
		date_of_birth: "1888-11-07",
		date_of_death: "1970-11-21",
		discoveries: ["Raman scattering (Raman effect)", "Raman spectroscopy"],
		nobel_prize: [
			{
				category: "Physics",
				year: 1930,
				study: "Raman effect or Raman scattering",
			},
		],
		other_awards: [
			"Fellow of the Royal Society (1924)",
			"Matteucci Medal (1928)",
			"Knight Bachelor (1930)",
			"Hughes Medal (1930)",
			"Bharat Ratna (1954)",
			"Lenin Peace Prize (1957)",
		],
	},

	// Carl Anderson
	{
		id: 13,
		name: "Carl David Anderson",
		nationality: "U.S",
		category: "physicist",
		description:
			"He is best known for his discovery of the positron in 1932, an achievement for which he received the 1936 Nobel Prize in Physics, and of the muon in 1936",
		date_of_birth: "1905-09-03",
		date_of_death: "1991-01-11",
		discoveries: [
			"Carl Anderson discovered the positron in 1932, proving the existence of antimatter",
			"He discovered the muon in 1936",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1936,
				study: "Raman effect or Raman scattering",
			},
		],
		other_awards: ["Elliott Cresson Medal (1937)"],
	},

	// Carl Friedrich Gauss
	{
		id: 14,
		name: "Carl Friedrich Gauss",
		nationality: "German",
		category: "physicist",
		description:
			"Was a German mathematician, generally regarded as one of the greatest mathematicians of all time.",
		date_of_birth: "1777-04-30",
		date_of_death: "1855-02-23",
		discoveries: [
			"Geometry",
			"Number theory",
			"Probability theory",
			"Geodesy",
			"Known for Construction of the Heptadecagon",
			"Number Theory",
			"discoveries of the Dwarf Planet Ceres",
			"Disquisitiones Arithmeticae: Investigations in Arithmetic",
			"Inventing the Heliotrope, The Magnetic Field and SI Units",
			"The Telegraph",
			"Kirchoff’s Circuit Laws",
			"Gauss’s Law & Gauss’s Law for Magnetism",
			"Gauss’s incredible calculating power allowed him to find patterns in numbers more readily than most mathematicians. It enabled him to discover the prime number theorem when he was a teenager",
			"The normal distribution/bell curve is often called the Gaussian distribution, because Gauss discovered it",
			"Although not the first person to use complex numbers, he defined them, establishing the modern notation, and he applied complex numbers to solve problems in science",
			"He opened up the field of differential geometry and published the Theorema Egregium, relating surface curvature to distances and angles.",
		],
		nobel_prize: null,
		other_awards: ["Copley Medal (1838)"],
	},

	// Charles Barkla
	{
		id: 15,
		name: "Charles Glover Barkla",
		nationality: "English",
		category: "physicist",
		description: "About Charles Glover Barkla",
		date_of_birth: "1877-06-07",
		date_of_death: "1944-10-23",
		discoveries: [
			"Known for Construction of the Heptadecagon",
			"Number Theory",
			"discoveries of the Dwarf Planet Ceres",
			"Disquisitiones Arithmeticae: Investigations in Arithmetic",
			"Inventing the Heliotrope, The Magnetic Field and SI Units",
			"The Telegraph",
			"Kirchoff’s Circuit Laws",
			"Gauss’s Law & Gauss’s Law for Magnetism",
			"Gauss’s incredible calculating power allowed him to find patterns in numbers more readily than most mathematicians. It enabled him to discover the prime number theorem when he was a teenager",
			"The normal distribution/bell curve is often called the Gaussian distribution, because Gauss discovered it",
			"Although not the first person to use complex numbers, he defined them, establishing the modern notation, and he applied complex numbers to solve problems in science",
			"He opened up the field of differential geometry and published the Theorema Egregium, relating surface curvature to distances and angles.",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// Charles Townes
	{
		id: 16,
		name: "Charles Hard Townes",
		nationality: "American",
		category: "physicist",
		description: "About Charles Hard Townes",
		date_of_birth: "1915-07-28",
		date_of_death: "2015-01-27",
		discoveries: [
			"Masers",
			"Lasers",
			"Astrophysical maser",
			"Infrared Spatial",
			"Interferometer",
			"Stimulated Brillouin scattering",
			"Townes-Schawlow linewidth",
			"Townes Solution",
			"Autler–Townes effect",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1964,
				study:
					"Contributions to fundamental work in quantum electronics leading to the development of the maser and laser.",
			},
		],
		other_awards: [
			"Comstock Prize in Awards Physics (1958)",
			"John J. Carty Award (1961)",
			"Stuart Ballantine (1962)",
			"Young Medal and Prize (1963)",
			"IEEE Medal of Honor (1967)",
			"Wilhelm Exner Medal (1970)",
			"ForMemRS (1976)",
			"Earle K. Plyler Prize for Molecular Spectroscopy (1977)",
			"National Medal of Science (1982)",
			"Lomonosov Gold Medal (2000)",
			"Templeton Prize (2005)",
			"Vannevar Bush Award (2006)",
			"SPIE Gold Medal (2010)",
			"Golden Goose Award (2012)",
		],
	},

	// Chen Ning Yang
	{
		id: 17,
		name: "Yang Chen-Ning",
		nationality: "Chinese",
		category: "physicist",
		description:
			"Also known as C. N. Yang or by the English name Frank Yang, is a Chinese theoretical physicist who made significant contributions to statistical mechanics, integrable systems, gauge theory, and both particle physics and condensed matter physics",
		date_of_birth: "1922-10-01",
		date_of_death: null,
		discoveries: ["placeholder discoveries"],
		nobel_prize: [
			{
				category: "Physics",
				year: 1957,
				study: "Parity violation theory",
			},
		],
		other_awards: [
			"Ten Outstanding Young Americans (1957)",
			"Rumford Prize (1980)",
			"National Medal of Science (1986)",
			"Oskar Klein Memorial Lecture and Medal (1988)",
			"Benjamin Franklin Medal for Distinguished Achievement in the Sciences of the American",
			"Philosophical Society (1993)",
			"Bower Award (1994)",
			"Albert Einstein Medal (1995)",
			"Lars Onsager Prize (1999)",
			"King Faisal International Prize (2001)",
		],
	},

	// Chien-Shiung Wu
	{
		id: 18,
		name: "Chien-Shiung Wu",
		nationality: "Chinese",
		category: "physicist",
		description:
			"Chinese-American particle and experimental physicist who made significant contributions in the fields of nuclear and particle physics",
		date_of_birth: "1912-05-31",
		date_of_death: "1997-02-16",
		discoveries: [
			"Manhattan Project",
			"Nuclear fission",
			"Wu experiment",
			"Parity violation",
			"Beta decay",
			"Quantum entanglement",
		],
		nobel_prize: null,
		other_awards: [
			"Comstock Prize in Physics (1964)",
			"Bonner Prize (1975)",
			"National Medal of Science (1975)",
			"Wolf Prize in Physics (1978)",
		],
	},

	// Daniel Bernoulli
	{
		id: 19,
		name: "Daniel Bernoulli",
		nationality: "Swiss",
		category: "physicist",
		description:
			"Most distinguished of the second generation of the Bernoulli family os Swiss mathematicians.",
		date_of_birth: "1700-02-08",
		date_of_death: "1782-03-17",
		discoveries: [
			"Put forward Bernoulli's principle",
			"Established the basis for the kinetic theory of gases.",
			"He wrote Exercitationes quaedam Mathematicae on differential equations and the physics of flowing water",
			"Researched properties of vibrating and rotating bodies and contributed to probability theory",
		],
		nobel_prize: null,
		other_awards: ["10 Prizes from Paris Academy of Sciences"],
	},

	// David Gross
	{
		id: 20,
		name: "David Gross",
		nationality: "U.S",
		category: "physicist",
		description:
			"Graduted from Hebrew University of Jerusalem in 1962 and received a Ph.D in physics from University of California.",
		date_of_birth: "1941-02-19",
		date_of_death: null,
		discoveries: [
			"Did research in supestring theory and coinventor of a new supestring model in 1987",
			"Quantum Chromodynamics (QCD)",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 2004,
				study:
					"Together with David Politzer and Frank Wilczek discovered strong force - nuclear force that binds together quarks(the smallest building blocks of matter) and hold together the nucleus of the atom.",
			},
		],
		other_awards: [
			"Numerous awards from a MacArthur Foundation fellowship (1987)",
		],
	},

	// David Hilbert
	{
		id: 21,
		name: "David Hilbert",
		nationality: "German",
		category: "physicist",
		description:
			"German mathematician who reduced geometry to a series of axioms and contributed to the establishment of the formalistic foundations of mathematics.",
		date_of_birth: "1862-01-23",
		date_of_death: "1943-02-14",
		discoveries: [
			"His work in integral equations led to research in functional analysis",
			"Hilbert’s Basis Theorem of Proof",
			"Hilbert’s Axioms of Geometry",
			"Hilbert’s 23 research Problems",
			"Hilbert space",
			"The Gravitational Field Equations of General Relativity",
			"Hilbert Space and Hilbert’s Program: Logic and the Foundation of Mathematics",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// // Democritus
	// {
	//     "id": 26,
	//     "name": "Democritus",
	//     "description": "lkdjhbvnwndbmsncldjfbcj",
	//     "nationality": "Ancient Greek city of Abdera.",
	//     "date_of_birth": 460,
	//     "date_of_death": 370,
	//     "discoveries": [
	//         "He is famous for his atomic theory featuring tiny particles always in motion interacting through collisions",
	//         "His belief that the universe is governed entirely by natural, mechanistic laws rather than gods",
	//         "His description of a universe containing an infinity of diverse inhabited worlds",
	//         "His assertion that nothing is actually something",
	//         "His deduction that the light of stars explains the Milky Way’s appearance",
	//         "His discoveries that a cone’s volume is one-third that of the cylinder with the same base and height"
	//     ]
	// },

	// Amalie Emmy Noether
	{
		id: 22,
		name: "Amalie Emmy Noether",
		nationality: "German",
		category: "physicist",
		description:
			"German mathematician whose innovations in higher algebra gained her recognition as the most creative abstract algebraist of modern times",
		date_of_birth: "1882-03-23",
		date_of_death: "1935-04-14",
		discoveries: [
			"Discovered that if Lagrangian does not change when the coordinate system changes, then there is quantity that is conserved",
			"Noether's Theorem",
			"Built up the theory of noncommutative algebras",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// Enrico Fermi
	{
		id: 23,
		name: "Enrico Fermi",
		nationality: "Italian",
		category: "physicist",
		description:
			"Was an Italian born American scientist who was one of the chief architects of the nuclear age.",
		date_of_birth: "1901-09-29",
		date_of_death: "1954-11-28",
		discoveries: [
			"He developed the mathematical statistics required to clarify a large class of subatomic phenomena",
			"Explored nuclear transformations caused by neutrons, and directed the first controlled chain reaction",
			"Fermi-Dirac Statistics",
			"Fermi paradox (Where is everybody)",
			"Nuclear chain reaction",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1938,
				study: "Nuclear chain reaction",
			},
		],
		other_awards: null,
	},

	// Ernest Orlando Lawrence
	{
		id: 24,
		name: "Ernest Orlando Lawrence",
		nationality: "U.S",
		category: "physicist",
		description:
			"Was an American phycist who invented the cyclotron, the first particle accelerator",
		date_of_birth: "1901-08-08",
		date_of_death: "1958-08-27",
		discoveries: [
			"Invented the first particle accelerator",
			"Invented and patented a colour-television picture tube",
			"Worked on the Manhattan Project as program chief in charge of the development of the electromagnetic process separating uranium-235 for the atomic bomb",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1939,
				study: "Invention of the cyclotron",
			},
		],
		other_awards: ["Award from U.S Atomic Energy Commission (1957)"],
	},

	// Ernest Rutherford
	{
		id: 25,
		name: "Ernest Rutherford",
		nationality: "New Zealand",
		category: "physicist",
		description:
			"He was a New Zeland-born British physicist considered the greatest experimentalist since Michael Faraday.",
		date_of_birth: "1871-08-30",
		date_of_death: "1937-10-19",
		discoveries: [
			"Atomic nucleus",
			"Artificial Disintegration",
			"Radioactivity",
			"Rutherford model",
			"Alpha, Beta, and Gamma Radiation",
			"Radioactive Half-Lives",
		],
		nobel_prize: [
			{
				category: "Chemistry",
				year: 1908,
				study: "Radioactivity",
			},
		],
		other_awards: ["Copley Medal (1922)"],
	},

	// Ernest Walton
	{
		id: 26,
		name: "Ernest Walton",
		nationality: "Ireland",
		category: "physicist",
		description:
			"He is best known for his work with John Cockcroft to construct one of the earliest types of particle accelerator",
		date_of_birth: "1903-10-06",
		date_of_death: "1995-06-25",
		discoveries: [
			"Cockcroft–Walton generator.",
			"Splitting the atom",
			"Credited with being the first to disintegrate the lithium nucleus by bombardment with accelerated protons",
			"Identifying helium nuclei in the products in 1930",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1951,
				study: "Splitting the atom",
			},
		],
		other_awards: ["Hughes Medal (1938)", "MRIA (1935)"],
	},

	// Erwin Schrodinger
	{
		id: 27,
		name: "Erwin Rudolf Josef Alexander Schrodinger",
		nationality: "Austrian",
		category: "physicist",
		description: "Recognized for postulating the Schrodinger equation.",
		date_of_birth: "1887-08-12",
		date_of_death: "1961-01-04",
		discoveries: [
			"Schrodinger equation",
			"Shrodinger's cat",
			"Cat state",
			"Schrodinger method",
			"Schrodinger group",
			"Schrodinger picture",
			"Schrodinger field",
			"Rayleigh-Schrodinger pertubation",
			"Robertson-Schrodinger uncertainty relations",
			"Schrodinger-HJW theorem",
			"Schrodinger's pure-affine theory",
			"Coherent states",
			"Energy level",
			"Entropy and life",
			"Negentropy",
			"Interpretations of quantum mechanics",
			"Qualia",
			"Quantum Biology",
			"Quantum Entanglement",
			"Quantum Superposition",
			"Quantum Steering",
			"Zitterbewegung",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1933,
				study: "Formulation of Schrodinger equation",
			},
		],
		other_awards: [
			"Haitinger Prize (1920)",
			"Matteucci Medal (1927)",
			"Max Planck Medal (1937)",
			"Erwin Schrodinger Prize (1956)",
			"Honorary membership of the Royal irish Academy (1931)",
		],
	},

	// Evangelista Torricelli
	{
		id: 28,
		name: "Evangelista Torricelli",
		nationality: "Italian",
		category: "physicist",
		description:
			"An Italian physicist and mathematician and a student of Galileo.",
		date_of_birth: "1608-10-15",
		date_of_death: "1647-10-25",
		discoveries: [
			"Suction pumps and the Barometer",
			"Torricelli's experiment",
			"Torricelli's equation",
			"Torricelli's law regarding the speed of fluid flowing out an opening",
			"Torricelli's trumpet aka Gabriel's Trumpet",
			"Torricellian vaccum",
			"Cause of the wind",
		],
		nobel_prize: null,
		other_awards: [
			"Statue of Torricelli in gratitude to him (1868)",
			"Asteroid 7437 Torricelli and a crater on the moon named in his honour",
			"Genus of flowering plants named after him (1830)",
		],
	},

	// Francis Crick
	{
		id: 29,
		name: "Francis Harry Compton Crick",
		nationality: "British",
		category: "physicist",
		description:
			"An English molecular biologist, biophysicist and neuroscientist",
		date_of_birth: "1916-06-08",
		date_of_death: "2004-07-28",
		discoveries: [
			"DNA structure",
			"Central dogma",
			"Consciousness",
			"Adaptor hypothesis",
		],
		nobel_prize: [
			{
				category: "Physiology/Medicine",
				year: 1962,
				study: "DNA structure",
			},
		],
		other_awards: [
			"Albert Lasker Award (1960)",
			"Gairdner Foundation International Award (1962)",
			"Mendel Medal (1966)",
			"Royal Medal (1972)",
			"Copley Medal (1972)",
			"Sir Hans Krebs Medal (1977)",
			"Albert Medal (1987)",
			"Golden Plate Award (1987)",
			"Order of Merit (1991)",
		],
	},

	// Frank Wilczek
	{
		id: 30,
		name: "Frank Wilczek",
		nationality: "U.S",
		category: "physicist",
		description:
			"Contributed to the study of questions relating to cosmology, condensed matter physics and blackholes",
		date_of_birth: "1951-05-15",
		date_of_death: null,
		discoveries: [
			"Did research in supestring theory and coinventor of a new supestring model in 1987",
			"Quantum Chromodynamics (QCD)",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 2004,
				study:
					"Together with David J.Gross and H. David Politzer discovered strong force - nuclear force that binds together quarks(the smallest building blocks of matter) and hold together the nucleus of the atom.",
			},
		],
		other_awards: [
			"MacArthur Foundation fellowship (1982)",
			"Trempleton Prize(2022)",
		],
	},

	// Fred Hoyle
	{
		id: 31,
		name: "Sir Fred Hoyle",
		nationality: "British",
		category: "physicist",
		description:
			"Was an English astronomer who formulated the thoery of stellar nucleosynthesis",
		date_of_birth: "1915-06-24",
		date_of_death: "2001-08-20",
		discoveries: [
			"Coining th phrase 'Big Bang",
			"Steady-state-theory",
			"Stellar nucleosynthesis theory",
			"Triple-Alpha process",
			"Panspermia",
			"Hoyle's fallacy",
			"Hoyle's model",
			"B2FH Paper",
			"Hoyle-Narlikar theory",
			"Bondi-Hoyle-Lyttleton",
			"Accretion",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1974,
				study: "Leading role in the discovery of pulsars",
			},
			{
				category: "Physics",
				year: 1983,
				study:
					"THeoretical and experimental studies of the nuclear reactions of importance in the formation of the chemical elements in the universe",
			},
		],
		other_awards: [
			"Gold Medal of the Royal Astronomical Society (1968)",
			"Bakerian Lecture (1968)",
			"Bruce Medal (1970)",
			"Henry Norris Russell Lectureship (1971)",
			"Knighthood (1972)",
			"Royal Medal (1974)",
			"Klumpke-Roberts Award (1977)",
			"Balzan Prize (1994)",
			"Crafoord Prize (1997)",
		],
	},

	// Galileo Galilei
	{
		id: 32,
		name: "Galileo di Vincenzo Bonaiuti de' Galilei",
		nationality: "Italian",
		category: "physicist",
		description:
			"commonly referred to as Galileo Galilei  or mononymously as Galileo, was an Italian (Florentine)[a] astronomer, physicist and engineer,sometimes described as a polymath",
		date_of_birth: "1564-02-15",
		date_of_death: "1642-01-08",
		discoveries: [
			"Celatone",
			"Analytical dynamics",
			"Frictionless plane",
			"Galileo number",
			"Galileo thermometer",
			"Galileo's ship",
			"Galileo's escapement",
			"Galileo's experiment",
			"Galileo's law of odd numbers",
			"Galileo's objective lens",
			"Galileo's paradox",
			"Galileo's problem",
			"Galileo's sector",
			"Galilean equivalency principle",
			"Galilean invariance",
			"Galilean moons",
			"Galilean telescope",
			"Galilean transformation",
			"Heliocentrism",
			"Inertia",
			"Pendulum clock",
			"Phases of Venus",
			"Rings of Saturn",
			"Square-cube law",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// Georg Ohm
	{
		id: 33,
		name: "Georg Simon Ohm",
		nationality: "German",
		category: "physicist",
		description: "German physicist and mathematician",
		date_of_birth: "1789-03-16",
		date_of_death: "1854-07-06",
		discoveries: ["Ohm's law", "Ohm's accoustic law", "Ohm"],
		nobel_prize: null,
		other_awards: ["Copley medal (1841)"],
	},

	// Guglielmo Marconi
	{
		id: 34,
		name: "Guglielmo Marconi",
		nationality: "Italian",
		category: "physicist",
		description:
			"Worked on the development of shortwave wireless communication.",
		date_of_birth: "1874-04-25",
		date_of_death: "1937-07-20",
		discoveries: ["Radiotelegraphy"],
		nobel_prize: [
			{
				category: "Physics",
				year: 1909,
				study: "Hertzian wave",
			},
		],
		other_awards: null,
	},

	// Hans Bethe
	{
		id: 35,
		name: "Hans Albrecht Bethe",
		nationality: "German-American",
		category: "physicist",
		description:
			"He was a theoretical physicist who made major contributions to nuclear physics, astrophysics, quantum electrodynamics, and solid-state physics",
		date_of_birth: "1906-07-02",
		date_of_death: "2005-03-06",
		discoveries: [
			"Nuclear physics",
			"Stellar nucleosynthesis",
			"Quantum electrodynamics",
			"Cavity perturbation theory",
			"Crystal field theory",
			"Bethe–Salpeter equation",
			"Bethe-Slater curve",
			"Bethe formula",
			"Bethe-Heitler formula",
			"Mott-Bethe formula",
			"Bethe lattice",
			"Bethe–Feynman formula",
			"Bethe ansatz",
			"Bethe–Weizsäcker formula",
			"Bethe–Weizsäcker process",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1967,
				study: "theory of stellar nucleosynthesis",
			},
		],
		other_awards: [
			"A. Cressy Morrison Prize (1939)",
			"Henry Draper Medal (1947)",
			"Franklin Medal (1959)",
			"Eddington Medal (1961)",
			"Enrico Fermi Award (1961)",
			"Rumford Prize (1963)",
			"Nat'l Medal of Science (1975)",
			"Lomonosov Gold Medal (1989)",
			"Oersted Medal (1993)",
			"Bruce Medal (2001)",
			"Benjamin Franklin Medal (2005)",
		],
	},

	// Hans Christian Ørsted
	{
		id: 36,
		name: "Hans Christian Ørsted",
		nationality: "Danish",
		category: "physicist",
		description:
			"A Danish physicist and chemist who discovered that electric currents create magnetic fields",
		date_of_birth: "1777-08-14",
		date_of_death: "1851-03-09",
		discoveries: [
			"Oersted's law",
			"Discovery of aluminium",
			"Thought experiment Oersted",
		],
		nobel_prize: null,
		other_awards: [
			"Copley Medal (1820)",
			"ForMemRS (1821)",
			"FRSE (1821)",
			"Pour le Mérite (1842)",
		],
	},

	// Heinrich Hertz
	{
		id: 42,
		name: "Heinrich Rudolf Hertz",
		nationality: "German",
		category: "physicist",
		description:
			"German physicist who first conclusively proved the existence of the electromagnetic waves",
		date_of_birth: "1857-02-22",
		date_of_death: "1894-01-01",
		discoveries: [
			"Hertzian wave",
			"Contact mechanics",
			"Emagram",
			"Parabollic antenna",
			"Photoelectric effect",
			"Hertzian cone",
			"Hertzian dipole antenna",
			"Hertzian oscillator",
			"Hertzian vector",
			"Hertzian-Knudsen equation",
			"Hertz's principle of least curvature",
		],
		nobel_prize: null,
		other_awards: ["Matteucci Medal Awards (1888)", "Rumford Medal (1890)"],
	},

	// Henry Moseley
	{
		id: 43,
		name: "Henry Gwyn Jeffreys Moseley",
		nationality: "English",
		category: "physicist",
		description:
			"Physicist whose contribution to the science of physics was the justification from physical laws of\n" +
			"the previous empirical and chemical concept of the atomic number",
		date_of_birth: "1887-11-23",
		date_of_death: "1915-08-10",
		discoveries: ["Atomic number", "Moseley's law"],
		nobel_prize: null,
		other_awards: ["Matteucci Medal (1919)"],
	},

	// Inge Lehmann
	{
		id: 44,
		name: "Inge Lehmann",
		nationality: "Danish",
		category: "physicist",
		description:
			"Danish seismologist and geophysicist who is known for her discovery in 1936 of the solid inner core that exists within the molten outer core of the Earth.",
		date_of_birth: "1888-05-13",
		date_of_death: "1993-02-21",
		discoveries: ["Discovery of a solid inner core in earths crust"],
		nobel_prize: null,
		other_awards: ["William Bowie Medal (1971)"],
	},

	// Irene Joliot-Curie
	{
		id: 45,
		name: "Irène Joliot-Curie",
		nationality: "French",
		category: "physicist",
		description:
			"French chemist, physicist and politician, the elder daughter of Pierre Curie and Marie Skłodowska–Curie, and the wife of Frédéric Joliot-Curie.",
		date_of_birth: "1897-09-12",
		date_of_death: "1956-03-17",
		discoveries: ["Discovery of induced radioactivity"],
		nobel_prize: [
			{
				category: "Chemistry",
				year: 1935,
				study: "Discovery of induced radioactivity",
			},
		],
		other_awards: null,
	},

	// Isaac Newton
	{
		id: 46,
		name: "Sir Isaac Newton",
		nationality: "English",
		category: "physicist",
		description:
			"English polymath active as a mathematician, physicist, astronomer, alchemist, theologian, and author who was described in his time as a natural philosopher.",
		date_of_birth: "1642-10-25",
		date_of_death: "1726-03-20",
		discoveries: [
			"Newton's laws of motion",
			"Newtonian mechanics",
			"Gravitional forces",
			"Calculus",
			"Optics",
			"Binomial Series",
			"Newton's method",
			"Principia",
			"Newton's law of cooling",
			"Newtonian identities",
			"Newton's metal",
			"Newton line",
			"Newton-Gauss Line",
			"Newtonian fluid",
		],
		nobel_prize: null,
		other_awards: ["FRS (1672)", "Bachelor (1705)"],
	},

	// J. J. Thompson
	{
		id: 47,
		name: "Sir Joseph John Thomson",
		nationality: "British",
		category: "physicist",
		description:
			"British physicist and Nobel Laureate in Physics, credited with the discovery of the electron",
		date_of_birth: "1856-12-18",
		date_of_death: "1940-08-30",
		discoveries: [
			"Plum pudding model",
			"Discovery of electron",
			"Discovery of isotopes",
			"Mass spectrometer invention",
			"Electromagnetic mass",
			"First m/e measurement",
			"Proposed first waveguide",
			"Gibbs–Thomson equation",
			"Thomson scattering",
			"Thomson problem",
			"Coining term 'delta ray",
			"Coining term 'epsilon radiation'",
			"Thomson (unit)",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1906,
				study: "Conduction of electricity in gases",
			},
		],
		other_awards: [
			"Smith's Prize (1880)",
			"Royal Medal (1894)",
			"Hughes Medal (1902)",
			"Elliott Cresson Medal (1910)",
			"Copley Medal (1914)",
			"Albert Medal (1915)",
			"Franklin Medal (1922)",
			"Faraday Medal (1925)",
			"Dalton Medal (1931)",
		],
	},

	// J. Robert Oppenheimer
	{
		id: 48,
		name: "Julius Robert Oppenheimer",
		nationality: "American",
		category: "physicist",
		description:
			"American theoretical physicist who served as the director of the Manhattan Project's Los Alamos Laboratory during World War II. Also know as father of the atomic bomb",
		date_of_birth: "1904-04-22",
		date_of_death: "1967-02-18",
		discoveries: [
			"Atomic bomb",
			"Oppenheimer–Snyder model",
			"Tolman–Oppenheimer–Volkoff equation",
			"Tolman–Oppenheimer–Volkoff limit",
			"Oppenheimer–Phillips process",
			"Born–Oppenheimer approximation",
		],
		nobel_prize: null,
		other_awards: ["Medal for Merit (1946)", "Enrico Fermi Award (1963)"],
	},

	// James Chadwick
	{
		id: 49,
		name: "Sir James Chadwick",
		nationality: "American",
		category: "physicist",
		description:
			"English physicist who was awarded the 1935 Nobel Prize in Physics for his discovery of the neutron in 1932",
		date_of_birth: "1891-10-20",
		date_of_death: "1974-07-24",
		discoveries: [
			"Discovery of the neutron",
			"MAUD Committee Report",
			"Manhattan Project",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1935,
				study: "Discovery of the neutron",
			},
		],
		other_awards: [
			"Fellow of the Royal Society (1927)",
			"Hughes Medal (1932)",
			"Knight Bachelor (1945)",
			"Melchett Medal (1946)",
			"Copley Medal (1950)",
			"Faraday Medal (1950)",
			"Franklin Medal (1951)",
			"Guthrie Medal and Prize (1967)",
			"Member of the Order of the Companions of Honour (1970)",
		],
	},

	// James Clerk Maxwell
	{
		id: 50,
		name: "James Clerk Maxwell",
		nationality: "Scottish",
		category: "physicist",
		description:
			"Scottish physicist and mathematician who was responsible for the classical theory of electromagnetic radiation",
		date_of_birth: "1831-06-13",
		date_of_death: "1879-11-05",
		discoveries: [
			"Electromagnetism",
			"Colour vision",
			"Kinetic theory and thermodynamics",
			"Control theory",
		],
		nobel_prize: null,
		other_awards: [
			"Smith's Prize (1854)",
			"Adams Prize (1857)",
			"Rumford Medal (1860)",
			"FRS (1861)",
			"Bakerian Medal (1866)",
			"Keith Medal (1869–1871)",
		],
	},

	// Johannes Kepler
	{
		id: 51,
		name: "Johannes Kepler",
		nationality: "German",
		category: "physicist",
		description:
			"He is a key figure in the 17th-century Scientific Revolution, best known for his laws of planetary motion",
		date_of_birth: "1571-12-27",
		date_of_death: "1630-11-15",
		discoveries: [
			"Kepler's laws of planetary motion",
			"Kepler conjecture",
			"Rudolphine Tables",
			"Astronomia Nova",
			"Mysterium Cosmographicum",
			"Harmonice Mundi",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// John Bardeen
	{
		id: 52,
		name: "John Bardeen",
		nationality: "American",
		category: "physicist",
		description:
			"He is the only person to be awarded the Nobel Prize in Physics twice: first in 1956 with William Shockley and Walter Brattain for the invention of the transistor; and again in 1972 with Leon N. Cooper and John Robert Schrieffer for a fundamental theory of conventional superconductivity known as the BCS theory.",
		date_of_birth: "1908-05-23",
		date_of_death: "1991-01-30",
		discoveries: [
			"Point-contact transistor",
			"Field-effect transistor",
			"BCS theory",
			"Superconductivity",
			"Surface physics",
			"Deformation potential theory",
			"Bardeen's formalism",
			"Mattis–Bardeen theory",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1956,
				study: "Invention of the transistor",
			},
			{
				category: "Physics",
				year: 1972,
				study: "BCS theory.",
			},
		],
		other_awards: [
			"Stuart Ballantine medal (1952)",
			"Oliver E. Buckley Solid State Prize (1954)",
			"Fritz London Memorial Prize (1962)",
			"National Medal of Science (1965)",
			"IEEE Medal of Honor (1971)",
			"ForMemRS (1973)",
			"Franklin Medal (1975)",
			"Lomonosov Gold Medal (1987)",
		],
	},

	// John Cockcroft
	{
		id: 53,
		name: "Sir John Douglas Cockcroft",
		nationality: "English",
		category: "physicist",
		description:
			"was an English physicist who shared with Ernest Walton the Nobel Prize in Physics in 1951 for splitting the atomic nucleus, and was instrumental in the development of nuclear power.",
		date_of_birth: "1897-05-27",
		date_of_death: "1967-09-18",
		discoveries: ["Splitting the atom"],
		nobel_prize: [
			{
				category: "Physics",
				year: 1951,
				study: "placeholder",
			},
		],
		other_awards: [
			"FRS (1936)",
			"Hughes Medal (1938)",
			"Order of the British Empire (1944)",
			"Medal of Freedom (1947)",
			"Knighthood (1948)",
			"Order of the Bath (1953)",
			"Royal Medal (1954)",
			"Faraday Medal (1955)",
			"Military Order of Christ (1955)",
			"Order of Merit (1957)",
			"Civil Order of Alfonso X, the Wise (1958)",
			"Atoms for Peace Award (1961)",
			"Wilhelm Exner Medal (1961)",
		],
	},

	// John Michell

	{
		id: 54,
		name: "John Michell",
		nationality: "English",
		category: "physicist",
		description:
			"Considered 'one of the greatest unsung scientists of all time', he is the first person known to have proposed the existence of stellar bodies comparable to black holes, and the first to have suggested that earthquakes travelled in (seismic) waves.",
		date_of_birth: "1724-12-25",
		date_of_death: "1793-04-21",
		discoveries: [
			"Predicting the existence of black holes, seismology, manufacture of magnets, mass of the Earth",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// John Philoponus
	// {
	//     id: 55,
	//     name: "John Philoponus",
	// 	nationality: "Greek",
	// 	description:
	// 		"Considered 'one of the greatest unsung scientists of all time', he is the first person known to have proposed the existence of stellar bodies comparable to black holes, and the first to have suggested that earthquakes travelled in (seismic) waves.",
	// 	date_of_birth: "1724-12-25",
	// 	date_of_death: "1793-04-21",
	// 	discoveries: [
	// 		"Predicting the existence of black holes, seismology, manufacture of magnets, mass of the Earth",
	// 	],
	// 	nobel_prize: null,
	// 	other_awards: null,
	// }

	// John Wallis
	{
		id: 56,
		name: "John Wallis",
		nationality: "English",
		category: "physicist",
		description:
			"Was an English clergyman and mathematician, who is given partial credit for the development of infinitesimal calculus.",
		date_of_birth: "1616-11-23",
		date_of_death: "1703-10-28",
		discoveries: [
			"Wallis product",
			"Inventing the symbol ∞",
			"Extending Cavalieri's quadrature formula",
			"Coining the term 'momentum'",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// Joseph Henry
	{
		id: 57,
		name: "Joseph Henry",
		nationality: "American",
		category: "physicist",
		description:
			"American physicist and inventor who served as the first secretary of the Smithsonian Institution",
		date_of_birth: "1797-12-17",
		date_of_death: "1878-05-13",
		discoveries: [
			"Doorbell",
			"Electromagnet",
			"Electromagnetic induction",
			"Relay",
			"Henry (unit)",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// Joseph-Louis Lagrange
	{
		id: 58,
		name: "Joseph-Louis Lagrange",
		nationality: "Italian",
		category: "physicist",
		description:
			"was an Italian mathematician, physicist and astronomer, later naturalized French. He made significant contributions to the fields of analysis, number theory, and both classical and celestial mechanics.",
		date_of_birth: "1736-01-25",
		date_of_death: "1813-04-10",
		discoveries: [
			"Lagrangian analysis",
			"Lagrangian coordinates",
			"Lagrangian derivative",
			"Lagrangian drifter",
			"Lagrangian foliation",
			"Lagrangian Grassmannian",
			"Lagrangian intersection Floer homology",
			"Lagrangian mechanics",
			"Lagrangian (field theory)",
			"Lagrangian system",
			"Lagrangian mixing",
			"Lagrangian point",
			"Lagrangian relaxation",
			"Lagrangian submanifold",
			"Lagrangian subspace",
			"Nonlocal Lagrangian",
			"Proca lagrangian",
			"Special Lagrangian submanifold",
			"Euler–Lagrange equation",
			"Green–Lagrange strain",
			"Lagrange bracket",
			"Lagrange–Bürmann formula",
			"Lagrange–d'Alembert principle",
			"Lagrange error bound",
			"Lagrange form",
			"Lagrange form of the remainder",
			"Lagrange interpolation",
			"Lagrange invariant",
			"Lagrange inversion theorem",
			"Lagrange multiplier",
			"Lagrange number",
			"Lagrange point colonization",
			"Lagrange polynomial",
			"Lagrange property",
			"Lagrange reversion theorem",
			"Lagrange resolvent",
			"Lagrange spectrum",
			"Lagrange stability",
			"Lagrange stream function",
			"Lagrange top",
			"Lagrange−Sylvester interpolation",
			"Lagrange's approximation theorem",
			"Lagrange's formula",
			"Lagrange's identity",
			"Lagrange's identity (boundary value problem)",
			"Lagrange's mean value theorem",
			"Lagrange's notation",
			"Lagrange's theorem (group theory)",
			"Lagrange's theorem (number theory)",
			"Lagrange's four-square theorem",
			"Lagrange's trigonometric identities",
		],
		nobel_prize: null,
		other_awards: null,
	},
	{
		id: 59,
		name: "Kip Stephen Thorne",
		nationality: "American",
		category: "physicist",
		description:
			"Is an American theoretical physicist and writer known for his contributions in gravitational physics and astrophysics.",
		date_of_birth: "1940-06-01",
		date_of_death: null,
		discoveries: [
			"Gravitational waves and LIGO",
			"Black hole cosmology",
			"Wormholes and time travel",
			"Relativistic stars, multipole moments and other endeavors",
		],
		nobel_prize: null,
		other_awards: [
			"American Academy of Arts and Sciences (1972)",
			"National Academy of Sciences",
			"Russian Academy of Sciences",
			"American Philosophical Society.",
		],
	},

	// Lawrence Bragg
	{
		id: 60,
		name: "Sir William Lawrence Bragg",
		nationality: "Australian",
		category: "physicist",
		description:
			"Also known as Lawrence Bragg, was an Australian-born British physicist and X-ray crystallographer, discoverer (1912) of Bragg's law of X-ray diffraction, which is basic for the determination of crystal structure. ",
		date_of_birth: "1890-03-31",
		date_of_death: "1971-07-01",
		discoveries: ["X-rays and the Bragg equation", "Work on sound ranging"],
		nobel_prize: [
			{
				category: "Physics",
				year: 1915,
				study: "Analysis of crystal structures by means of X-rays",
			},
		],
		other_awards: [
			"Hughes Medal (1931)",
			"Royal Medal (1946)",
			"Guthrie Lecture (1952)",
			"Copley Medal (1966)",
		],
	},

	// Lisa Randall
	{
		id: 61,
		name: "Lisa Randall",
		nationality: "American",
		category: "physicist",
		description: " American theoretical physicist",
		date_of_birth: "1962-06-18",
		date_of_death: null,
		discoveries: ["American theoretical physicist"],
		nobel_prize: null,
		other_awards: [
			"J.J. Sakurai Prize for Theoretical Particle Physics 2019",
			"Andrew Gemant Award, 2012",
			"Golden Plate Award of the American Academy of Achievement, 2008",
			"Lilienfeld Prize, 2007",
			"E. A. Wood Science Writing Award, 2007",
			"Klopsteg Memorial Award from the American Association of Physics Teachers (AAPT), 2006",
			"Premio Caterina Tomassoni e Felice Pietro Chisesi, from the Sapienza University of Rome, 2003",
			"National Science Foundation Young Investigator Award, 1992",
		],
	},

	// Lise Meitner
	{
		id: 62,
		name: "Elise Meitner",
		nationality: "Austrian",
		category: "physicist",
		description:
			" Austrian-Swedish nuclear physicist who was instrumental in the discovery of nuclear fission",
		date_of_birth: "1878-11-07",
		date_of_death: "1968-10-27",
		discoveries: ["Nuclear fission", "Transmutation", "Beta radiation"],
		nobel_prize: null,
		other_awards: null,
	},

	{
		id: 63,
		name: "William Thomson, 1st Baron Kelvin",
		nationality: "British",
		category: "physicist",
		description: "British mathematician, mathematical physicist and engineer.",
		date_of_birth: "1824-06-26",
		date_of_death: "1907-12-17",
		discoveries: [
			"Thermoelectric Thomson effect",
			"Kelvin bridge (also known as Thomson bridge)",
			"Kelvin functions",
			"Kelvin–Helmholtz instability",
			"Kelvin–Helmholtz luminosity",
			"Kelvin–Helmholtz mechanism",
			"Kelvin–Voigt material",
			"Joule–Thomson effect",
			"Kelvin sensing",
			"Kelvin transform in potential theory",
			"Kelvin wake pattern",
			"Kelvin water dropper",
			"Kelvin wave",
			"Kelvin's heat death paradox",
			"Kelvin's circulation theorem",
			"Kelvin–Stokes theorem",
			"Kelvin–Varley divider",
			"The SI unit of temperature, kelvin",
		],
		nobel_prize: null,
		other_awards: [
			"Fellow of the Royal Society of Edinburgh, 1847.",
			"Keith Medal, 1864.",
			"Gunning Victoria Jubilee Prize, 1887.",
			"President, 1873–1878, 1886–1890, 1895–1907.",
			"Foreign member of the Royal Swedish Academy of Sciences, 1851.",
			"Fellow of the Royal Society, 1851.",
			"Royal Medal, 1856.",
			"Copley Medal, 1883.",
			"President, 1890–1895.",
			"Hon. Member of the Royal College of Preceptors (College of Teachers), 1858.",
			"Hon. Member of the Institution of Engineers and Shipbuilders in Scotland, 1859.",
			"Knighted 1866.",
			"Commander of the Imperial Order of the Rose (Brazil), 1873. ",
			"Commander of the Legion of Honour (France), 1881.",
			"Grand Officer of the Legion of Honour, 1889.",
			"Knight of the Prussian Order Pour le Mérite, 1884.",
			"Commander of the Order of Leopold (Belgium), 1890.",
			"Baron Kelvin, of Largs in the County of Ayr, 1892.",
			"Knight Grand Cross of the Victorian Order, 1896.",
			"Honorary degree Legum doctor (LL.D.), Yale University, 5 May 1902.",
			"One of the first members of the Order of Merit, 1902.",
			"Privy Counsellor, 11 August 1902.",
			"Honorary degree Doctor mathematicae from the Royal Frederick University on 6 September 1902",
			"First international recipient of John Fritz Medal, 1905.",
			"Order of the First Class of the Sacred Treasure of Japan, 1901.",
		],
	},

	// Luis Alvarez
	{
		id: 64,
		name: "Luis Walter Alvarez",
		nationality: "American",
		category: "physicist",
		description:
			"American experimental physicist, inventor, and Nobel laureate known for groundbreaking work in particle physics, radar technology, and the asteroid-impact theory of dinosaur extinction.",
		date_of_birth: "1911-06-03",
		date_of_death: "1988-09-01",
		discoveries: [
			"Co-developed the Alvarez hypothesis (with Walter Alvarez) linking the Cretaceous-Paleogene extinction to an asteroid impact",
			"Nobel Prize in Physics (1968) for development of the hydrogen bubble chamber and discoveries in particle physics",
			"Pioneered radar systems during WWII (Ground-Controlled Approach for aircraft landing)",
			"Contributed to the Manhattan Project (detonation observer and explosives expert)",
			"Discovered the 'Alvarez Parity' phenomenon in particle physics",
			"Developed novel techniques for detecting subatomic particles using liquid hydrogen",
			"Advanced muon-catalyzed fusion research",
			"Coined the term 'Little Boy' for the atomic bomb dropped on Hiroshima",
			"Used cosmic rays to search for hidden chambers in Egyptian pyramids (1960s)",
			"Authored influential papers on geophysics, optics, and aviation technology",
			"Held patents for radar navigation systems and color television technology",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// Marie Curie
	{
		id: 65,
		name: "Maria Salomea Skłodowska-Curie",
		nationality: "Polish",
		category: "physicist",
		description:
			"Polish physicist and chemist, pioneer in radioactivity research. First woman Nobel laureate and first person to win Nobel Prizes in two scientific fields (Physics and Chemistry)",
		date_of_birth: "1867-11-07",
		date_of_death: "1934-07-04",
		discoveries: [
			"Discovery of polonium and radium (first isolation of radioactive isotopes)",
			"Pioneering research on radioactivity (term the coined)",
			"First woman awarded a Nobel Prize (1903, Physics) for radiation studies",
			"Second Nobel Prize (1911, Chemistry) for isolating pure radium",
			"Development of mobile X-ray units ('Little Curies') during World War I",
			"Established the theory of radioactive decay and atomic transmutation",
			"Techniques for isolating radioactive isotopes for medical use",
			"Founded the Curie Institutes in Paris and Warsaw, advancing cancer research",
			"First female professor at the University of Paris (Sorbonne)",
			"Early studies linking radiation to tumor treatment",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// Masatoshi Koshiba
	{
		id: 66,
		name: "Masatoshi Koshiba",
		nationality: "Japanese",
		category: "physicist",
		description:
			"Japanese physicist and Nobel laureate renowned for pioneering neutrino astronomy. His work revolutionized the detection and understanding of neutrinos, fundamental particles in the universe.",
		date_of_birth: "1926-09-19",
		date_of_death: "2020-11-12",
		discoveries: [
			"Nobel Prize in Physics (2002) for detecting cosmic neutrinos and contributions to astrophysics",
			"Designed and led the Kamiokande and Super-Kamiokande neutrino observatories",
			"First detection of neutrinos from the Sun (solar neutrinos), confirming the solar fusion process",
			"Observed neutrinos from Supernova 1987A, providing the first direct evidence of stellar collapse",
			"Confirmed neutrino oscillations, proving neutrinos have mass (key to the Standard Model of particle physics)",
			"Advanced the field of neutrino astronomy, enabling study of cosmic events via neutrino detection",
			"Mentored future leaders in particle physics and astrophysics",
			"Advocated for international collaboration in large-scale physics experiments",
			"Authored influential works on particle physics and astrophysics",
		],
		nobel_prize: null,
		other_awards: null,
	},

	//	Max Born
	{
		id: 67,
		name: "Max Born",
		nationality: "German-British",
		category: "physicist",
		description:
			"German-British physicist and mathematician, foundational to quantum mechanics. Nobel laureate for his statistical interpretation of the wave function.",
		date_of_birth: "1882-12-11",
		date_of_death: "1970-01-05",
		discoveries: [
			"Nobel Prize in Physics (1954) for the statistical interpretation of quantum mechanics",
			"Developed the Born rule, linking wave functions to probabilities of particle positions",
			"Pioneered matrix mechanics (with Werner Heisenberg and Pascual Jordan), a foundation of quantum theory",
			"Introduced the concept of the Born approximation in scattering theory",
			"Coined the term 'quantum mechanics'",
			"Advanced the theory of crystal lattices and lattice dynamics",
			"Mentored future Nobel laureates, including Werner Heisenberg and Wolfgang Pauli",
			"Advocated for the ethical use of science and nuclear disarmament",
			"Authored influential texts like *Atomic Physics* and *Principles of Optics* (with Emil Wolf)",
			"Played a key role in the development of quantum electrodynamics (QED)",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// Max Planck
	{
		id: 68,
		name: "Max Karl Ernst Ludwig Planck ",
		nationality: "German",
		category: "physicist",
		description:
			"German theoretical physicist whose discovery of energy quanta won him the Nobel Prize in Physics in 1918",
		date_of_birth: "1858-04-23",
		date_of_death: "1947-10-04",
		discoveries: [
			"Nobel Prize in Physics (1918) for the discovery of energy quanta",
			"Formulated Planck's law of black-body radiation, introducing the quantum of action (Planck constant, h)",
			"Laid the foundation for quantum mechanics with the concept of quantized energy",
			"Derived the Planck-Einstein relation (E = hν), linking energy to frequency",
			"Developed the concept of entropy and its role in thermodynamics",
			"Pioneered the study of quantum theory, influencing Einstein, Bohr, and Heisenberg",
			"Introduced the idea of zero-point energy",
			"Played a key role in the development of the theory of heat radiation",
			"Advocated for the unity of physics and the philosophical implications of quantum theory",
			"Founded the Kaiser Wilhelm Society (now Max Planck Society), a leading scientific institution",
		],
		nobel_prize: null,
		other_awards: null,
	},

	// Michael Faraday
	{
		id: 69,
		name: "Michael Faraday",
		nationality: "British",
		category: "physicist",
		description:
			"British scientist who made groundbreaking contributions to electromagnetism and electrochemistry, laying the foundation for electric power technology.",
		date_of_birth: "1791-09-22",
		date_of_death: "1867-08-25",
		discoveries: [
			"Electromagnetic induction",
			"Electrolysis laws",
			"Diamagnetism",
			"Faraday effect (interaction between light and magnetism)",
			"Faraday cage (shielding effect of conductors)",
			"Relationship between electricity and magnetism",
			"Discovered benzene",
			"Developed early concepts of electric and magnetic fields",
		],
		nobel_prize: null,
		other_awards: [
			"Royal Medal (1835, 1846)",
			"Copley Medal (1832, 1838)",
			"Rumford Medal (1846)",
			"Albert Medal (1866)",
			"Foreign Member of the Royal Society",
		],
	},

	// Michio Kaku
	{
		id: 70,
		name: "Michio Kaku",
		nationality: "American",
		category: "physicist",
		description:
			"American theoretical physicist, futurist, and popular science communicator known for his work in string field theory and his efforts to make science accessible to the public.",
		date_of_birth: "1947-01-24",
		date_of_death: null,
		discoveries: [
			"Contributions to string field theory",
			"Developed the first functional string field theory equations",
			"Explored higher-dimensional space-time in theoretical physics",
			"Popularized the concept of a 'Theory of Everything'",
			"Advocated for the potential of parallel universes and the multiverse",
		],
		nobel_prize: null,
		other_awards: [
			"Kloppesteg Memorial Award",
			"Sir Arthur Clarke Award for Science Communication",
			"Isaac Asimov Science Award",
		],
	},

	// Murray Gell-Mann
	{
		id: 71,
		name: "Murray Gell-Mann",
		nationality: "American",
		category: "physicist",
		description:
			"American physicist who was instrumental in the development of the quark model, greatly advancing the field of particle physics",
		date_of_birth: "1929-09-15",
		date_of_death: "2019-05-24",
		discoveries: [
			"Quark model",
			"Eightfold Way (classification of hadrons)",
			"Quantum chromodynamics (QCD)",
			"Gell-Mann matrices",
			"Current algebra",
			"Strangeness (quantum number in particle physics)",
			"Renormalization group",
			"Totalitarian principle ('Everything not forbidden is compulsory')",
			"Deep connections between fundamental physics and complexity theory",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1969,
				study:
					"contributions and discoveries concerning the classification of elementary particles and their interactions",
			},
		],
		other_awards: [
			"Albert Einstein Award (1959)",
			"Ernest Orlando Lawrence Award (1966)",
			"Franklin Medal (1967)",
			"National Medal of Science (1988)",
			"Max Planck Medal (1997)",
			"Foreign Member of the Royal Society (ForMemRS, 1978)",
		],
	},

	// Nicolo Tartaglia
	{
		id: 72,
		name: "Nicolo Tartaglia",
		nationality: "Italian",
		category: "physicist",
		description:
			"Italian mathematician, engineer, and ballistics expert. Known for solving cubic equations and his contributions to the science of ballistics and mechanics during the Renaissance.",
		date_of_birth: "1499-12-13",
		date_of_death: "1557-12-13",
		discoveries: [
			"Developed a method for solving cubic equations (Tartaglia's formula)",
			"Pioneered the study of ballistics and projectile motion",
			"Authored *Nova Scientia*, a foundational work on the science of ballistics",
			"Translated and preserved ancient Greek mathematical texts, including Euclid's *Elements*",
			"Contributed to the understanding of mechanics and geometry",
			"Studied the trajectories of cannonballs and other projectiles",
			"Introduced mathematical rigor to the study of artillery and fortifications",
		],
		nobel_prize: null,
		other_awards: [
			"Legacy honored through the Tartaglia crater on the Moon",
			"Recognized as a key figure in the Renaissance revival of mathematics and science",
			"His work influenced later mathematicians like Gerolamo Cardano and Galileo Galilei",
		],
	},

	// Neils Bohr
	{
		id: 73,
		name: "Neils Bohr",
		nationality: "Danish",
		category: "physicist",
		description:
			"Danish physicist and Nobel laureate, foundational to quantum mechanics and atomic theory. Developed the Bohr model of the atom and contributed to the Copenhagen interpretation of quantum mechanics",
		date_of_birth: "1885-10-07",
		date_of_death: "1962-11-18",
		discoveries: [
			"Developed the Bohr model of the atom, explaining electron orbits and energy levels",
			"Introduced the concept of complementarity in quantum mechanics",
			"Co-founded the Copenhagen interpretation of quantum mechanics",
			"Explained atomic spectra and the hydrogen atom's emission lines",
			"Contributed to the theory of nuclear fission and the liquid drop model",
			"Played a key role in the Manhattan Project's early stages",
			"Founded the Niels Bohr Institute in Copenhagen",
			"Authored influential works on atomic structure and quantum theory",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1922,
				study: "investigations of atomic structure and radiation",
			},
		],
		other_awards: [
			"Max Planck Medal (1930)",
			"Copley Medal (1938)",
			"Franklin Medal (1926)",
			"Order of the Elephant (Denmark's highest honor, 1947)",
			"Foreign Member of the Royal Society (London)",
			"Honorary doctorates from over 30 universities",
			"Legacy honored through the Bohr model, Bohr radius, and Niels Bohr Institute",
			"Considered one of the founders of modern quantum mechanics",
		],
	},

	// Nikola Tesla
	{
		id: 74,
		name: "Nikola Tesla",
		nationality: "Serbian-American",
		category: "physicist",
		description:
			"Serbian-American inventor, electrical engineer, and futurist. Pioneer of alternating current (AC) electrical systems, wireless communication, and numerous groundbreaking innovations in electromagnetism and energy transmission",
		date_of_birth: "1856-07-10",
		date_of_death: "1943-01-07",
		discoveries: [
			"Designed the modern alternating current (AC) electricity supply system",
			"Invented the Tesla coil (foundational to wireless technology and radio transmission)",
			"Developed principles of wireless communication and radio technology",
			"Patented the induction motor and transformer",
			"Pioneered X-ray imaging experiments and high-frequency currents",
			"Proposed wireless energy transmission (Wardenclyffe Tower project)",
			"Invented remote control technology (teleautomaton)",
			"Designed the Tesla turbine and bladeless turbine engine",
			"Advocated for global wireless communication and renewable energy systems",
		],
		nobel_prize: null,
		other_awards: [
			"Edison Medal (1917)",
			"Order of St. Sava (Serbia, 1892)",
			"Elliott Cresson Medal (1894)",
			"John Scott Medal (1934)",
			"Honorary doctorates from Columbia and Zagreb Universities",
			"Unit of magnetic flux density (tesla) named in his honor",
			"Inducted into the National Inventors Hall of Fame (1975)",
		],
	},

	// Paul Dirac
	{
		id: 75,
		name: "Paul Dirac",
		nationality: "British",
		category: "physicist",
		description:
			"British theoretical physicist and Nobel laureate, known for his foundational contributions to quantum mechanics and quantum electrodynamics. Formulated the Dirac equation, predicting antimatter",
		date_of_birth: "1902-08-08",
		date_of_death: "1984-10-20",
		discoveries: [
			"Formulated the Dirac equation, unifying quantum mechanics and special relativity",
			"Predicted the existence of antimatter (positrons)",
			"Developed the theory of quantum electrodynamics (QED)",
			"Introduced the concept of Dirac spinors and the Dirac delta function",
			"Pioneered the use of bra-ket notation in quantum mechanics",
			"Contributed to the development of the path integral formulation of quantum mechanics",
			"Authored *The Principles of Quantum Mechanics*, a foundational text in physics",
			"Studied magnetic monopoles and their implications for quantum theory",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1933,
				study: "discovery of new productive forms of atomic theory",
			},
		],
		other_awards: [
			"Royal Medal (1939)",
			"Copley Medal (1952)",
			"Max Planck Medal (1952)",
			"Fellow of the Royal Society (1930)",
			"Honorary doctorates from numerous universities",
			"Legacy honored through the Dirac Medal (ICTP)",
			"Considered one of the founders of modern quantum mechanics",
		],
	},

	// Pyotr Kapitsa
	{
		id: 76,
		name: "Pyotr Kapitsa",
		nationality: "Russian",
		category: "physicist",
		description:
			"Soviet physicist and Nobel laureate, known for his work in low-temperature physics and the discovery of superfluidity in liquid helium. A pioneer in cryogenics and strong magnetic fields.",
		date_of_birth: "1894-07-08",
		date_of_death: "1984-04-08",
		discoveries: [
			"Discovered superfluidity in liquid helium-4 (1937)",
			"Developed innovative techniques for producing strong magnetic fields",
			"Pioneered the study of high-intensity microwave electronics",
			"Invented the Kapitza-Dirac effect, demonstrating electron diffraction by light",
			"Studied the properties of liquid helium and its phase transitions",
			"Contributed to the development of cryogenic engineering and low-temperature physics",
			"Authored foundational works on plasma physics and superconductivity",
			"Founded the Institute for Physical Problems in Moscow",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1978,
				study:
					"basic inventions and discoveries in the area of low-temperature physics",
			},
		],
		other_awards: [
			"Lomonosov Gold Medal (1959)",
			"Rutherford Medal and Prize (1966)",
			"Order of Lenin (multiple times)",
			"Foreign Member of the Royal Society (London)",
			"Honorary doctorates from numerous universities",
			"Legacy honored through the Kapitza Institute in Moscow",
			"Considered one of the founders of modern low-temperature physics",
		],
	},

	// Richard A. Muller
	{
		id: 77,
		name: "Richard A. Muller",
		nationality: "American",
		category: "physicist",
		description:
			"American physicist known for his work in climate science, astrophysics, and geophysics. Founder of the Berkeley Earth project, which analyzes global temperature data, and a prominent science communicator",
		date_of_birth: "1944-01-06",
		date_of_death: null,
		discoveries: [
			"Co-founded the Berkeley Earth project to refine and validate global climate temperature records",
			"Proposed the Nemesis hypothesis, suggesting a stellar companion to the Sun influencing comet dynamics",
			"Conducted pioneering research on dark matter distribution in the Milky Way",
			"Developed methods for analyzing cosmic microwave background radiation anisotropies",
			"Authored influential works on climate science, including *Physics for Future Presidents*",
			"Investigated the causes of mass extinctions and asteroid impacts",
			"Contributed to the understanding of radioisotope dating techniques",
			"Advanced public understanding of energy and climate through accessible science writing",
		],
		nobel_prize: null,
		other_awards: [
			"MacArthur Fellowship (Genius Grant, 1982)",
			"Leo Szilard Award for Physics in the Public Interest (1984)",
			"Fellow of the American Physical Society",
			"Professor Emeritus at the University of California, Berkeley",
			"Author of popular science books: *Physics for Future Presidents* and *The Instant Physicist*",
			"Legacy honored through the Berkeley Earth initiative's global climate analyses",
		],
	},

	// Richard Feynman
	{
		id: 78,
		name: "Richard Feynman",
		nationality: "American",
		category: "physicist",
		description:
			"American theoretical physicist, Nobel laureate, and charismatic science communicator. Revolutionized quantum electrodynamics (QED), developed Feynman diagrams, and contributed to particle physics, superfluidity, and quantum computing",
		date_of_birth: "1918-05-11",
		date_of_death: "1988-02-15",
		discoveries: [
			"Formulated quantum electrodynamics (QED), explaining interactions between light and matter",
			"Invented Feynman diagrams, a visual tool for particle interactions",
			"Developed the path integral formulation of quantum mechanics",
			"Explained superfluidity in liquid helium",
			"Proposed the parton model, advancing quark theory",
			"Co-authored the Feynman Lectures on Physics, a landmark in physics education",
			"Investigated the Challenger disaster as part of the Rogers Commission",
			"Pioneered concepts in quantum computing (Feynman's version of the Church-Turing thesis)",
			"Worked on the Manhattan Project, contributing to atomic bomb development",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1965,
				study:
					"fundamental work in quantum electrodynamics, with profound consequences for particle physics",
			},
		],
		other_awards: [
			"Albert Einstein Award (1954)",
			"Oersted Medal (1972)",
			"National Medal of Science (1979)",
			"Foreign Member of the Royal Society (London)",
			"Ernest Orlando Lawrence Award (1962)",
			"Honorary doctorates from over 30 universities",
			"Named one of the 'Ten Greatest Physicists of All Time' by Physics World",
			"Legacy honored through the Feynman Prize in Nanotechnology",
			"Authored popular science books: *Surely You're Joking, Mr. Feynman!* and *What Do You Care What Other People Think?*",
		],
	},

	// Robert Hooke
	{
		id: 79,
		name: "Robert Hooke",
		nationality: "English",
		category: "physicist",
		description:
			"English natural philosopher, architect, and polymath, known for his contributions to physics, biology, and microscopy. A key figure in the Scientific Revolution.",
		date_of_birth: "1635-07-18",
		date_of_death: "1703-03-03",
		discoveries: [
			"Discovered Hooke's Law of elasticity, describing the behavior of springs",
			"Pioneered the use of the microscope, coining the term 'cell' in biology",
			"Published *Micrographia*, a groundbreaking work on microscopy and biology",
			"Studied the nature of light and wave theory, influencing later work on optics",
			"Contributed to the design of scientific instruments, including the compound microscope",
			"Proposed a wave theory of light and studied diffraction",
			"Made significant contributions to astronomy, including the study of comets and planets",
			"Designed buildings and structures, including the Royal Observatory at Greenwich",
			"Advocated for the scientific method and experimental philosophy",
		],
		nobel_prize: null,
		other_awards: [
			"Fellow of the Royal Society (1663)",
			"Curator of Experiments for the Royal Society (1662–1677)",
			"Gresham Professor of Geometry (1665–1703)",
			"Legacy honored through the Hooke Medal (British Society for the History of Science)",
			"Considered one of the most influential scientists of the 17th century",
		],
	},

	// Rodger Penrose
	{
		id: 80,
		name: "Rodger Penrose",
		nationality: "British",
		category: "physicist",
		description:
			"British mathematical physicist, mathematician, and philosopher of science, renowned for his work on general relativity, black holes, and the nature of consciousness. Nobel laureate in Physics.",
		date_of_birth: "1931-08-08",
		date_of_death: null,
		discoveries: [
			"Proved the Penrose-Hawking singularity theorems, showing singularities are inevitable in general relativity",
			"Developed the theory of black hole formation and the cosmic censorship conjecture",
			"Invented Penrose tilings, aperiodic patterns with fivefold symmetry",
			"Proposed the Penrose process, a mechanism to extract energy from rotating black holes",
			"Contributed to twistor theory, a framework for unifying quantum mechanics and general relativity",
			"Studied the nature of spacetime and the geometry of the universe",
			"Authored *The Road to Reality*, a comprehensive guide to the laws of physics",
			"Explored the relationship between physics and consciousness in *The Emperor's New Mind*",
			"Made significant contributions to the study of gravitational waves and cosmology",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 2020,
				study:
					"discovery that black hole formation is a robust prediction of the general theory of relativity",
			},
		],
		other_awards: [
			"Wolf Prize in Physics (1988)",
			"Copley Medal (2008)",
			"Royal Medal (1985)",
			"Albert Einstein Medal (1990)",
			"Fellow of the Royal Society (1972)",
			"Honorary doctorates from numerous universities",
			"Knighted for services to science (1994)",
			"Legacy honored through the Penrose Institute, exploring physics and consciousness",
		],
	},

	// S. N. Bose
	{
		id: 81,
		name: "S. N. Bose",
		nationality: "Indian",
		category: "physicist",
		description:
			"Indian physicist and mathematician, best known for his work on quantum mechanics and the development of Bose-Einstein statistics. The class of particles known as bosons is named in his honor",
		date_of_birth: "1894-01-01",
		date_of_death: "1974-02-04",
		discoveries: [
			"Developed Bose-Einstein statistics, describing the behavior of bosons",
			"Collaborated with Albert Einstein to predict the Bose-Einstein condensate",
			"Pioneered the study of quantum mechanics and statistical mechanics",
			"Contributed to the theory of the photon gas and blackbody radiation",
			"Authored the foundational paper on quantum statistics, sent to Einstein for validation",
			"Studied the properties of X-rays and crystallography",
			"Made significant contributions to the understanding of unified field theories",
			"Advocated for the development of science education in India",
		],
		nobel_prize: null,
		other_awards: [
			"Padma Vibhushan (India's second-highest civilian award, 1954)",
			"Fellow of the Royal Society (1958)",
			"Honorary doctorates from numerous universities",
			"Legacy honored through the naming of bosons (particles obeying Bose-Einstein statistics)",
			"S.N. Bose National Centre for Basic Sciences (Kolkata) named in his honor",
			"Considered one of the founders of quantum statistics",
		],
	},

	// Stephen Hawking
	{
		id: 82,
		name: "Stephen Hawking",
		nationality: "British",
		category: "physicist",
		description:
			"British theoretical physicist, cosmologist, and author, renowned for his work on black holes, general relativity, and quantum mechanics. A cultural icon for his contributions to science and his resilience in the face of ALS.",
		date_of_birth: "1942-01-08",
		date_of_death: "2018-03-14",
		discoveries: [
			"Predicted that black holes emit radiation (Hawking radiation)",
			"Proposed the no-boundary condition for the origin of the universe",
			"Contributed to the understanding of singularities in general relativity",
			"Studied the thermodynamics of black holes and the information paradox",
			"Authored *A Brief History of Time*, one of the most popular science books of all time",
			"Developed the theory of cosmic inflation and the multiverse",
			"Collaborated on the Penrose-Hawking singularity theorems",
			"Explored the relationship between quantum mechanics and general relativity",
			"Made significant contributions to the study of the early universe and cosmology",
		],
		nobel_prize: null,
		other_awards: [
			"Albert Einstein Medal (1979)",
			"Wolf Prize in Physics (1988)",
			"Copley Medal (2006)",
			"Presidential Medal of Freedom (2009)",
			"Special Breakthrough Prize in Fundamental Physics (2013)",
			"Fellow of the Royal Society (1974)",
			"Honorary doctorates from numerous universities",
			"Legacy honored through the Stephen Hawking Medal for Science Communication",
			"Stephen Hawking Fellowship (University of Cambridge)",
			"Considered one of the most influential scientists of the modern era",
		],
	},

	// Steven Weinberg
	{
		id: 83,
		name: "Steven Weinberg",
		nationality: "American",
		category: "physicist",
		description:
			"American theoretical physicist and Nobel laureate, known for his contributions to the unification of the weak force and electromagnetism, and for his work on the Standard Model of particle physics",
		date_of_birth: "1933-05-03",
		date_of_death: "2021-07-23",
		discoveries: [
			"Formulated the electroweak theory, unifying the weak force and electromagnetism",
			"Predicted the existence of the W and Z bosons and the Higgs mechanism",
			"Co-developed the Standard Model of particle physics",
			"Contributed to the understanding of quantum field theory and symmetry breaking",
			"Authored *The Quantum Theory of Fields*, a foundational text in theoretical physics",
			"Studied the cosmological constant problem and dark energy",
			"Proposed the Weinberg angle, a key parameter in the electroweak theory",
			"Made significant contributions to the theory of quantum chromodynamics (QCD)",
			"Advocated for the reductionist approach in physics",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1979,
				study:
					"contributions to the theory of the unified weak and electromagnetic interaction between elementary particles",
			},
		],
		other_awards: [
			"National Medal of Science (1991)",
			"Albert Einstein Medal (1979)",
			"James Joyce Award (2009)",
			"Benjamin Franklin Medal (2004)",
			"Foreign Member of the Royal Society (London)",
			"Honorary doctorates from numerous universities",
			"Legacy honored through the Steven Weinberg Award (American Physical Society)",
			"Authored popular science books, including *The First Three Minutes* and *Dreams of a Final Theory*",
		],
	},

	// SUBRAHMANYAN CHANDRASEKHAR
	{
		id: 84,
		name: "SUBRAHMANYAN CHANDRASEKHAR",
		nationality: "Indian-American",
		category: "physicist",
		description:
			"Indian-American astrophysicist and Nobel laureate, known for his work on stellar structure, black holes, and the Chandrasekhar limit. A pioneer in theoretical astrophysics",
		date_of_birth: "1910-10-19",
		date_of_death: "1995-08-21",
		discoveries: [
			"Discovered the Chandrasekhar limit (1.4 solar masses), determining the fate of white dwarfs",
			"Developed the theory of stellar structure and evolution",
			"Pioneered the study of black holes and relativistic astrophysics",
			"Investigated the dynamics of stellar systems and radiative transfer",
			"Contributed to the theory of hydrodynamic and hydromagnetic stability",
			"Studied the mathematical theory of black holes and singularities",
			"Authored *An Introduction to the Study of Stellar Structure* and *The Mathematical Theory of Black Holes*",
			"Made significant contributions to the understanding of white dwarfs, neutron stars, and supernovae",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1983,
				study:
					"theoretical studies of the physical processes important to the structure and evolution of stars",
			},
		],
		other_awards: [
			"National Medal of Science (1966)",
			"Copley Medal (1984)",
			"Royal Medal (1962)",
			"Henry Norris Russell Lectureship (1949)",
			"Padma Vibhushan (India's second-highest civilian award, 1968)",
			"Gold Medal of the Royal Astronomical Society (1953)",
			"Honorary doctorates from numerous universities",
			"Chandra X-ray Observatory named in his honor",
			"Legacy honored through the Chandrasekhar Prize (American Physical Society)",
		],
	},

	// Thomas Young
	{
		id: 85,
		name: "Thomas Young",
		nationality: "British",
		category: "physicist",
		description:
			"British polymath, physicist, and physician, known for his contributions to wave theory of light, vision, and deciphering the Rosetta Stone. A pioneer in multiple scientific fields.",
		date_of_birth: "1773-06-13",
		date_of_death: "1829-05-10",
		discoveries: [
			"Demonstrated the wave nature of light through the double-slit experiment",
			"Proposed the Young-Helmholtz theory of color vision (trichromatic theory)",
			"Deciphered parts of the Rosetta Stone, laying the groundwork for understanding Egyptian hieroglyphs",
			"Introduced the concept of energy in its modern scientific sense",
			"Studied elasticity and defined Young's modulus, a measure of material stiffness",
			"Investigated the mechanics of the eye and vision, including astigmatism",
			"Contributed to the understanding of surface tension and capillary action",
			"Authored *A Course of Lectures on Natural Philosophy and the Mechanical Arts*",
			"Pioneered the field of physiological optics",
		],
		nobel_prize: null,
		other_awards: [
			"Fellow of the Royal Society (1794)",
			"Bakerian Lecture (1801, 1803, 1805)",
			"Royal Society's Rumford Medal (1802)",
			"Foreign Member of the Royal Swedish Academy of Sciences",
			"Honorary doctorates from several universities",
			"Legacy honored through the Thomas Young Medal and Prize (Institute of Physics)",
			"Considered one of the last true polymaths",
		],
	},

	// Vera Rubin
	{
		id: 86,
		name: "Vera Rubin",
		nationality: "American",
		category: "physicist",
		description:
			"American astronomer who pioneered work on galaxy rotation rates, providing key evidence for the existence of dark matter. A trailblazer for women in science",
		date_of_birth: "1928-07-23",
		date_of_death: "2016-12-25",
		discoveries: [
			"Provided observational evidence for dark matter through galaxy rotation curves",
			"Discovered the discrepancy between predicted and observed galactic rotation rates (Rubin-Ford effect)",
			"Pioneered the study of galaxy dynamics and large-scale structure in the universe",
			"Advocated for the existence of dark matter as a major component of the universe",
			"Studied the distribution of galaxies and their motions, contributing to cosmology",
			"Authored influential papers on galaxy clustering and dark matter",
			"Mentored numerous women in astronomy and advocated for gender equality in science",
		],
		nobel_prize: [],
		other_awards: [
			"National Medal of Science (1993)",
			"Gold Medal of the Royal Astronomical Society (1996)",
			"Bruce Medal (2003)",
			"Gruber Prize in Cosmology (2002)",
			"James Craig Watson Medal (2004)",
			"Henry Norris Russell Lectureship (1994)",
			"Honorary doctorates from numerous universities",
			"Vera Rubin Observatory (under construction in Chile) named in her honor",
			"Legacy honored through the Vera Rubin Early Career Award (American Astronomical Society)",
		],
	},

	// Werner Karl Heisenberg
	{
		id: 87,
		name: "Werner Karl Heisenberg",
		nationality: "German",
		category: "physicist",
		description:
			"Was a German physicist and philosopher who discovered a way to formulate quantum mechanics in terms of matrices",
		date_of_birth: "1901-12-05",
		date_of_death: "1976-02-01",
		discoveries: [
			"Formulated the uncertainty principle, a cornerstone of quantum mechanics",
			"Developed matrix mechanics, the first complete formulation of quantum mechanics",
			"Contributed to the development of quantum field theory",
			"Proposed the isospin concept in nuclear physics",
			"Worked on the theory of ferromagnetism and the neutron-proton model of the nucleus",
			"Played a key role in the Copenhagen interpretation of quantum mechanics",
			"Authored influential works like *The Physical Principles of the Quantum Theory*",
			"Contributed to the understanding of turbulence in fluid dynamics",
			"Developed the S-matrix theory in particle physics",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1932,
				study:
					"creation of quantum mechanics, particularly the uncertainty principle",
			},
		],
		other_awards: [
			"Max Planck Medal (1933)",
			"Matteucci Medal (1929)",
			"Pour le Mérite for Sciences and Arts (1957)",
			"Foreign Member of the Royal Society (London)",
			"Honorary doctorates from numerous universities",
			"Werner Heisenberg Medal (awarded by the Alexander von Humboldt Foundation)",
			"Legacy honored through the Heisenberg Prize (German Research Foundation)",
		],
	},

	// J. Willard Gibbs
	{
		id: 88,
		name: "J. Willard Gibbs",
		nationality: "American",
		category: "physicist",
		description:
			"American theoretical physicist and chemist, foundational to thermodynamics, statistical mechanics, and physical chemistry. His work laid the mathematical foundations for modern physics and chemistry.",
		date_of_birth: "1839-02-11",
		date_of_death: "1903-04-28",
		discoveries: [
			"Developed the Gibbs free energy concept, central to chemical thermodynamics",
			"Formulated the phase rule, explaining the equilibrium of heterogeneous systems",
			"Pioneered vector calculus and its application to physics",
			"Introduced the concept of chemical potential",
			"Developed statistical mechanics, linking microscopic and macroscopic physics",
			"Authored *On the Equilibrium of Heterogeneous Substances*, a cornerstone of physical chemistry",
			"Contributed to the Gibbs paradox in thermodynamics",
			"Developed the Gibbs-Helmholtz equation, relating enthalpy and free energy",
			"Introduced the Gibbs phenomenon in Fourier analysis",
			"Laid the groundwork for modern chemical thermodynamics and physical chemistry",
		],
		nobel_prize: null,
		other_awards: [
			"Rumford Prize (1880)",
			"Foreign Member of the Royal Society (London)",
			"Gibbs free energy and Gibbs phase rule named in his honor",
			"Gibbs Lecturer (American Mathematical Society)",
			"Legacy honored through the Willard Gibbs Award (American Chemical Society)",
			"Considered one of the greatest theoretical scientists in American history",
		],
	},

	// William Gilbert
	{
		id: 89,
		name: "William Gilbert",
		nationality: "English",
		category: "physicist",
		description:
			"English physician, physicist, and natural philosopher, known as the father of electricity and magnetism. His pioneering work laid the foundation for the study of electromagnetism.",
		date_of_birth: "1544-05-24",
		date_of_death: "1603-11-30",
		discoveries: [
			"First systematic study of magnetism, published in *De Magnete* (1600)",
			"Introduced the concept of the Earth as a giant magnet, explaining compass behavior",
			"Distinguished between magnetic and static electric forces",
			"Coined the term 'electricus' (from Greek 'elektron', meaning amber), leading to the modern term 'electricity'",
			"Discovered that many substances could be electrified by friction",
			"Proposed that electricity and magnetism were separate phenomena",
			"Pioneered experimental methods in physics, emphasizing observation and experimentation",
			"Authored *De Magnete*, one of the first major scientific works based on experimental evidence",
		],
		nobel_prize: null,
		other_awards: [
			"Considered the father of electricity and magnetism",
			"Gilbert (unit of magnetomotive force) named in his honor",
			"Recognized as a pioneer of the scientific method",
			"Legacy honored through the Gilbert Medal (awarded by the Royal Society of Chemistry)",
			"His work influenced later scientists like Galileo and Kepler",
		],
	},

	// Wolfgang Pauli
	{
		id: 90,
		name: "Wolfgang Pauli",
		nationality: "Austrian",
		category: "physicist",
		description:
			"Austrian theoretical physicist, one of the pioneers of quantum mechanics. Best known for the Pauli exclusion principle and his work on spin theory",
		date_of_birth: "1900-04-25",
		date_of_death: "1958-12-15",
		discoveries: [
			"Pauli exclusion principle (fundamental to quantum mechanics and atomic structure)",
			"Predicted the existence of the neutrino to explain beta decay",
			"Formulated the Pauli matrices, foundational to quantum spin theory",
			"Introduced the concept of spin and the spin-statistics theorem",
			"Contributed to the development of quantum field theory",
			"Worked on the CPT theorem (charge, parity, and time reversal symmetry)",
			"Collaborated with Niels Bohr and Werner Heisenberg on quantum theory",
			"Critiqued and refined early quantum mechanics, including the Bohr-Sommerfeld model",
			"Authored influential papers on quantum electrodynamics (QED) and particle physics",
		],
		nobel_prize: [
			{
				category: "Physics",
				year: 1945,
				study: "discovery of the Pauli exclusion principle",
			},
		],
		other_awards: [
			"Matteucci Medal (1956)",
			"Max Planck Medal (1958)",
			"Lorentz Medal (1931)",
			"Franklin Medal (1952)",
			"Foreign Member of the Royal Society (London)",
			"Honorary doctorates from numerous universities",
			"Wolfgang Pauli Institute (Vienna) named in his honor",
		],
	},

	// Herman Von Helmholtz
	{
		id: 91,
		name: "Herman Von Helmholtz",
		nationality: "German",
		category: "physicist",
		description:
			"Was a German physicist and philosopher. Best known for his statement of the law of conservation of energy",
		date_of_birth: "1821-08-31",
		date_of_death: "1894-09-08",
		discoveries: [
			"Formulated the law of conservation of energy (First Law of Thermodynamics)",
			"Pioneered the study of nerve impulses and the speed of neural transmission",
			"Developed the theory of color vision (Young-Helmholtz trichromatic theory)",
			"Invented the ophthalmoscope, revolutionizing eye medicine",
			"Studied acoustics and the physics of sound, including the Helmholtz resonator",
			"Advanced the understanding of fluid dynamics and vortex motion",
			"Contributed to the principle of least action in mechanics",
			"Investigated the perception of sound and music, laying groundwork for psychoacoustics",
			"Authored seminal works like *On the Conservation of Force* and *Handbook of Physiological Optics*",
		],
		nobel_prize: null,
		other_awards: [
			"Copley Medal (1873)",
			"Pour le Mérite for Sciences and Arts (1873)",
			"Foreign Member of the Royal Society (London)",
			"Helmholtz Medal (established in his honor by the German Physical Society)",
			"Honorary doctorates from numerous universities",
			"Helmholtz Association of German Research Centres named in his honor",
			"Helmholtz-Zentrum Berlin (research institute) named in his honor",
		],
	},

	// Joseph Black
	{
		id: 92,
		name: "Joseph Black",
		nationality: "British",
		category: "physicist",
		description:
			"Was a british chemist and physicist best known for the rediscoveries of fixed air (carbon dioxide).",
		date_of_birth: "1728-04-16",
		date_of_death: "1799-12-06",
		discoveries: [
			"Discovered carbon dioxide (fixed air) and its properties",
			"Introduced the concept of latent heat, explaining phase changes in matter",
			"Developed the theory of specific heat, advancing calorimetry",
			"Pioneered quantitative methods in chemistry, laying groundwork for modern chemical analysis",
			"Demonstrated that carbon dioxide is produced by respiration and combustion",
			"Discovered magnesium and its compounds",
			"Studied the properties of alkalis and acids, contributing to the understanding of chemical reactions",
			"Influenced James Watt's improvements to the steam engine through his work on heat",
		],
		nobel_prize: null,
		other_awards: null,
	},
];

scientistSchema.parse(scientistsData);
