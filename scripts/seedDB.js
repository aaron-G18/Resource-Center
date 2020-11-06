const mongoose = require("mongoose");
const db = require("../models");

// WARNING! Deletes everything from the Users and Resources collections then adds these seeds.
// Unsure why script doesn't end....

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/resourceCenter"
);

const userSeed = [
  {
    username: "user",
    email: "user@email.com",
    password: "$2b$10$Bf75jH6DJPAqu.1QBSQoIeLleYTd06zwxe5YHcWPVz33zI1FJhr32", // hashed password
    role: "Admin",
  },
];

const resourceSeed = [
  // Human Resources

  {
    title: "Trinet",

    category: "Human Resources",
    link: "https://www.trinet.com/",
    description: "Log in for paycheck, insurance info....",
  },

  {
    title: "Company LinkedIn",
    category: "Human Resources",
    link: "https://www.linkedin.com/company/pg-paper-company-ltd/",
    description: "Connect with your coworkers on LinkedIn!",
  },

  {
    title: "Company Website",
    category: "Human Resources",
    link: "https://www.pgpaper.com/",
    description: "Log in for paycheck, insurance info....",
  },

  {
    title: "Complaint or Concern?",
    category: "Human Resources",
    link: "http://www.complaint.com/",
    description:
      "Please email mscott@pgpaper.com with any questions or concerns",
  },

  // Common Programs

  {
    title: "Microsoft 365",
    category: "Common Programs",
    link: "https://www.microsoft.com/en-us/microsoft-365",
    description: "Make sure your account is set up here.",
  },

  {
    title: "Oracle Netsuite",
    category: "Common Programs",
    link: "https://nlcorp.extforms.netsuite.com/",
    description:
      "Warehouse tracking program. Make sure your account is set up here.",
  },

  // Shipping & Receiving

  {
    title: "Fedex",
    category: "Shipping and Receiving",
    link: "https://www.fedex.com/apps/myprofile/deliverymanager/",
    description:
      "Our account number is 11111111. Create a login and link to company profile.",
  },

  {
    title: "Point Purchasing",
    category: "Shipping and Receiving",
    link: "https://www.pointpurchasing.com/",
    description:
      "Can order through this site. Make sure to log all items received in this site.",
  },

  // Research

  {
    title: "Britannica Papermaking",
    category: "Research",
    link: "https://www.britannica.com/technology/papermaking/Fibre-sources",
    description: "How paper is made.",
  },

  {
    title: "EPA Industry Profile",
    category: "Research",
    link:
      "https://www.epa.gov/ghgreporting/ghgrp-pulp-and-paper-sector-industrial-profile",
    description: "Paper industry profile.",
  },

  {
    title: "EPA Paper Pollutants",
    category: "Research",
    link:
      "https://cfpub.epa.gov/si/si_public_record_report.cfm?Lab=ORD&TIMSType=&count=10000&dirEntryId=35610&searchAll=&showCriteria=2&simpleSearch=0&startIndex=70001",
    description: "EPA reports paper pollution. Issue we want resolved.",
  },

  {
    title: "Top Paper Consumption/Producer",
    category: "Research",
    link:
      "https://globaledge.msu.edu/blog/post/55571/the-worldwide-paper-industry#:~:text=Overall%2C%20China%20leads%20all%20countries,with%20221%20kilograms%20per%20capita.",
    description:
      "Global Edge article reporting China as top consumer and producer of paper.",
  },

  // Lunch Options

  {
    title: "Ikes",
    category: "Food",
    link: "https://www.grubhub.com/food/ikes_love__sandwiches",
    description: "They deliver super fast!",
  },

  {
    title: "Food Trucks out Front",
    category: "Food",
    link: "https://www.mvblfeast.com/weekly-markets",
    description:
      "Tuesdays and Thursdays 11am-1:30pm. Exit front, turn right and walk one block.",
  },
];

const taskSeed = [
  {
    title: "task1",
  },
  {
    title: "task2",
  },
  {
    title: "task3",
  },
];

// ADD THE SEEDS

db.Resource.remove({})
  .exec() // remove all Resource docs
  .then(() =>
    db.Resource.collection
      .insertMany(resourceSeed) // add Resource seeds
      .then((dbRsc) => {
        console.log(dbRsc.result.n + " resource records inserted!");
        process.exit(0);
      })
  )

  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
