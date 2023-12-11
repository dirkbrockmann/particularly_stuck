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
			default:0.8
		},
		wiggle: {
			range:[0,1],
			default:0.8
		},
		attraction:{
			range : [0,0.5],
			default : 0.1
		},
		twist:{
			range : [0,0.5],
			default : 0.00
		},
		twist_mix:{
			range : [0,1],
			default : 0
		},
		hide_particles: {
			default: false
		},
		orlis_switch: {
			default: false
		}
}

