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
import createjs from "@nomadreservations/createjs-module";
const AdobeAn = {};
window.createjs = createjs
window.AdobeAn = AdobeAn

function loadLibs (src, callback) {
  return function () {
    let script = document.createElement('script')
    script.src = src
    document.head.appendChild(script)
    script.onload = function () {
      script.remove()
      script = null
      callback()
    }
  }
}

var canvas = ref(null);
onMounted(loadLibs('index.js', () => {
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
  loader.addEventListener("complete", handleComplete);
  loader.loadManifest(lib.properties.manifest);
  function handleComplete (evt) {
    var ss = comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (let i = 0; i < ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet({
        images: [queue.getResult(ssMetadata[i].name)],
        frames: ssMetadata[i].frames,
      });
    }
    let stage = new lib.Stage(canvas.value);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener("tick", stage);
    AdobeAn.compositionLoaded(lib.properties.id);
    let exportRoot = new lib.index();
    stage.addChild(exportRoot);
    exportRoot.mcMeizhongjiang.visible = false
    exportRoot.mcZhongjiang.visible = false
    exportRoot.mcIndex.btn.mouseChildren = false
    exportRoot.mcIndex.btnGuize.mouseChildren = false
    exportRoot.mcIndex.gotoAndPlay(1);
    let chance = 2
    exportRoot.addEventListener('click', (event) => {
      const name = event.target.name
      if (name === 'linghongbaoBtn') {
        exportRoot.mcZhongjiang.visible = false
        exportRoot.mcIndex.gotoAndPlay(1);
      } else if (name === '再摇一次btn') {
        exportRoot.mcMeizhongjiang.visible = false
        exportRoot.mcIndex.gotoAndPlay(1);
      }
    })

    exportRoot.mcIndex.addEventListener('click', (event) => {
      const name = event.target.name
      if (name === 'btnGuize') {
        exportRoot.mcGuize.gotoAndPlay(1);
      } else if (name === 'btn') {
        const mc = Math.random() > 0.5 ? 'mcZhongjiang' : 'mcMeizhongjiang'
        exportRoot[mc].visible = true
        exportRoot[mc].gotoAndPlay(1)
        if (mc === 'mcMeizhongjiang') {
          chance--
          if (chance === 0) {
            exportRoot[mc].duoyaoyici.gotoAndStop(1)
          }
        }
      }
    })
    exportRoot.mcGuize.addEventListener('click', event => {
      const name = event.target.name
      if (name === 'jiangpingBtn') {
        exportRoot.mcGuize.expData.gotoAndStop(1)
      } else if (name === 'shuomingBtn') {
        exportRoot.mcGuize.expData.gotoAndStop(0)
      } else if (name === 'closeBtn') {
        exportRoot.mcGuize.gotoAndPlay('out')
      }
    })
  }
}));

onBeforeUnmount(() => createjs.Ticker.removeAllEventListeners());
</script>

<style scoped>
canvas {
  display: block;
  width: 375px;
  background-color: #f3f3f3;
}
</style>
