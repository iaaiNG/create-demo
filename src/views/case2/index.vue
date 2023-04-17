<template>
  <!-- <img style="width: 200px" src="images/di.jpg?1681720338064" alt="" /> -->
  <canvas ref="canvas" id="canvas" width="717" height="1260"></canvas>
  <!-- <div
    id="animation_container"
    style="background-color: rgba(0, 0, 0, 1); width: 717px; height: 1260px"
  >
    <canvas
      ref="canvas"
      id="canvas"
      width="717"
      height="1260"
      style="
        position: absolute;
        display: block;
        background-color: rgba(0, 0, 0, 1);
      "
    ></canvas>
    <div
      id="dom_overlay_container"
      style="
        pointer-events: none;
        overflow: hidden;
        width: 717px;
        height: 1260px;
        position: absolute;
        left: 0px;
        top: 0px;
        display: block;
      "
    ></div>
  </div> -->
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import libs from "./libs";
import createjs from "createjs-module";
const AdobeAn = {};
libs(window.createjs, AdobeAn);
// libs(createjs, AdobeAn);

var canvas = ref(null);
onMounted(() => {
  var comp = AdobeAn.getComposition("EC3D2412327E9E4190E551576F60A1F2");
  var lib = comp.getLibrary();
  var loader = new createjs.LoadQueue(false);
  [
    // "complete",
    // "error",
    // "fileerror",
    // "fileload",
    // "fileprogress",
    // "filestart",
    // "loadstart",
    "progress",
  ].map((event) => {
    loader.addEventListener(event, function (evt) {
      // console.log(evt.progress);
    });
  });

  loader.addEventListener("fileload", function (evt) {
    var images = comp.getImages();
    if (evt && evt.item.type == "image") {
      images[evt.item.id] = evt.result;
    }
  });
  loader.addEventListener("complete", function (evt) {
    console.log(evt, comp, lib);
    handleComplete(evt, comp);
  });
  loader.loadManifest(lib.properties.manifest);
  function handleComplete(evt, comp) {
    var ss = comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (let i = 0; i < ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet({
        images: [queue.getResult(ssMetadata[i].name)],
        frames: ssMetadata[i].frames,
      });
    }
    let exportRoot = new lib.index();
    let stage = new lib.Stage(canvas.value);
    // stage.enableMouseOver();
    let fnStartAnimation = function () {
      stage.addChild(asd());
      stage.addChild(exportRoot);
      // console.log(exportRoot);
      // exportRoot.mcIndex.gotoAndPlay(1);
      createjs.Ticker.framerate = lib.properties.fps;
      createjs.Ticker.addEventListener("tick", stage);
    };
    // window.stage = stage;
    // Code to support hidpi screens and responsive scaling.
    // AdobeAn.makeResponsive(false, "both", false, 1, [
    //   canvas.value,
    //   document.getElementById("animation_container"),
    //   document.getElementById("dom_overlay_container"),
    // ]);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
  }
});

function asd() {
  let container = new createjs.Container().set({
    x: 100,
    y: 100,
  });
  for (let i = 0; i < 4; i++) {
    let rect = new createjs.Shape().set({
      x: 100 * i,
      y: 100 * i,
    });
    rect.fillCommand = rect.graphics.beginFill("red").command;
    rect.graphics.rect(0, 0, 100, 100);
    container.addChild(rect);
  }
  // stage.addChild(container);
  // stage.enableMouseOver(10);
  // container.on("mouseover", (e) => {
  //   e.target.fillCommand.style = "blue";
  // });
  // container.on("mouseout", (e) => {
  //   e.target.fillCommand.style = "red";
  // });
  return container;
}

onBeforeUnmount(() => createjs.Ticker.removeAllEventListeners());
</script>

<style scoped>
canvas {
  display: block;
  width: 375px;
  background-color: #f3f3f3;
}
</style>
