// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each,range,map,mean,filter} from "lodash-es"
import {dist} from "./utils"
import {go as mulch} from "./controls.js"

const L = param.L;
const N = param.N;
const dt = param.dt;
const o = {x:0,y:0};
const ddt = Math.sqrt(dt);

// typically objects needed for the explorable
// are defined here

var agents = [];

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const spawn = () => {
	const theta = Math.random() * 2 * Math.PI;
	agents.push({
			x:  L * Math.cos(theta), 
			y:  L * Math.sin(theta),
			state: 1,
			polarity: Math.random()
	})
}

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;

	// make agents

	agents = range(N).map(function(d,i){
		var theta = Math.random() * 2 * Math.PI;
		return {
				x: 2*L*(Math.random()-0.5), 
				y: 2*L*(Math.random()-0.5),
				state: 1,
				polarity: Math.random()
		}
	})
	agents.push({x: 0, y: 0 ,state: 0,t:0});
	
};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {
	
	param.tick++;
	
	const V = param.speed.widget.value();
	const gamma = param.attraction.widget.value();
	const sigma = param.wiggle.widget.value();
	const delta = param.twist.widget.value();
	
	const free = filter(agents,a=>a.state==1)
	const fixed = filter(agents,a=>a.state==0)
	
	each(free,a=>{
		const P = a.polarity < param.twist_mix.widget.value() ? 1 : -1;	
		const R = dist(a,o);
		let dx =  V * dt * ( (- gamma * a.x + P * delta * a.y) / R ) + sigma * (Math.random()-0.5) * ddt * Math.sqrt(V);
		let dy =  V * dt * ( (- gamma * a.y - P * delta * a.x) / R ) + sigma * (Math.random()-0.5) * ddt * Math.sqrt(V);
		let x_new = (a.x + dx);
		let y_new = (a.y + dy);
		if (x_new < - L || x_new > L) {dx *= -1 };
		if (y_new < - L || y_new > L) {dy *= -1 };
		a.x += dx;
		a.y += dy;
	})
	
	each(free,n=>{
		const neighbors = filter(fixed,m=>{
			return dist(n,m)<2*param.agentsize*0.9;
		})
		if(neighbors.length>0){
			n.state=0
			n.t = param.tick;
			spawn()
		}
		
	})

	
	return filter(fixed,n=>dist(n,o)>(L-3)).length>0

	
	
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	
	//each(agents,x => {x.active = x.index < param.number_of_particles.widget.value() ? true : false})

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {agents,initialize,go,update}
