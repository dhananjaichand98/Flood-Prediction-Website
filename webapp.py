# -*- coding: utf-8 -*-
"""
Created on Sun Oct 14 12:56:55 2018

@author: dcdev
"""

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
	
    data = request.get_data()
    
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
    elif(month == 'Mar' or month == 'Apr' or month == 'May'):
 	month = 'Mar-May'
    elif(month == 'June' or month == 'Jul' or month == 'Aug' or month == 'Sep'):
 	month = 'Jun-Sep'
    elif(month == 'Oct' or month == 'Nov' or month == 'Dec'):
 	month = 'Oct-Dec'
    elif(state == 'ANDAMAN & NICOBAR ISLANDS'):
        terrain = 'Island'
    elif(state == 'ARUNACHAL PRADESH'):
        terrain = 'Hilly'
    elif(state == 'ASSAM & MEGHALAYA'):
        terrain = 'Hilly'
    elif(state == 'BIHAR'):
        terrain = 'Plain-land'
    elif(state == 'CHATTISGARH'):
        terrain = 'Hilly'
    elif(state == 'COASTAL ANDHRA PRADESH'):
        terrain = 'Coastal'
    elif(state == 'COASTAL KARNATAKA'):
        terrain = 'Coastal'
    elif(state == 'EAST MADHYA PRADESH'):
        terrain = 'Everything'
    elif(state == 'EAST RAJASTHAN'):
        terrain = 'Desert'
    elif(state == 'EAST UTTAR PRADESH'):
        terrain = 'Rugged'
    elif(state == 'GUJARAT REGION'):
        terrain = 'Desert/marsh'
   elif(state == 'HARYANA DELHI & CHANDIGARH'):
        terrain = 'Plain-land'
   elif(state == 'HIMACHAL PRADESH'):
        terrain = 'Hilly'
   elif(state == 'JAMMU & KASHMIR'):
        terrain = 'Hilly'
   elif(state == 'JHARKHAND'):
        terrain = 'Forest'
   elif(state == 'KERALA'):
        terrain = 'Coastal'
   elif(state == 'KONKAN & GOA'):
        terrain = 'Hilly/coastal'
   elif(state == 'LAKSHWADEEP'):
        terrain = 'Island'
   elif(state == 'MADHYA MAHARASHTRA'):
        terrain = 'Plain-land'
   elif(state == 'MATATHWADA'):
        terrain = 'Barren'
   elif(state == 'NAGA MANI MIZO TRIPURA'):
        terrain = 'Hilly'
   elif(state == 'NORTH INTERIOR KARNATAKA'):
        terrain = 'Coastal'
   elif(state == 'ORISSA'):
        terrain = 'Coastal'
   elif(state == 'PUNJAB'):
        terrain = 'Plain-land'
   elif(state == 'RAYALSEEMA'):
        terrain = 'Plain-land'
   elif(state == 'SAURASHTRA & KUTCH'):
        terrain = 'Hilly'
   elif(state == 'SOUTH INTERIOR KARNATAKA'):
        terrain = 'Coastal'
   elif(state == 'SUB HIMALAYAN WEST BENGAL & SIKKIM'):
        terrain = 'Hilly'
   elif(state == 'TAMIL NADU'):
        terrain = 'Hilly/coastal'
   elif(state == 'TELANGANA'):
        terrain = 'Hilly/plain'
   elif(state == 'UTTARAKHAND'):
        terrain = 'Hilly'
   elif(state == 'VIDARBHA'):
        terrain = 'Plain-land'
   elif(state == 'WEST MADHYA PRADESH'):
        terrain = 'Plain-land'
   elif(state == 'WEST RAJASTHAN'):
        terrain = 'Desert'
   elif(state == 'WEST UTTAR PRADESH'):
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
		
        print("model : ",model)
        
        out = model.predict(x)
		
        print("result of ml prediction : ",out)
		
        print(np.argmax(out,axis=1))
		
		
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
