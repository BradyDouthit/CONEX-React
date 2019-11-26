const router = require("express").Router(),
      mongo = require("../models/mongo"),
      canvas = require("../models/canvas"),
      config = require('../bin/config'),
      auth = require("../bin/auth"),
      assert = require('assert');

function requireAdmin(req, res, next) {
    if(req.session.admin) next();
    else res.redirect("/home");
}

router.get("/homepageEdit", (req, res) => {
    res.render("admin/homepageEdit", {
        title: `Edit Course Homepage`,
        heroku: config.herokuAppName,
    })
});

router.get("/navigation", (req, res) => {
    res.render("admin/navigation", {
        title: `Edit Navigation Links`,
        heroku: config.herokuAppName,
    });
});

router.get("/modules", (req, res) => {
    // res.send("This page has not yet been implemented.");
    res.render("admin/modules", {
        title: `Course Modules`,
        heroku: config.herokuAppName,
    });
});

router.get("/badges", (req, res) => {
    res.render("admin/badges", {
        title: `Course Badges`,
        heroku: config.herokuAppName,
    });
});

router.get("/badges/edit/:id", (req, res) => {
    res.render("admin/badgeEdit", {
        title: `Editing badge ${req.params.id}`,
        heroku: config.herokuAppName,
        id: req.params.id
    })
});

router.get("/dailyTasks", (req, res) => {
    res.send("This page has not yet been implemented.");
});

router.get("/luckyBonuses", (req, res) => {
    res.send("This page has not yet been implemented.");
});

router.get("/unifiedGradebook", (req, res) => {
    res.send("This page has not yet been implemented.");
});

router.post("/", (req, res) => {
    res.redirect("/admin");
});

router.get("/", (req, res) => {
    res.render("admin/index");
});

module.exports = {
    router,
    requireAdmin,
};
