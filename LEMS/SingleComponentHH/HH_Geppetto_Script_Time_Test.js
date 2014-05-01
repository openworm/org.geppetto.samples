Simulation.addWatchLists([{name:"hhvars",variablePaths:["hhcell.electrical.hhpop[0].v", "hhcell.electrical.hhpop[0].spiking","hhcell.electrical.hhpop[0].bioPhys1.membraneProperties.naChans.gDensity","hhcell.electrical.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q", "hhcell.electrical.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q","hhcell.electrical.hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q"]}]);
Simulation.startWatch();
Simulation.start();


//Adding Plot 1

G.addWidget(Widgets.PLOT);

Plot1.setName("Hodgkin-Huxley Spiking Neuron");

options = {yaxis:{min:-.1,max:0.1},xaxis:{min:0,max:400,show:false}};

Plot1.setOptions(options);
Plot1.setPosition(113, 90);
Plot1.setSize(230,445)
Plot1.plotData("hhcell.electrical.hhpop[0].v");
Plot1.plotData("hhcell.electrical.hhpop[0].spiking");

G.wait(100);

Simulation.addWatchLists([{name:"hhvars",variablePaths:["hhcell.electrical.hhpop[2].v", "hhcell.electrical.hhpop[2].spiking"]}]);

Plot1.plotData("hhcell.electrical.hhpop[2].v");
