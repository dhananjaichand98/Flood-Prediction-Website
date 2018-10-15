# -*- coding: utf-8 -*-
"""
Created on Sun Oct 14 12:56:55 2018

@author: techbusters
"""

#Generating HTML from within Python is not fun, and actually pretty cumbersome because you have to do the
#HTML escaping on your own to keep the application secure. Because of that Flask configures the Jinja2 template engine 
#for you automatically.
#requests are objects that flask handles (get set post, etc)
from flask import Flask, render_template,request
#scientific computing library for saving, reading, and resizing images
from scipy.misc import imsave, imread, imresize
#for matrix math
import numpy as np
#for importing our keras model
import keras.models
#for regular expressions, saves time dealing with string data
import re
import pandas as pd
#system level operations (like loading files)
import sys 
#for reading operating system data
import os
#tell our app where our saved model is
sys.path.append(os.path.abspath("./model"))
from load import * 
#initalize our flask app
app = Flask(__name__)
#global vars for easy reusability
global model, graph
#initialize these variables
model, graph = init()

from sklearn.preprocessing import LabelEncoder, OneHotEncoder

"""
#decoding an image from base64 into raw representation
def convertImage(imgData1):
	imgstr = re.search(r'base64,(.*)',imgData1).group(1)
	#print(imgstr)
	with open('output.png','wb') as output:
		output.write(imgstr.decode('base64'))
	
"""

@app.route('/')
def index():
    
    print("running index")
	
    #initModel()
	#render out pre-built HTML file right on the index page
	
    return render_template("./index.html")

@app.route('/predict/',methods=['GET','POST'])
def predict():
	
    print("running predict")
    
    #whenever the predict method is called, we're going
	#to input the user drawn character as an image into the model
	#perform inference, and return the classification
	#get the raw data format of the image
	
    data = request.get_data()
    
    #print ("data : ",data)
	
    #encode it into a suitable format
	#convertImage(imgData)
    
    """
	
    print "debug"
	#read the image into memory
	x = imread('output.png',mode='L')
	#compute a bit-wise inversion so black becomes white and vice versa
	x = np.invert(x)
	#make it the right size
	x = imresize(x,(28,28))
	#imshow(x)
	#convert to a 4D tensor to feed into our model
	x = x.reshape(1,28,28,1)
	print "debug2"
    """
    
    x = data
    print("type of data is : ",type(x))
    print("data is : ",x)
    print('state',request.form['state'] , "  type  ",type(request.form['state']) )
    print('precipitation',request.form['precipitation'])
    print('month',request.form['month'])
    keys = request.args
    print("keys  : ",keys," type : " , type(keys))
    #in our computation graph
	
    state = request.form['state']
    prec = float(request.form['precipitation'])
    month = request.form['month']
    terrain = ""
    if(month == 'Jan' or month == 'Feb'):
        month = 'Jan-Feb'
    else if(month == 'Mar' or month == 'Apr' or month == 'May')
 	month = 'Mar-May'
    else if(month == 'June' or month == 'Jul' or month == 'Aug' or month == 'Sep')
 	month = 'Jun-Sep'
    else if(month == 'Oct' or month == 'Nov' or month == 'Dec')
 	month = 'Oct-Dec'
    if(state == 'GANGETIC WEST BENGAL'):
        terrain = 'Coastal-plateau'
    else if(state == 'ANDAMAN & NICOBAR ISLANDS'):
        terrain = 'Island'
    else if(state == 'ARUNACHAL PRADESH'):
        terrain = 'Hilly'
    else if(state == 'ASSAM & MEGHALAYA'):
        terrain = 'Hilly'
    else if(state == 'BIHAR'):
        terrain = 'Plain-land'
    else if(state == 'CHATTISGARH'):
        terrain = 'Hilly'
    else if(state == 'COASTAL ANDHRA PRADESH'):
        terrain = 'Coastal'
    else if(state == 'COASTAL KARNATAKA'):
        terrain = 'Coastal'
    else if(state == 'EAST MADHYA PRADESH'):
        terrain = 'Everything'
    else if(state == 'EAST RAJASTHAN'):
        terrain = 'Desert'
    else if(state == 'EAST UTTAR PRADESH'):
        terrain = 'Rugged'
    else if(state == 'GUJARAT REGION'):
        terrain = 'Desert/marsh'
   else if(state == 'HARYANA DELHI & CHANDIGARH'):
        terrain = 'Plain-land'
   else if(state == 'HIMACHAL PRADESH'):
        terrain = 'Hilly'
   else if(state == 'JAMMU & KASHMIR'):
        terrain = 'Hilly'
   else if(state == 'JHARKHAND'):
        terrain = 'Forest'
   else if(state == 'KERALA'):
        terrain = 'Coastal'
   else if(state == 'KONKAN & GOA'):
        terrain = 'Hilly/coastal'
   else if(state == 'LAKSHWADEEP'):
        terrain = 'Island'
   else if(state == 'MADHYA MAHARASHTRA'):
        terrain = 'Plain-land'
   else if(state == 'MATATHWADA'):
        terrain = 'Barren'
   else if(state == 'NAGA MANI MIZO TRIPURA'):
        terrain = 'Hilly'
   else if(state == 'NORTH INTERIOR KARNATAKA'):
        terrain = 'Coastal'
   else if(state == 'ORISSA'):
        terrain = 'Coastal'
   else if(state == 'PUNJAB'):
        terrain = 'Plain-land'
   else if(state == 'RAYALSEEMA'):
        terrain = 'Plain-land'
   else if(state == 'SAURASHTRA & KUTCH'):
        terrain = 'Hilly'
   else if(state == 'SOUTH INTERIOR KARNATAKA'):
        terrain = 'Coastal'
   else if(state == 'SUB HIMALAYAN WEST BENGAL & SIKKIM'):
        terrain = 'Hilly'
   else if(state == 'TAMIL NADU'):
        terrain = 'Hilly/coastal'
   else if(state == 'TELANGANA'):
        terrain = 'Hilly/plain'
   else if(state == 'UTTARAKHAND'):
        terrain = 'Hilly'
   else if(state == 'VIDARBHA'):
        terrain = 'Plain-land'
   else if(state == 'WEST MADHYA PRADESH'):
        terrain = 'Plain-land'
   else if(state == 'WEST RAJASTHAN'):
        terrain = 'Desert'
   else if(state == 'WEST UTTAR PRADESH'):
        terrain = 'Hilly'
    #subdivision,quater,precipitation,terrain
    
    x = np.array([state,month,prec,terrain]);
    x = np.reshape(x,(-1,4))
    
    print("x before : ",x)
    
    labelencoder_X = LabelEncoder()
    
    
    
    dataset = pd.read_csv('updated.csv')
    dataset = dataset[ dataset['YEAR']>1980 ]
    dataset = dataset.dropna()
    #without climate
    X = dataset.iloc[:,[0,3,4,6]].values
    y = dataset.iloc[:,5].values
    
    X[:, 0] = labelencoder_X.fit_transform(X[:, 0])
    x[:, 0] = labelencoder_X.transform(x[:, 0])
    X[:, 1] = labelencoder_X.fit_transform(X[:, 1])
    x[:, 1] = labelencoder_X.transform(x[:, 1])
    X[:, 3] = labelencoder_X.fit_transform(X[:, 3])
    x[:, 3] = labelencoder_X.transform(x[:, 3])
    onehotencoder = OneHotEncoder(categorical_features = [0,1,3])
    X = onehotencoder.fit_transform(X).toarray()
    x = onehotencoder.transform(x).toarray()
    X = X[:,1:]
    x = x[:,1:]
    labelencoder_y = LabelEncoder()
    y = labelencoder_y.fit_transform(y)
    
    print("x after label encoding : ",x," size : ",x.size)
    
    from sklearn.cross_validation import train_test_split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2,random_state = 0)
    onehotencoder = OneHotEncoder(categorical_features = [0])
    y_train = np.reshape(y_train,(-1,1))
    y_train = onehotencoder.fit_transform(y_train).toarray()
    
    from sklearn.preprocessing import StandardScaler
    sc_X = StandardScaler()
    X_train = sc_X.fit_transform(X_train)
    X_test = sc_X.transform(X_test)
    x = sc_X.transform(x)
    
    
    print(x," type : ",type(x) )
    
    with graph.as_default():
		#perform the prediction
		
        print("model : ",model)
        
        out = model.predict(x)
		
        print("result of ml prediction : ",out)
		
        print(np.argmax(out,axis=1))
		
        #print "debug3"
		
        #convert the response to a string
		
        response = np.array_str(np.argmax(out,axis=1))
		
        return response	
	
print("starting")

if __name__ == "__main__":
    
    print("running main")
	
    #decide what port to run the app in
	
    """
    port = int(os.environ.get('PORT', 5000))
	
    #run the app locally on the givn port
	
    app.run(host='0.0.0.0', port=port)
    """
    
    app.run(port=8081)
	
    #optional if we want to run in debugging mode
	#app.run(debug=True)
