import trainingData from "./textcontents.js";
import domstyle from "./style.js";
import tagMaker from "./tagMaker.js";

const root = document.getElementById("root");
domstyle.size(root, "100vw", "2430px")
domstyle.flex(root, "flex","flex-start","center","column");
domstyle.position(root, "relative")

  tagMaker("div", {
    id : "header",
    width:"100vw",
    height : "5vh",
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
  }, root, "");

  const header = document.getElementById("header");

  for(let i = 0; i<trainingData.header.length; i++) {
    tagMaker("p", {
      margin : "0 10px",
    },header,trainingData.header[i])
  }











