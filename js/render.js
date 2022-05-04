// Draw everything
var render = function () {

  // Draw the background image
  ctx.fillStyle = bgPattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ball
  if (ballBgImage.loaded) {
  //draw ball
    ctx.drawImage(ballBgImage, ball.x, ball.y);
  }

  p1.render();
  p2.render();

  // Text options
  ctx.fillStyle = "rgb(161, 166, 180)";
  ctx.font = "18px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  // P1 Score
  ctx.fillText(p1.score, 32, 32);

  // P2 Score
  ctx.fillText(p2.score, canvas.width - 32 - 10, 32);

  // timer
  ctx.font = "18px Courier"
  ctx.fillText(getRoundDuration(), canvas.width/2 -24 , 32);
  // Text options
  ctx.font = "36px Helvetica";

  // Initial text
  if (!isGameStarted) {
    ctx.fillText("Press spacebar to start", 200, canvas.height / 2 + 28);
  }
};
