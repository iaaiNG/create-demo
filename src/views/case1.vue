<template>
  <canvas ref="canvas" width="750" height="1334"></canvas>
</template>

<script setup>
import createjs from "@nomadreservations/createjs-module";
import { onMounted, ref } from "vue";

function loadImage(src, callback) {
  const image = new Image();
  image.src = new URL(src, import.meta.url).href;
  image.onload = () => {
    callback(image);
  };
}

const canvas = ref(null);
onMounted(() => {
  const stage = new createjs.Stage(canvas.value);
  createjs.Ticker.framerate = 30;
  createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
  createjs.Ticker.addEventListener("tick", stage);

  // //还有遮罩，就是溢出隐藏那种效果。
  // let rect = new createjs.Shape();
  // rect.graphics.rect(0, 0, 200, 100).closePath();
  // let line = new createjs.Shape();
  // line.graphics
  //   .setStrokeDash([20, 10], 0)
  //   .setStrokeStyle(3)
  //   .beginStroke("red")
  //   .moveTo(0, 1000)
  //   .lineTo(200, 0);
  // //线的遮罩，这样，只能看到线条的100px长。
  // line.mask = rect;
  // stage.addChild(line); //遮罩不需要添加

  //在CreateJs里面透明的地方是不响应事件的，这样就实现了事件委托。比如做一个高亮效果，直接给容器加一个事件。
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
  stage.addChild(container);
  stage.enableMouseOver(10);
  container.on("mouseover", (e) => {
    e.target.fillCommand.style = "blue";
  });
  container.on("mouseout", (e) => {
    e.target.fillCommand.style = "red";
  });

  // loadImage("./assets/test-car.jpg", (image) => {
  //   const bitmap = new createjs.Bitmap(image);
  //   bitmap.scaleX = canvasWidth / bitmap.image.width;
  //   bitmap.scaleY = canvasWidth / bitmap.image.width;
  //   // stage.addChild(bitmap);

  //   const shape = new createjs.Shape();
  //   createjs.Touch.enable(stage);
  //   shape.graphics.beginFill("#000").drawCircle(0, 0, 145 / 2);
  //   shape.x = 145 / 2;
  //   shape.y = 145 / 2;
  //   shape.alpha = 0.3;

  //   // stage.addChild(shape);
  //   // bitmap.mask = shape;

  //   var blur = new createjs.BlurFilter(5, 5, 1);
  //   bitmap.filters = [blur];
  //   // bitmap.cache(0, 0, bitmap.image.width, bitmap.image.height);

  //   var rect = new createjs.Rectangle(0, 0, 145, 145);
  //   // bitmap.sourceRect = rect;

  //   bitmap.addEventListener("click", () => {
  //     console.log(123);
  //   });

  //   let dx = 1;
  //   let ds = 0.005;

  //   function loop() {
  //     if (bitmap.x === 100) {
  //       dx = -1;
  //     } else if (bitmap.x === 0) {
  //       dx = 1;
  //     }
  //     if (bitmap.scaleX > canvasWidth / bitmap.image.width) {
  //       bitmap.scaleX = bitmap.scaleY = 0;
  //     }
  //     bitmap.x += dx;
  //     bitmap.scaleX += ds;
  //     bitmap.scaleY += ds;
  //     requestAnimationFrame(loop);
  //   }
  //   // loop();

  //   // createjs.Tween.get(bitmap, { loop: true })
  //   //   .wait(1000)
  //   //   .to({ x: 100, y: 100 }, 1000)
  //   //   .wait(1000)
  //   //   .to({ scaleX: 1.5 }, 1000)
  //   //   .wait(1000)
  //   //   .to({ scaleY: 1.5 }, 1000)
  //   //   .wait(1000)
  //   //   .to({ scaleX: 1, scaleY: 1 }, 1000, createjs.Ease.bounceIn)
  //   //   .wait(1000)
  //   //   .to({ x: 0, y: 0 }, 1000);

  //   //还可以画虚线,20是每个虚线的长，10是虚线的间隔，直线就是去掉setStrokeDash这个方法
  //   // let line = new createjs.Shape();
  //   // line.graphics
  //   //   .setStrokeDash([20, 10], 0)
  //   //   .setStrokeStyle(3)
  //   //   .beginStroke("red")
  //   //   .moveTo(0, 0)
  //   //   .lineTo(200, 0);
  // });
});
</script>

<style scoped>
canvas {
  display: block;
  width: 375px;
  background-color: #f3f3f3;
}
</style>
