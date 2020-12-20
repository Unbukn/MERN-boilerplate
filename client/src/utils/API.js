import axios from "axios";

export default {
  getAllData: function() {
    console.log("Getting all someData")
    return axios.get("/api/somedata");
  },
  getOneData: function(id) {
    console.log("getting one someData")
    return axios.get("/api/somedata/" + id);
  },
  deleteSomeData: function(id) {
    console.log("deleting one someData")
    return axios.delete("/api/somedata/" + id);
  },
  saveNewData: function(bookData) {
    console.log('creating new someData')
    return axios.post("/api/somedata", bookData);
  }
};
