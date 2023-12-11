// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		fontsize:20,
		slider_size: 400,
		slider_show: true,
		slider_gap : 1.5,
		slider_knob: 14,
		slider_girth:12,
		slider_anchor: {x:1,y:4},
		toggle_anchor: {x:1.5,y:11.5},
		toggle_gap:6,
		toggle_label_pos:"right",
		playbutton_size: 100,
		playbutton_anchor:{x:3,y:1.5},
		backbutton_anchor:{x:10,y:1.5},
		resetbutton_anchor:{x:8,y:1.5},
	},
	simulation: {
		delay:0,
		color_fixed:"darkred",
		color_free:"rgb(120,120,120)",
		colormap:"broc",
		color_period:500
	}
}