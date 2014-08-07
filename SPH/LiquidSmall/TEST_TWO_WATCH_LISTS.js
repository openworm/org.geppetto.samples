Simulation.addWatchLists([{name:"sphvars",variablePaths:["sample.fluid.particle[1].position.z","sample.fluid.particle[1].position.y", "sample.fluid.particle[1].position.x"]}]);

Simulation.startWatch();

G.addWidget(Widgets.PLOT);
 
var options = {yaxis:{min:0,max:15},xaxis:{min:0,max:300,show:false}};

Plot1.setOptions(options)

Plot1.setPosition(194,140);

Plot1.setName("Particle 1 coordinates")

Simulation.start();

Plot1.plotData("sample.fluid.particle[1].position.x");
Plot1.plotData("sample.fluid.particle[1].position.y");

Simulation.addWatchLists([{name:"sphvars2",variablePaths:["sample.fluid.particle[2].position.x"]}]);

Plot1.plotData("sample.fluid.particle[2].position.x");
