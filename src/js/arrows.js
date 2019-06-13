// Arrow Functions
$(function() {
  updateElementClass("#section-title", "add", "error");
  // $("#section-title").addClass("error");
})


const getElementValue = (elementName) => {
  let value = $(elementName).text();
  return value;
}

const updateElementClass = (element, type, className) => {
  if (type == "add") {
    $(element).addClass(className);
  } else if (type == "remove") {
    $(element).removeClass(className);
  }
}