//////////////////////////////////////////////////////////////////////////////////////////////////
// post several documents to the database collection using insertMany() function
//////////////////////////////////////////////////////////////////////////////////////////////////
const mongoose = require("mongoose");
const Dog_weight = require("./models/dogsSchema");
const dotenv = require("dotenv");

dotenv.config();

const URL = process.env.MONGO_URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log("Error in connecting to mongoDB");
    console.log(err);
  });

const postDogs = [
  {
    name: "American Staffordshire Terrier",
    maleWtKg: "25-30",
    maleWtLb: "55-65",
    femaleWtKg: "22-27",
    femaleWtLb: "48-59",
  },
  {
    name: "Australian Shepherd",
    maleWtKg: "25-29",
    maleWtLb: "50-65",
    femaleWtKg: "18-25",
    femaleWtLb: "40-55",
  },
  {
    name: "Australian Cattle Dog",
    maleWtKg: "25-28",
    maleWtLb: "33-62",
    femaleWtKg: "15-22",
    femaleWtLb: "33-49",
  },
  {
    name: "Basset Hound",
    maleWtKg: "23-29",
    maleWtLb: "50-65",
    femaleWtKg: "20-27",
    femaleWtLb: "45-60",
  },
  {
    name: "Beagle",
    maleWtKg: "13-16",
    maleWtLb: "28-35",
    femaleWtKg: "11-13",
    femaleWtLb: "24-28",
  },
  {
    name: "Border Collie",
    maleWtKg: "19-24",
    maleWtLb: "41-53",
    femaleWtKg: "18-22",
    femaleWtLb: "39-48",
  },
  {
    name: "Border Terrier",
    maleWtKg: "5.9-7.1",
    maleWtLb: "13-16",
    femaleWtKg: "5.1-6.4",
    femaleWtLb: "11-14",
  },
  {
    name: "Boston Terrier",
    maleWtKg: "6-11",
    maleWtLb: "15-25",
    femaleWtKg: "4.5-9",
    femaleWtLb: "10-20",
  },
  {
    name: "Boxer",
    maleWtKg: "30-32",
    maleWtLb: "66-70",
    femaleWtKg: "25-27",
    femaleWtLb: "56-60",
  },
  {
    name: "Bulldog- British",
    maleWtKg: "24-25",
    maleWtLb: "53-55",
    femaleWtKg: "22-23",
    femaleWtLb: "49-51",
  },
  {
    name: "Bulldog- French",
    maleWtKg: "12-15",
    maleWtLb: "26-33",
    femaleWtKg: "10-11",
    femaleWtLb: "22-24",
  },
  {
    name: "Bull mastiff",
    maleWtKg: "50-59",
    maleWtLb: 130,
    femaleWtKg: "41-50",
    femaleWtLb: "90-110",
  },
  {
    name: "Bull Terrier",
    maleWtKg: "23-32",
    maleWtLb: "50-70",
    femaleWtKg: "18-23",
    femaleWtLb: "39-50",
  },
  {
    name: "Cavalier King Charles Spaniel",
    maleWtKg: "5-9",
    maleWtLb: "11-20",
    femaleWtKg: "5-8",
    femaleWtLb: "11-17",
  },
  {
    name: "Chihuahua",
    maleWtKg: "1.5-3",
    maleWtLb: "3.3-6.6",
    femaleWtKg: "1.5-3",
    femaleWtLb: "3.3-6.5",
  },
  {
    name: "Cocker Spaniel",
    maleWtKg: "13-16",
    maleWtLb: "28-34",
    femaleWtKg: "12-15",
    femaleWtLb: "26-32",
  },
  {
    name: "Daschund-miniature",
    maleWtKg: "4-5",
    maleWtLb: "8.8-11",
    femaleWtKg: "4-5",
    femaleWtLb: "8.8-11",
  },
  {
    name: "Daschund-standard",
    maleWtKg: "7-14",
    maleWtLb: "16-32",
    femaleWtKg: "7-14",
    femaleWtLb: "16-32",
  },
  {
    name: "Doberman Pinscher",
    maleWtKg: "34-41",
    maleWtLb: "74-90",
    femaleWtKg: "29.5-36",
    femaleWtLb: "65-79",
  },
  {
    name: "English Springer Spaniel",
    maleWtKg: "20-25",
    maleWtLb: "45-55",
    femaleWtKg: "18-23",
    femaleWtLb: "40-50",
  },
  {
    name: "Fox Terrier (smooth)",
    maleWtKg: "7.25-8.25",
    maleWtLb: "15-18",
    femaleWtKg: "6.75-7.75",
    femaleWtLb: "14-17",
  },
  {
    name: "German Shepherd",
    maleWtKg: "34-38.5",
    maleWtLb: "74-84",
    femaleWtKg: "27-32",
    femaleWtLb: "59-70",
  },
  {
    name: "German Shorthaired Pointer",
    maleWtKg: "25-32",
    maleWtLb: "55-72",
    femaleWtKg: "20-27",
    femaleWtLb: "44-59",
  },
  {
    name: "Golden Retriever",
    maleWtKg: "31.7-36.3",
    maleWtLb: "70-80",
    femaleWtKg: "27.2-31.7",
    femaleWtLb: "59-70",
  },
  {
    name: "Great Dane",
    maleWtKg: "54-91",
    maleWtLb: "119-200",
    femaleWtKg: "45-59",
    femaleWtLb: "100-130",
  },
  {
    name: "Jack Russel Terrier",
    maleWtKg: "6-8",
    maleWtLb: "14-18",
    femaleWtKg: "5-7",
    femaleWtLb: "13-17",
  },
  {
    name: "Kelpie",
    maleWtKg: "20.5-25",
    maleWtLb: "45-55",
    femaleWtKg: "14-21",
    femaleWtLb: "30-46",
  },
  {
    name: "Labrador Retriever",
    maleWtKg: "29-36",
    maleWtLb: "65-80",
    femaleWtKg: "25-31",
    femaleWtLb: "55-70",
  },
  {
    name: "Lhasa Apso",
    maleWtKg: 7,
    maleWtLb: 15,
    femaleWtKg: "6-7",
    femaleWtLb: "13-15",
  },
  {
    name: "Maltese Terrier",
    maleWtKg: "2-4",
    maleWtLb: "4.4-8.8",
    femaleWtKg: "2-4",
    femaleWtLb: "4.4-8.8",
  },
  {
    name: "Newfoundland",
    maleWtKg: "64-69",
    maleWtLb: "141-152",
    femaleWtKg: "50-54",
    femaleWtLb: "110-119",
  },
  {
    name: "Norfolk Terrier",
    maleWtKg: "5-6",
    maleWtLb: "11-13",
    femaleWtKg: "5-6",
    femaleWtLb: "11-13",
  },
  {
    name: "Poodle- toy",
    maleWtKg: "3.5-5.5",
    maleWtLb: "7-12",
    femaleWtKg: "3.5-5.5",
    femaleWtLb: "7-12",
  },
  {
    name: "Poodle- miniature",
    maleWtKg: "7-8",
    maleWtLb: "15-17",
    femaleWtKg: "5.5-7",
    femaleWtLb: "12-15",
  },
  {
    name: "Poodle- standard",
    maleWtKg: "20-32",
    maleWtLb: "45-70",
    femaleWtKg: "20-27",
    femaleWtLb: "45-60",
  },
  {
    name: "Pug",
    maleWtKg: "6-9",
    maleWtLb: "13-19",
    femaleWtKg: "6-8",
    femaleWtLb: "13-17",
  },
  {
    name: "Rottweiler",
    maleWtKg: "45.5-54.5",
    maleWtLb: "100-120",
    femaleWtKg: "36-41",
    femaleWtLb: "79-90",
  },
  {
    name: "Schnauzer- miniature",
    maleWtKg: "5-8.2",
    maleWtLb: "11-18",
    femaleWtKg: "4.5-6.8",
    femaleWtLb: "10-15",
  },
  {
    name: "Schnauzer- Standard",
    maleWtKg: "16-23",
    maleWtLb: "35-51",
    femaleWtKg: "14-20",
    femaleWtLb: "30-44",
  },
  {
    name: "Shetland Sheep dog",
    maleWtKg: "8-12.3",
    maleWtLb: "17-27",
    femaleWtKg: "6.4-10.3",
    femaleWtLb: "14-23",
  },
  {
    name: "Shih Tzu",
    maleWtKg: "4.5-8.1",
    maleWtLb: "10-18",
    femaleWtKg: "4-7.2",
    femaleWtLb: "9-16",
  },
  {
    name: "Siberian Husky",
    maleWtKg: "20-27",
    maleWtLb: "44-59",
    femaleWtKg: "16-23",
    femaleWtLb: "35-51",
  },
  {
    name: "Staffordshire Bull Terrier",
    maleWtKg: "13-17",
    maleWtLb: "28-37",
    femaleWtKg: "11-15.5",
    femaleWtLb: "24-34",
  },
  {
    name: "West Highland Terrier",
    maleWtKg: "8-9",
    maleWtLb: "18-20",
    femaleWtKg: "7-8",
    femaleWtLb: "15-18",
  },
  {
    name: "Whippet",
    maleWtKg: "10-13",
    maleWtLb: "22-29",
    femaleWtKg: "8-11",
    femaleWtLb: "18-24",
  },
];

Dog_weight.insertMany(postDogs)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
