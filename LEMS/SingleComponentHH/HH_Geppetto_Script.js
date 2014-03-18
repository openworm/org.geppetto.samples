Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].v", "example1.hhpop[0].spiking"]}]);

Simulation.startWatch();

G.addWidget(Widgets.PLOT);

var options = {yaxis:{min:-.1,max:0.1},xaxis:{min:0,max:340,show:false}};

Plot1.setOptions(options)

Plot1.setName("Hodgkin-Huxley Spiking Neuron");

Plot1.setPosition(194,140);

Simulation.start();

Plot1.plotState("hhpop[0].v");

Plot1.plotState("hhpop[0].spiking");


