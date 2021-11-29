import { Application, Graphics } from 'pixi.js';

const app = new Application({
  antialias: true,
  backgroundAlpha: 0
});

app.resizeTo = window;
document.body.appendChild(app.view);

let graphics = new Graphics();
graphics.beginFill(0xFF0055);
graphics.drawCircle(50, 50, 20);
graphics.endFill();

app.stage.addChild(graphics);
