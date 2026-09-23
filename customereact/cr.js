const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  childern: "click me to visit google",
}

function customeRender(elm, container) {
  const newElem = document.createElement(elm.type)
  newElem.innerText = elm.childern

  for (const prop in elm.props) {
    newElem.setAttribute(prop, elm.props[prop])
  }
  container.appendChild(newElem)
}

const mainContainer = document.querySelector("#root")
customeRender(reactElement, mainContainer)
