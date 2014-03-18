Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q", "example1.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q"]}]);
Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q"]}]);

Simulation.startWatch();

G.addWidget(Widgets.PLOT);

var options = {yaxis:{min:0,max:1},xaxis:{min:0,max:100,show:false}};

Plot1.setOptions(options)

Plot1.setName("Gating variables");

Plot1.setPosition(710,90);

Plot1.setSize(285,352)

Simulation.start();

Plot1.plotState("hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q");

Plot1.plotState("hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q");

Plot1.plotState("hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q");

//G.showConsole(true);

//G.wait(1000);

G.addWidget(Widgets.PLOT);

Plot2.setPosition(113, 336);

Plot2.setSize(200,352)

Plot1.setName("Gating variables");

Plot2.setName("Conductance density");

Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].bioPhys1.membraneProperties.naChans.gDensity"]}]);

options = {yaxis:{min:0,max:250},xaxis:{min:0,max:400,show:false}};

Plot2.setOptions(options);

Plot2.plotState("hhpop[0].bioPhys1.membraneProperties.naChans.gDensity");

//G.wait(1000);

G.addWidget(Widgets.PLOT);

Plot3.setName("Hodgkin-Huxley Spiking Neuron");

Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].v", "example1.hhpop[0].spiking"]}]);

options = {yaxis:{min:-.1,max:0.1},xaxis:{min:0,max:160,show:false}};

Plot4.setOptions(options);

Plot3.plotState("hhpop[0].v");

Plot3.plotState("hhpop[0].spiking");

Plot3.setPosition(113, 90);

Plot3.setSize(230,352)
