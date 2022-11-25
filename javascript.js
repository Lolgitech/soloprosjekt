const submitInput = () => {
  const numbers = document.getElementById("inputValue").value;

  if (numbers != 0 && numbers < 1000) {
    const circleParent = document.getElementById("circles");
    circleParent.innerHTML = "";
    for (let i = 0; i < numbers; i++) {
      setTimeout(drawCircle, 1000);
      const child = document.createElement("div");
      child.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      child.style.borderColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      child.classList.add("circle");
      child.innerHTML = i + 1;
      circleParent.appendChild(child);
    }
  } else {
    window.alert("Please input a number between 1 and 1000");
  }
};

const drawCircle = () => {};
