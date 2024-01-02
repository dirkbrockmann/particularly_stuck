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

const draw = ()=>{
	
	ctx.clearRect(0, 0, W, H);
	
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
	
};


const go = (display,config) => { draw() }
const update = (display,config) => { draw()	}

export {initialize,go,update}
