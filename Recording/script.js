Simulation.addWatchLists([{name:"Recording",variablePaths:["purkinje.electrical.SimulationTree.P.neuron0.gi","purkinje.electrical.SimulationTree.P.neuron0.ge"]}]);
Simulation.startWatch();
Simulation.start();

G.addWidget(Widgets.POPUP);
Popup1.setName("Recording Simulation");
Popup1.setMessage("Testing recording values");
Popup1.setSize(172.80000019073486,394.80000019073486)
Popup1.setPosition(129,77);

G.addWidget(Widgets.PLOT);

Plot1.setName("Recording Simulation");

options = {yaxis:{min:-.1,max:0.1},xaxis:{min:0,max:400,show:false}};

Plot1.setOptions(options);
Plot1.setPosition(113, 90);
Plot1.setSize(230,445)
Plot1.plotData(purkinje.electrical.SimulationTree.P.neuron0.gi);
