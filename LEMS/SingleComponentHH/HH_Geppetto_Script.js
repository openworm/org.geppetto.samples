Simulation.addWatchLists([{name:"hhvars",variablePaths:["hhcell.electrical.SimulationTree.a","hhcell.electrical.SimulationTree.b","hhcell.electrical.SimulationTree.c", "hhcell.electrical.SimulationTree.d"]}]);
Simulation.startWatch();
Simulation.start();


//Adding Plot 1

G.addWidget(Widgets.PLOT);

Plot1.setName("Hodgkin-Huxley Spiking Neuron");

options = {yaxis:{min:-.1,max:0.1},xaxis:{min:0,max:400,show:false},drawAll : true,};

Plot1.setOptions(options);
Plot1.setPosition(113, 90);
Plot1.setSize(230,445)
Plot1.plotData(hhcell.electrical.SimulationTree.a);

G.wait(100);

G.addWidget(Widgets.PLOT);

options = {yaxis:{min:0,max:250},xaxis:{min:0,max:400,show:false}, drawAll : true};

Plot2.setPosition(113, 336);
Plot2.setSize(245,445)
Plot2.setName("Conductance Density");
Plot2.setOptions(options);
Plot2.plotData(hhcell.electrical.SimulationTree.b);

//Adding Plot 3

G.wait(100); 

G.addWidget(Widgets.PLOT);

var options = {yaxis:{min:0,max:1},xaxis:{min:0,max:400,show:false}, drawAll : true};

Plot3.setOptions(options)
Plot3.setName("Gating Variables");
Plot3.setPosition(710,90);
Plot3.setSize(285,465)
Plot3.plotData(hhcell.electrical.SimulationTree.c);
Plot3.plotData(hhcell.electrical.SimulationTree.d);

G.addWidget(Widgets.POPUP);
Popup1.setMessage("The Hodgkin-Huxley model (or conductance-based model) is a mathematical model that describes how action potentials in neurons are initiated and propagated. It is a set of nonlinear differential equations that approximates the electrical characteristics of excitable cells such as neurons.");
Popup1.setName("Description");
Popup1.setPosition(710,398);
Popup1.setSize(160,465)

G.incrementCameraZoom(-0.15);
