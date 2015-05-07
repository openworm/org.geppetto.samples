hhcell.electrical.getSimulationTree();
Simulation.setWatchedVariables([hhcell.electrical.SimulationTree.hhpop[0].v, hhcell.electrical.SimulationTree.hhpop[0].spiking, hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.gDensity, hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q, hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q, hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q]);
Simulation.start();
G.addWidget(Widgets.PLOT);
G.addWidget(Widgets.PLOT);
G.addWidget(Widgets.PLOT);
G.addWidget(Widgets.PLOT);
G.addWidget(Widgets.POPUP);

Plot1.setName("Hodgkin-Huxley Spiking Neuron");
options = {yaxis:{min:-.1,max:0.1},xaxis:{min:0,max:400,show:false}};
Plot1.setOptions(options);
Plot1.setPosition(113, 90);
Plot1.setSize(230,445);
Plot1.plotData(hhcell.electrical.SimulationTree.hhpop[0].v);
Plot1.plotData(hhcell.electrical.SimulationTree.hhpop[0].spiking);

options = {yaxis:{min:0,max:250},xaxis:{min:0,max:400,show:false}};

Plot2.setPosition(113, 336);
Plot2.setSize(245,445)
Plot2.setName("Conductance Density");
Plot2.setOptions(options);
Plot2.plotData(hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.gDensity);

var options = {yaxis:{min:0,max:1},xaxis:{min:0,max:400,show:false}};

Plot3.setOptions(options)
Plot3.setName("Gating Variables");
Plot3.setPosition(710,90);
Plot3.setSize(285,465)
Plot3.plotData(hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q);
Plot3.plotData(hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q);
Plot3.plotData(hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q);

Plot3.setLegend(hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q,"Sodium h.q");
Plot3.setLegend(hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q,"Sodium m.q");
Plot3.setLegend(hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q,"Potassium n.q");

Popup1.setMessage("The Hodgkin-Huxley model (or conductance-based model) is a mathematical model that describes how action potentials in neurons are initiated and propagated. It is a set of nonlinear differential equations that approximates the electrical characteristics of excitable cells such as neurons.");
Popup1.setName("Description");
Popup1.setPosition(710,398);
Popup1.setSize(160,465)

Simulation.addBrightnessFunction(hhcell.electrical, hhcell.electrical.SimulationTree.hhpop[0].v, function(x){return (x+0.06)/0.06;});

G.incrementCameraZoom(-0.15);
