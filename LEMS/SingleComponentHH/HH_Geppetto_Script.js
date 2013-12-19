Simulation.addWatchLists([{name:"hhvars",variablePaths:["example1.hhpop[0].v", "example1.hhpop[0].spiking"]}]);

Simulation.startWatch();

G.addWidget(Widgets.PLOT);

var options = {yaxis:{min:-.1,max:0.1},xaxis:{min:0,max:640,show:false}};

Plot1.setOptions(options)

Plot1.setName("Hodgkin-Huxley Spiking Neuron");

Simulation.start();

setTimeout(function(){Plot1.plotData(v);}, 500);

setTimeout(function(){Plot1.plotData(spiking);}, 500);

Plot1.setPosition(800,100);
