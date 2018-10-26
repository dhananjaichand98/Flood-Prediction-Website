# Ready4Floods 
A website that uses machine learning models to deliver chances of floods based on users location queries

We have created a robust and responsive website that uses machine learning to predict the chances and severity of floods in a given region and give preventive measures to the user based on the result.
The machine learning model is neural network that uses keras library to predict the chances of flood based on various environmental and geographical factors including but not limited to precipitaion, location, and climatic conditions.
The model has been trained on a very detailed and comprehensive data set expanding over the years 1990 to 2015. The model has currently reached 95.6% accuracy on training dataset and we are going to deploy it on the website soon.

The website will feature a user GUI which takes an input of location and date, which is then processed by Google Maps API to return the accurate location in the Python Flask's backend. This location along with the date is sent to the Machine Learning Model which then returns the severity of the floods, and other parameters. Based on the return data from the Machine Learning Model, the user is displayed with the possibility of a flood and the precautions to take accordingly. If the date is from the past (before 2015), the Machine Learning Model directly returns the details of the actual event. 

