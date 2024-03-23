from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

mongo_uri = "mongodb+srv://Thewmika:eduvista@courses.hkeu3rj.mongodb.net/?retryWrites=true&w=majority&appName=Courses"

client = MongoClient(mongo_uri)

db = client.get_database('eduvista')  

collection = db['Courses']  

#add thewmikas add user and etc



@app.route('/api/read', methods=['GET'])
def read_documents():
    documents = list(collection.find())  
    return jsonify({'documents': documents}), 200

@app.route('/test')
def index():
    return 'Welcome to the CRUD API!'

if __name__ == '__main__':
    app.run(debug=True, port=5005)   #change the port back to default

