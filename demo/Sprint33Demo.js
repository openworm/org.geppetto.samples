Simulation.addWatchLists([{name:"sphvars",variablePaths:["sample.fluid.SimulationTree.particle[1].position.z","sample.fluid.SimulationTree.particle[1].position.y", "sample.fluid.SimulationTree.particle[1].position.x"]}]);

Simulation.startWatch();

G.addWidget(Widgets.PLOT);
 
var options = {yaxis:{min:0,max:15},xaxis:{min:0,max:300,show:false}};

Plot1.setOptions(options)

Plot1.setPosition(194,140);

Plot1.setName("Particle 1 coordinates")

Simulation.start();

Plot1.plotData(sample.fluid.SimulationTree.particle[1].position.x);
Plot1.plotData(sample.fluid.SimulationTree.particle[1].position.y);
Plot1.plotData(sample.fluid.SimulationTree.particle[1].position.z);

G.addWidget(Widgets.POPUP);
Popup1.setMessage("Plot widget can now reference variables directly instead of strings. " +
		"Hovering over label will give the full path of variable name");
Popup1.setName("Variables instead of Strings");
Popup1.setPosition(710,398);
Popup1.setSize(160,465)

G.wait(3000);

G.showConsole(true);
Popup1.setName("Selection");
Popup1.setMessage("Selection of entities is possible by using the command 'sample.select()'");
sample.select();
G.wait(2000);
Popup1.setMessage("Unselecting an entity 'sample.unselect()'");
sample.unselect();
G.wait(2000);
Popup1.setMessage("Aspects can also be selected 'sample.fluid.select()'");
sample.fluid.select();
G.wait(2000);
Popup1.setMessage("Aspects can also be selected 'sample.fluid.select()'");
sample.fluid.unselect();

