const domStyle = {
  size : function(element, widthVal, heightVal) {
    element.style.width = widthVal;
    element.style.height = heightVal;
  },
  flex : function(element, displayVal, justifyContentVal, alignItemsVal , directionVal) {
    element.style.display = displayVal;
    element.style.justifyContent = justifyContentVal;
    element.style.alignItems = alignItemsVal;
    element.style.flexDirection = directionVal;
  },
  position : function(element, positionVal, topVal, rightVal, bottomVal, leftVal) {
    element.style.position = positionVal;
    element.style.top = topVal;
    element.style.right = rightVal;
    element.style.bottom = bottomVal;
    element.style.left = leftVal;
  },
  font : function(element, fontSizeVal, fontweightVal) {
    element.style.fontSize = fontSizeVal;
    element.style.fontWeight = fontweightVal;
  }
}

export default domStyle;