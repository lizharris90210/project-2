$(document).ready(function () {
  
  let scene = $("#scene").get(0);
  console.log(scene);// eslint-disable-next-line no-undef
  var parallaxInstance = new Parallax(scene);
  parallaxInstance.friction(0.2, 0.2);
  // eslint-disable-next-line no-undef
  M.AutoInit();
 });