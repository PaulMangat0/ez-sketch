/********************************************************* */
/********************** Global Variables ***************** */
/********************************************************* */
let paintedColor ="rgb(2,64,124)";
let unpaintedColor ="rgb(64,64,64)";
let gridSize;

/********************************************************* */
/********************** Initialize Grid ****************** */
/********************************************************* */
function initializeGrid(size) {

  //Grab the grid drawing area wrapping div
  //Add grid rows attribute based on new size
  const gridParent=document.querySelector("#grid-wrapper");
  gridParent.setAttribute("style","grid-template-columns:repeat(" + size  +",1fr)");
 
  //clear out the old divs
  gridParent.innerHTML="";

  //create a new div for each 'pixel'
  for(let i=0;i<size;i++){
    for(let j=0;j<size;j++){
      const pixelBox = document.createElement('div');
      pixelBox.setAttribute("id",((i+1)*(j+1)));
      pixelBox.setAttribute("class","paint-box");
      pixelBox.style.backgroundColor=unpaintedColor;
      pixelBox.addEventListener("mouseover",colorize);
      gridParent.appendChild(pixelBox);
    }
  }
}

/********************************************************* */
/********************** Event Listeners ****************** */
/********************************************************* */

/*Add event Listeners to controls*/
function initalize_listeners() {
  const slider = document.querySelector("#grid-size");  
  const reset = document.querySelector("#reset");
  const colorSelector = document.querySelector("#color-selector");

  slider.addEventListener("click",setSize);
  reset.addEventListener("click",resetGrid);
  colorSelector.addEventListener("click",setColor);
}

/*set the size of the grid*/
function setSize(event){
  console.log("new Size:" + event.target.value); 
  gridSize=event.target.value;
  document.querySelector("#textField").value=gridSize;
}

/*set the size of the grid*/
function setColor(event){
  console.log("new color:" + event.target.value); 
  paintedColor= event.target.value;
}

/*set the size of the grid*/
function resetGrid(event){
  console.log("Reset"); 
  initializeGrid(gridSize);
}

/*Paints div which had a mouseover event*/
function colorize(event){
  //console.log(event.target); 
  event.target.style.backgroundColor=paintedColor;
}

/********************************************************* */
/************************ Window Load ******************** */
/********************************************************* */
window.onload = function() {
  initalize_listeners();
  gridSize=10; //default
  initializeGrid(gridSize);
};