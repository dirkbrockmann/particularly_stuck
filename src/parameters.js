// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		N:300,
		dt:1,
		L:64,
		agentsize: 0.5,
	
		speed: {
			range:[0,1.4],
			default:0.8,
			label:"Geschwindigkeit"
		},
		wiggle: {
			range:[0,1],
			default:0.8,
			label:"Diffusion"
		},
		attraction:{
			range : [0,0.5],
			default : 0.1,
			label: "Anziehungskraft"
		},
		twist:{
			range : [0,0.5],
			default : 0.00,
			label: "Wirbelbewegung"
		},
		twist_mix:{
			range : [0,1],
			default : 0,
			label: "Richtungsgemisch"
		},
		hide_particles: {
			default: false,
			label: "Teilchen verstecken?"
		},
		orlis_switch: {
			default: false,
			label: "Bunt?"
		}
}

