hhcell.electrical.getSimulationTree();
Simulation.setWatchedVariables([hhcell.electrical.hhpop[0].v,hhcell.electrical.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q]);
Simulation.startWatch();
Simulation.start();

G.addWidget(Widgets.POPUP);
Popup1.setName("Loading");
Popup1.setMessage("Waiting for Neuron Simulator results");
Popup1.setPosition(807,436)

var go = true;
GEPPETTO.on(Events.Simulation_stopped, function(){if(go){Popup1.destroy();G.addWidget(GEPPETTO.Widgets.PLOT);Plot1.setPosition(486,186);Plot1.setName("Neuron Simulator Data");Plot1.plotData(hhcell.electrical.SimulationTree.a);Plot1.plotData(hhcell.electrical.SimulationTree.b);Plot1.plotData(hhcell.electrical.SimulationTree.c);Plot1.plotData(hhcell.electrical.SimulationTree.d);go=false}});