var app = angular.module("ngApp", ["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "../html/home.html"
        })
        .when("/about", {
            templateUrl : "../html/about.html",
        })
        .when("/projects", {
            templateUrl : "../html/projects.html"
        })
        .when("/contact", {
            templateUrl : "../html/contact.html"
        });
    });