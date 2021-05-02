import os
from flask import Flask, request, render_template, jsonify



####TRYING TO GET VALUE FROM SLIDER

app = Flask(__name__, static_folder='docs', template_folder='docs')

@app.route("/get_day", methods=["POST"])
def get_day():
    day_slider = request.form["day_slider"]
    return day_slider


if __name__ == '__main__':
    app.run()


  
# import pandas
# # df = pandas.read_csv("https://storage.googleapis.com/covid19-open-data/v2/latest/main.csv")

# df = pandas.read_csv(".\covid_us.csv")
# df.drop(labels = "Unnamed: 0", axis = 1, inplace = True)



# print(df.head)
# print(list(df.columns))
