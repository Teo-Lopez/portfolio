import dice from './assets/dice.jpg'
import echodot from './assets/alexa.jpg'
import chronopomo from './assets/chronopomo.png'
import lab from './assets/lab.jpg'

const data = [
	{
		title: 'TellMaster',
		img: dice,
		url: 'https://tellmaster.herokuapp.com/',
		description:
			'Aplicación web desarrollada en React para crear y jugar historias interactivas. Crea un personaje, decide tú historia y sumergete en el mundo del rol.',
		techs: ['React', 'Node', 'Express', 'MongoDB', 'CKeditor', 'Hooks & Context']
	},

	{
		title: 'HeroHeart',
		img: lab,
		url: 'https://heroheart.herokuapp.com/',
		description:
			'Web de consulta de diagnosticos médicos realizada con HSB, Node.js y la api de priaid.',
		techs: ['HBS o handlebars', 'Node', 'Express', 'MongoDB', 'Axios']
	},
	{
		title: 'Nueva Aventura',
		img: echodot,
		url: '#',
		description: 'Skill de Alexa desarrollada durante 2 semanas.',
		techs: ['Amazon polly', 'Mongodb', 'Express', 'Amazon dev. console']
	},
	{
		title: 'Pomodoro Clock',
		img: chronopomo,
		url: 'https://chrono-pomo.herokuapp.com/',
		description: 'Web app for Pomodoro inspired time management.',
		techs: ['React hooks', 'Mongo', 'Styled components']
	}
]

export default data
