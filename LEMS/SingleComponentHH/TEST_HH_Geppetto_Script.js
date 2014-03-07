Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q", "example1.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q"]}]);
Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q"]}]);

Simulation.startWatch();

G.addWidget(Widgets.PLOT);

var options = {yaxis:{min:0,max:1},xaxis:{min:0,max:100,show:false}};

Plot1.setOptions(options)

Plot1.setName("Gating variables");

Plot1.setPosition(114,169);

Simulation.start();

Plot1.plotData(hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q);

Plot1.plotData(hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q);

Plot1.plotData(hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q);

G.showConsole(true);

G.wait(1000);

G.addWidget(Widgets.PLOT);

Plot2.setPosition(873, 102);

Plot1.setName("Gating variables");

Plot2.setName("Conductance density");

Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].bioPhys1.membraneProperties.naChans.gDensity"]}]);

options = {yaxis:{min:0,max:250},xaxis:{min:0,max:400,show:false}};

Plot2.setOptions(options);

Plot2.plotData(hhpop[0].bioPhys1.membraneProperties.naChans.gDensity);

G.wait(1000);

G.addWidget(Widgets.PLOT);

Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].debugVal", "example1.hhpop[0].spiking"]}]);

options = {yaxis:{min:-.1,max:1},xaxis:{min:0,max:340,show:false}};

Plot3.setOptions(options);

Plot3.setPosition(679, 401);

Plot3.plotData(hhpop[0].spiking);

Plot3.plotData(hhpop[0].debugVal);

Plot3.setName("Hodgkin-Huxley Spiking debug");

G.wait(1000);

G.addWidget(Widgets.PLOT);

Plot4.setName("Hodgkin-Huxley Spiking Neuron");

Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].v", "example1.hhpop[0].spiking"]}]);

options = {yaxis:{min:-.1,max:0.1},xaxis:{min:0,max:160,show:false}};

Plot4.setOptions(options);

Plot4.plotData(hhpop[0].v);

Plot4.plotData(hhpop[0].spiking);
