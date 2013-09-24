import numpy
import pylab as pl
from matplotlib import pyplot as plt
import time
 
class muscle_simulation():
 
    #sample script inspired from https://github.com/openworm/Smoothed-Particle-Hydrodynamics/blob/integrated_electrophysiology/src/main_sim.py
 
    def __init__(self,increment=1.0):
        #create pre- and post- synaptic sections
 
        self.increment = increment
        self.pre = h.Section()
        self.post = h.Section()
 
        for sec in self.pre,self.post:
            sec.insert('hh')
 
        #inject current in the pre-synaptic section
        self.stim = h.IClamp(0.5, sec=self.pre)
        self.stim.amp = 70.0
        self.stim.delay = 1500.0
        self.stim.dur = 500.0
 
        #create a synapse in the pre-synaptic section
        self.syn = h.ExpSyn(0.5,sec=self.post)
 
        #connect the pre-synaptic section to the synapse object:
        self.nc = h.NetCon(self.pre(0.5)._ref_v, self.syn)
        self.nc.weight[0] = 10.0
 
        #let's do some manaical  experimentation of the most evil kind:
        self.calcium_level = 0
        self.vector['calcium_level']=[self.calcium_level]
 
        self.voltage_plot, = plt.plot([],[])
        #plt.show()
 
    def addition_rate(self):
        opening = abs(post_v+65)
        opening = (opening**2/(opening**2+opening))
        current = opening*(1-self.state.calcium_level)/100
        return current
 
    def removal_rate(self):
        opening = abs(20-post_v)
        opening = (opening**2/(opening**2+opening))
        current = opening*(self.calcium_level)/100
        return -current
    
 
    def run(self,do_plot = True):
    #run and return resting potential
        t_now = h.t
        self.calcium_level += self.addition_rate()+self.removal_rate()
        self.vector['calcium_level'].append(self.calcium_level)
        self.muscle_contraction = self.calcium_level