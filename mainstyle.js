import trainingData from "./textcontents.js";
import domstyle from "./style.js";

//root 스타일링
const root = document.getElementById("root");
domstyle.size(root, "100vw", "2430px")
domstyle.flex(root, "flex","flex-start","center","column");
domstyle.position(root, "relative")

// header 박스 내부의 메뉴 글자 & 스타일링
const header = document.createElement("div");
root.appendChild(header);

//header 아래 바 

const bar = document.createElement("div");
root.appendChild(bar);

domstyle.size(bar,"70vw","3px");
domstyle.flex(bar,"flex","center","center");
domstyle.position(bar,"absolute","5vh","","","8vw")
bar.style.backgroundColor = "#000";
bar.style.borderRadius = "10px";

// 컨텐츠 영역
const contentArea = document.createElement("div");
root.appendChild(contentArea);
domstyle.size(contentArea, "100vw", "100%")
domstyle.flex(contentArea, "flex", "flex-start")

// 타이틀
const title = document.createElement("p")
contentArea.appendChild(title);
title.innerHTML = trainingData.title
domstyle.font(title, "48px")
domstyle.position(title, "absolute", "356px", "59px")

// 메인 컨텐츠 영역
const main = document.createElement("div");
contentArea.appendChild(main);
domstyle.size(main, "70vw","100%");
domstyle.flex(main, "flex","center","center", "column");

//box 1
const box1 = document.createElement("div");
main.appendChild(box1);
domstyle.size(box1,"70%","30%")
box1.style.margin = "5vh 0"
box1.style.display = "flex"

const box1Img = document.createElement("div");
box1.appendChild(box1Img);
domstyle.size(box1Img, "40%","100%")
box1Img.style.backgroundImage = "url(./img/img1.jpg)"
box1Img.style.backgroundSize = "cover"


const deatial1 = document.createElement("div");
box1.appendChild(deatial1);
domstyle.size(deatial1, "60%", "100%");
domstyle.font(deatial1, "12px");
domstyle.flex(deatial1, "flex","flex-end","","column");

const title1 = document.createElement("ul")
title1.innerHTML = trainingData.thumnailData[0].title
deatial1.appendChild(title1);
title1.style.fontSize = "24px"
title1.style.width = "80%"
title1.style.margin = "10px 30px"

const authorone = document.createElement("li");
authorone.innerHTML = trainingData.thumnailData[0].author;
deatial1.appendChild(authorone)
authorone.style.margin = "10px 30px"
authorone.style.fontSize = "12px"
authorone.style.width = "80%"

const summaryone = document.createElement("li");
summaryone.innerHTML = trainingData.thumnailData[0].summary
deatial1.appendChild(summaryone)
summaryone.style.margin = "10px 30px"
summaryone.style.fontSize = "12px"
summaryone.style.width = "80%"



//box 2
const box2 = document.createElement("div");
main.appendChild(box2);

domstyle.size(box2, "70%", "30%");
box2.style.margin = "5vh 0"
box2.style.display = "flex"

const box2Img = document.createElement("div");
box2.appendChild(box2Img);
domstyle.size(box2Img, "40%","100%")
box2Img.style.backgroundImage = "url(./img/img2.jpg)"
box2Img.style.backgroundSize = "cover"

const deatial2 = document.createElement("div");
box2.appendChild(deatial2);
domstyle.size(deatial2, "60%", "100%");
domstyle.font(deatial2, "12px");
domstyle.flex(deatial2, "flex","flex-end","","column");

const title2 = document.createElement("ul")
title2.innerHTML = trainingData.thumnailData[1].title
deatial2.appendChild(title2);
title2.style.fontSize = "24px"
title2.style.width = "80%"
title2.style.margin = "10px 30px"

const authortwo = document.createElement("li");
authortwo.innerHTML = trainingData.thumnailData[1].author;
deatial2.appendChild(authortwo)
authortwo.style.margin = "10px 30px"
authortwo.style.fontSize = "12px"
authortwo.style.width = "80%"

const summarytwo = document.createElement("li");
summarytwo.innerHTML = trainingData.thumnailData[1].summary
deatial2.appendChild(summarytwo)
summarytwo.style.margin = "10px 30px"
summarytwo.style.fontSize = "12px"
summarytwo.style.width = "80%"

//box 3
const box3 = document.createElement("div");
main.appendChild(box3);
domstyle.size(box3, "70%", "30%");
box3.style.margin = "5vh 0"
box3.style.display = "flex"

const box3Img = document.createElement("div");
box3.appendChild(box3Img);
domstyle.size(box3Img, "40%","100%")
box3Img.style.backgroundImage = "url(./img/img3.jpg)"
box3Img.style.backgroundSize = "cover"

const deatial3 = document.createElement("div");
box3.appendChild(deatial3);
domstyle.size(deatial3, "60%", "100%");
domstyle.font(deatial3, "12px");
domstyle.flex(deatial3, "flex","flex-end","","column");

const title3 = document.createElement("ul")
title3.innerHTML = trainingData.thumnailData[2].title
deatial3.appendChild(title3);
title3.style.fontSize = "24px"
title3.style.width = "80%"
title3.style.margin = "10px 30px"

const authorthree = document.createElement("li");
authorthree.innerHTML = trainingData.thumnailData[2].author;
deatial3.appendChild(authorthree)
authorthree.style.margin = "10px 30px"
authorthree.style.fontSize = "12px"
authorthree.style.width = "80%"

const summarythree = document.createElement("li");
summarythree.innerHTML = trainingData.thumnailData[2].summary
deatial3.appendChild(summarythree)
summarythree.style.margin = "10px 30px"
summarythree.style.fontSize = "12px"
summarythree.style.width = "80%"

//클릭 버튼 영역
const clickArea = document.createElement("div");
contentArea.appendChild(clickArea);
domstyle.size(clickArea, "10vw","100%")
domstyle.flex(clickArea,"flex","felx-end","center")


const clickIcon = document.createElement("div");
clickArea.appendChild(clickIcon);
clickIcon.style.backgroundColor = "seagreen";
domstyle.size(clickIcon,"30px","30px")

// 우측 배너영역
const banner = document.createElement("div");
contentArea.appendChild(banner);
domstyle.size(banner,"20vw","100%");
domstyle.flex(banner, "flex","center","center","column")
banner.style.opacity = "30%"


const bannerImg = document.createElement("div");
banner.appendChild(bannerImg);
bannerImg.style.cssText = "margin: 10px 0;background-color: skyblue;"
domstyle.size(bannerImg,"80%","30%")
bannerImg.style.backgroundImage = "url(./img/img4.jpg)"
bannerImg.style.backgroundSize = "cover"

const bannerTitle = document.createElement("ul")
bannerTitle.innerHTML = trainingData.thumnailData[3].title
banner.appendChild(bannerTitle);
bannerTitle.style.fontSize = "24px"
bannerTitle.style.width = "80%"
bannerTitle.style.margin = "10px 30px"

const bannerAuthor = document.createElement("div");
bannerAuthor.innerHTML = trainingData.thumnailData[3].author;
banner.appendChild(bannerAuthor)
bannerAuthor.style.margin = "10px 30px"
bannerAuthor.style.fontSize = "12px"
bannerAuthor.style.width = "80%"

const bannerSummary = document.createElement("div");
bannerSummary.innerHTML = trainingData.thumnailData[3].summary
banner.appendChild(bannerSummary)
bannerSummary.style.margin = "10px 30px"
bannerSummary.style.fontSize = "12px"
bannerSummary.style.width = "80%"













