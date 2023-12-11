// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import param from "./parameters.js"
import cfg from "./config.js"
import {agents} from "./model.js"
import {each,filter} from "lodash-es"
import colors from "./colormaps.js"

const L = param.L;
const N = param.N;
const X = d3.scaleLinear().domain([-L,L]);
const Y = d3.scaleLinear().domain([-L,L]);

const paint = colors[cfg.simulation.colormap];

var W, H, ctx, container_cfg;
var ctx;


// the initialization function, this is bundled in simulation.js with the initialization of
// the model and effectively executed in index.js when the whole explorable is loaded
// typically here all the elements in the SVG or CANVAS element are set.

const draw = ()=>{
	
	ctx.clearRect(0, 0, W, H);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, container_cfg.display_size.width, container_cfg.display_size.height);		
	
	const fixed = filter(agents,a=>a.state==0);
	const free = filter(agents,a=>a.state==1);
	const scale = container_cfg.display_size.width / (2*param.L);
	
	if(param.hide_particles.widget.value()==false) {
		each(free,a=>{
			ctx.beginPath();
	 		ctx.arc(X(a.x), Y(a.y), param.agentsize * scale, 0, 2 * Math.PI, false);
	 		ctx.fillStyle = cfg.simulation.color_free;
	 		ctx.fill();
		})
	}
	
	each(fixed,a=>{
		ctx.beginPath();
 		ctx.arc(X(a.x), Y(a.y), param.agentsize * scale, 0, 2 * Math.PI, false);
 		ctx.fillStyle = param.orlis_switch.widget.value() ? paint((a.t % cfg.simulation.color_period)/cfg.simulation.color_period) : cfg.simulation.color_fixed;
 		ctx.fill();
	})
}

const initialize = (display,config) => {

	container_cfg = config;
	W = container_cfg.display_size.width;
	H = container_cfg.display_size.height;
	
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');
	
		
	draw()
	
		
	// display.selectAll("#origin").remove();
	// display.selectAll(".node").remove();
	//
	// const origin = display.append("g").attr("id","origin")
	//
	// origin.selectAll(".node").data(agents).enter().append("circle")
	// 	.attr("class","node")
	// 	.attr("cx",d=>X(d.x))
	// 	.attr("cy",d=>Y(d.y))
	// 	.attr("r",X(param.agentsize/2))
	// 	.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
	//
};

// the go function, this is bundled in simulation.js with the go function of
// the model, typically this is the iteration function of the model that
// is run in the explorable. It contains the code that updates the parts of the display
// panel as a function of the model quantities.

const go = (display,config) => {
	draw()
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the visualization, if a parameter is changed,
// e.g. a radio button is pressed, when the system is not running, e.g. when it is paused.

const update = (display,config) => {
	draw()	
}


export {initialize,go,update}
