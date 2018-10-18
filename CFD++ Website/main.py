import requests
import urllib
from flask import Flask, redirect, url_for, render_template, request
from datetime import datetime
import datetime

app = Flask(__name__)
app.secret_key = 'my secret and not your secret'


@app.route("/")
def index():
    return render_template("index.html")


@app.route('/grantaccess', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        datetemp = datetime.datetime.strptime(request.form['date'], '%Y-%m-%d').strftime('%d/%m/%y')
        return redirect(url_for('jsonlocation', location=request.form['location'], date=datetemp))
    else:
        return redirect(url_for('index'))


# @app.route('/success')
# def success():
#     location = request.args.get('location')
#     date = request.args.get('date')
#     lat = request.args.get('latitude')
#     lon = request.args.get('longitude')
#     return 'Your location is %s (%s, %s) on %s' % (location, lat, lon, date)


@app.route('/location')
def jsonlocation():
    location = request.args.get('location')
    date = request.args.get('date')
    url = 'http://dev.virtualearth.net/REST/v1/Locations?'
    key = 'AmNf5Tdob5XL3Qm1EeSA5sQEdo6271GFyb1p7xMuS9Svj0VvvKKJv6i6dM573OeD'
    cr = 'IN'
    results = url + urllib.urlencode(({'CountryRegion': cr, 'locality': location, 'key': key}))
    print(results)
    response = requests.get(results)
    parser = response.json()
    auth = parser['statusDescription']
    print('Status: '+auth)
    if auth == 'OK':
        state = parser['resourceSets'][0]['resources'][0]['address']['adminDistrict']
        lat = parser['resourceSets'][0]['resources'][0]['point']['coordinates'][0]
        lon = parser['resourceSets'][0]['resources'][0]['point']['coordinates'][1]
        city = parser['resourceSets'][0]['resources'][0]['address']['locality']
        #print('State:' + state)
        #print(response.content)
        #return response.content
        return redirect(url_for('jsonweather', city=city, state=state, date=date, latitude=lat, longitude=lon))
    else:
        return 'Status: %s! Server issue! Please try again later!' % auth
    #return requests.get('http://dev.virtualearth.net/REST/v1/Locations?CountryRegion=IN&locality=New%20Delhi&key=AmNf5Tdob5XL3Qm1EeSA5sQEdo6271GFyb1p7xMuS9Svj0VvvKKJv6i6dM573OeD').content
    #https://www.youtube.com/watch?v=Badod-8GuVU&list=PLw02n0FEB3E2RDlD2cBULQjvXJ1K_jS1O&index=35


@app.route('/weather')
def jsonweather():
    city = request.args.get('city')
    state = request.args.get('state')
    date = request.args.get('date')
    lat = request.args.get('latitude')
    lon = request.args.get('longitude')
    url = 'https://api.openweathermap.org/data/2.5/forecast?'
    key = 'e31020243ddd05cc3d37ad5f4816190f'
    mode = 'json'
    count = 8
    results = url + urllib.urlencode(({'lat': lat, 'lon': lon, 'appid': key, 'mode': mode, 'cnt': count}))
    #results = 'https://api.openweathermap.org/data/2.5/forecast?q=reykjavik&cnt=8&appid=e31020243ddd05cc3d37ad5f4816190f'
    print(results)
    response = requests.get(results)
    parser = response.json()
    auth = parser['cod']
    totalprecipitation = 0.00
    #print(response.content)
    print('Status: '+auth)
    if auth == '200':
        for each in parser['list']:
            if 'rain' not in each:
                continue
            else:
                rain = each['rain']
                if '3h' in rain:
                    prec = rain['3h']
                    totalprecipitation += prec
    else:
        return 'Status: %s! Server issue! Please try again later!' % auth
    #city = parser['city']['name']
    return 'Precipitation in %s, %s on %s is %f mm! ' % (city, state, date, round(totalprecipitation, 2))


if __name__ == '__main__':
    app.run(debug=True)
