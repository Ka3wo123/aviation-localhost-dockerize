db = db.getSiblingDB('aviationDb');

db.createCollection('users');

db.users.insertOne({name: "John"});