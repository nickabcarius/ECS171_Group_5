
import os
import pandas as pd
import matplotlib
matplotlib.use('agg')
import matplotlib.pyplot as plt
import numpy as np

def graph(day):
  s = pd.Series(np.arange(0,int(day),1))
  print("graphing", s)
  fig, ax = plt.subplots()
  s.plot.bar()
  
  for filename in os.listdir('static/'):
      if filename.startswith('plot'):
          os.remove('static/' + filename)
          
  plt.savefig('static/plot.png')
  print("graphed")
  return "plot.png"
  
  
  
  