#!/usr/bin/env python
# -*- coding: utf-8 -*-

import data_analysis


import os
from flask import Flask, render_template, Response, request
from bs4 import BeautifulSoup

app = Flask(__name__)

# Get rid of flask caching
responce = Response()
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
responce.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
responce.headers["Pragma"] = "no-cache"
responce.headers["Expires"] = "0"



@app.route('/')
def homepage():
    return render_template('index.html')


@app.route('/graph', methods=['POST'])
def graph():
    if request.method == "POST":
        state = request.form.get('state')
        day = request.form.get("day_slider")
        graph_type = request.form.get("graph_type")


    return render_template('index_graph.html',  plot = data_analysis.graph(state, day, graph_type),
                           plot2 = data_analysis.graph2(state, graph_type), plot3 = data_analysis.graph3(state, graph_type))


@app.route('/raphael-min.js')
def raphael_min():
    return render_template('raphael-min.js')


@app.route('/us-map-svg.js')
def us_map_svg():
    return render_template('us-map-svg.js')


@app.route('/map.js')
def map():
    return render_template('map.js')


if __name__ == '__main__':
    app.run(debug=True)

