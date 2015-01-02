Simulation.addWatchLists([{name:"Recording",variablePaths:["purkinje.recordings.SimulationTree.P.neuron0.gi","purkinje.recordings.SimulationTree.P.neuron0.ge"]}]);
Simulation.startWatch();
Simulation.start();

G.addWidget(Widgets.POPUP);
Popup1.setName("Recording Simulation");
Popup1.setMessage("Testing recording values");
Popup1.setSize(172.80000019073486,394.80000019073486)
Popup1.setPosition(129,77)
G.addWidget(Widgets.VARIABLEVISUALISER);
VariableVisualizer1.setVariable(Entity.Aspect.SimulationTree.P.neuron0.gi);
VariableVisualizer1.setPosition(529,77);