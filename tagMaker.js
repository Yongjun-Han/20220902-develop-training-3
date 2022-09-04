
  export default function tagMaker(tagName, props, parent = document.body, childrenText = "") {
    let newTag = document.createElement(tagName);
    newTag.innerHTML = childrenText;
    
    for(const cssValue in props){
      if(cssValue === 'id') {
        newTag.id = props[cssValue];
      } else {
        newTag.style[cssValue] = props[cssValue];
      }
    }
    parent.appendChild(newTag);
  }