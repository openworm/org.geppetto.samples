Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q", "example1.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q"]}]);

Simulation.startWatch();

G.addWidget(Widgets.PLOT);

var options = {yaxis:{min:-.1,max:0.1},xaxis:{min:0,max:130,show:false}};

Plot1.setOptions(options)

Plot1.setName("Hodgkin-Huxley Spiking Neuron");

Plot1.setPosition(194,140);

Simulation.start();

Plot1.plotData(hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q);

Plot1.plotData(hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q);


