# This script uses the utilities at https://github.com/NeuroML/NeuroMLToPOV-Ray

python ~/NeuroMLToPOV-Ray/NeuroML2POVRay.py  -split  -scalex 6 -scalez 6 -background "<0,0,0,0.55>"  Pharyngeal.nml1
python ~/NeuroMLToPOV-Ray/ReadSim.py Pharyngeal -maxV -60 -minV -65 -skip 50  -maxTime 200 -rainbow
chmod +x Pharyngeal_pov.sh
./Pharyngeal_pov.sh

