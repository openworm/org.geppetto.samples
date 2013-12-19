Simulation.addWatchLists([{name:"test_dummy",variablePaths:["example1.hhpop[0].v", "example1.hhpop[0].spiking"]}]);

Simulation.start();

Simulation.startWatch();

G.addWidget(Widgets.PLOT);

var options = {yaxis:{min:-.075,max:0.05},xaxis:{min:0,max:640,show:false}};

Plot1.setOptions(options)

G.wait(Plot1.plotData(v),500);

Plot1.plotData(spiking);

Plot1.setPosition(600,200);

Plot1.setSize(250, 350);