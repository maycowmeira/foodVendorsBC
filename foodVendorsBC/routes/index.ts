///<reference path='../types/DefinitelyTyped/node/node.d.ts'/>

///<reference path='../types/DefinitelyTyped/express/express.d.ts'/> 

var express = require('express');
var router = express.Router();

interface UserInterface {
    getName(): string;
    getEmail(): string;
};

class User implements UserInterface {
    private name: string;
    private email: string;

    constructor(name1, email1) {
        this.name = name1;
        this.email = email1;
    }
    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

};

class Router {
    constructor() {
        /* GET home page. */
        router.get('/', function(req, res, next) {
            res.render('index', { title: 'Express' });
        });

        /* GET Hello World page. */
        router.get('/helloworld', function(req, res) {
            res.render('helloworld', { title: 'Hello, World!' });
        });

        /* GET Userlist page. */
        /* GET Userlist page. */
        /*router.get('/userlist', function(req, res) {
            var db = req.db;
            var collection = db.get('usercollection');
            collection.find({}, {}, function(e, docs) {
                res.render('userlist', {
                    "userlist": docs
                });
            });
        });
        */
        router.get('/foodvendors', function(req, res) {
            var db = req.db;
            var collection = db.get('foodVendors');
            collection.find({}, {}, function(e, docs) {
                res.render('foodvendors', {
                    "foodvendors": docs
                });
            });
        });

        router.get('/vendors', function(req, res) {
            var db = req.db;
            var vendorId = req.query.vendorID;
            var collection = db.get('foodVendors');
            collection.findOne({"_id" : vendorId}, function(e, docs) {
                res.render('vendors', {
                    "vendors": docs
                });
            });
        });

        /* GET New User page. */
        router.get('/newuser', function(req, res) {
            res.render('newuser', { title: 'Add New User' });
        });

        /* POST to force load data */
        router.get('/loaddata', function(req, res) {
            res.redirect("foodvendors");
            //Set our internal DB variable
    
        });

        /* POST to Add User Service */
        router.post('/adduser', function(req, res) {

            // Set our internal DB variable
            var db = req.db;

            // Get our form values. These rely on the "name" attributes
            var newUser = new User(req.body.username, req.body.useremail);

            // Set our collection
            var collection = db.get('usercollection');

            // Submit to the DB
            collection.insert({
                "username": newUser.getName(),
                "email": newUser.getEmail()
            }, function(err, doc) {
                if (err) {
                    // If it failed, return error
                    res.send("There was a problem adding the information to the database.");
                }
                else {
                    // And forward to success page
                    res.redirect("userlist");
                }
            });
        });

        module.exports = router;
    }

};

// instantiate 
var routerNew = new Router();