Simulation.addWatchLists([{name:"hhvars",variablePaths:["hhcell.electrical.SimulationTree.a","hhcell.electrical.SimulationTree.b","hhcell.electrical.SimulationTree.c", "hhcell.electrical.SimulationTree.d"]}]);
Simulation.startWatch();
Simulation.start();
var go = true;
GEPPETTO.on(Events.Simulation_stopped, function(){if(go){G.addWidget(GEPPETTO.Widgets.PLOT);Plot1.setPosition(146,72);Plot1.setName("Neuron Simulator Data");Plot1.plotData(hhcell.electrical.SimulationTree.a);Plot1.plotData(hhcell.electrical.SimulationTree.b);Plot1.plotData(hhcell.electrical.SimulationTree.c);Plot1.plotData(hhcell.electrical.SimulationTree.d);go=false}});