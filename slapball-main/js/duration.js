//author Isaac Worsencroft
//date 04/27/2022
//sets the clock for each round of slapball
var roundStarted=Date.now();

var startRound = function(){
roundStarted = (Date.now()/1000).toFixed(0);
}
var getRoundDuration = function(){
  if(isGameStarted){
  let curenttime = (Date.now()/1000).toFixed(0);
  let Secon =(((curenttime - roundStarted))%60);
  let Minets = ((curenttime - roundStarted)/60).toFixed(0);
  //adds additinal zeros to keep the formating the same for single diget times
  if(Minets<10&&Secon<10){
    return `0${Minets}:0${Secon}`;
  }
  else if(Minets<10){
    return `0${Minets}:${Secon}`;
  }
  else if(Secon<10){
    return `${Minets}:0${Secon}`;
  }
  else{
    return `${Minets}:${Secon}`;
  }
  }
  else{
  return '00:00';}

}
