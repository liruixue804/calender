var input1 = [
  { id: 1, start: 30, end: 150 },
  { id: 2, start: 540, end: 600 },
  { id: 3, start: 560, end: 620 },
  { id: 4, start: 610, end: 670 },
  { id: 5, start: 320, end: 420 },
  { id: 6, start: 160, end: 300 },
  { id: 7, start: 360, end: 500 },
  { id: 8, start: 290, end: 470 },
  { id: 9, start: 430, end: 520 },
  { id: 10, start: 240, end: 350 }
];
var input2 = [
  { id: 1, start: 0, end: 30 },
  { id: 2, start: 20, end: 100 },
  { id: 3, start: 50, end: 430 },
  { id: 4, start: 80, end: 270 },
  { id: 5, start: 90, end: 120 },
  { id: 6, start: 100, end: 260 },
  { id: 7, start: 130, end: 220 },
  { id: 8, start: 150, end: 240 },
  { id: 9, start: 140, end: 650 },
  { id: 10, start: 150, end: 520 },
  { id: 11, start: 170, end: 190 },
  { id: 12, start: 180, end: 270 },
  { id: 13, start: 290, end: 360 },
  { id: 14, start: 300, end: 410 },
  { id: 15, start: 430, end: 550 },
  { id: 16, start: 30, end: 110 },
  { id: 17, start: 100, end: 220 },
  { id: 18, start: 120, end: 430 },
  { id: 19, start: 220, end: 300 },
  { id: 20, start: 120, end: 430 },
  { id: 21, start: 220, end: 300 },
  { id: 22, start: 180, end: 430 },
  { id: 23, start: 250, end: 330 },
  { id: 24, start: 580, end: 670 },
  { id: 25, start: 280, end: 320 },
  { id: 26, start: 320, end: 560 },
  { id: 27, start: 310, end: 420 },
  { id: 28, start: 240, end: 640 },
  { id: 29, start: 540, end: 650 },
  { id: 30, start: 430, end: 520 },
  { id: 32, start: 100, end: 120 },
  { id: 33, start: 380, end: 470 },
  { id: 34, start: 490, end: 660 },
  { id: 35, start: 600, end: 710 },
  { id: 36, start: 700, end: 710 },
  { id: 37, start: 530, end: 580 },
  { id: 38, start: 30, end: 110 },
  { id: 39, start: 600, end: 720 },
  { id: 40, start: 120, end: 430 },
  { id: 41, start: 290, end: 360 },
  { id: 42, start: 220, end: 300 },
  { id: 43, start: 130, end: 330 },
  { id: 44, start: 583, end: 670 },
  { id: 45, start: 280, end: 320 },
  { id: 46, start: 320, end: 560 },
  { id: 47, start: 330, end: 420 },
  { id: 48, start: 330, end: 640 },
  { id: 49, start: 540, end: 650 },
  { id: 50, start: 430, end: 520 },
  { id: 51, start: 390, end: 660 },
  { id: 52, start: 100, end: 120 },
  { id: 53, start: 380, end: 470 },
  { id: 54, start: 490, end: 660 },
  { id: 55, start: 300, end: 410 },
  { id: 56, start: 430, end: 550 },
  { id: 57, start: 30, end: 110 },
  { id: 58, start: 100, end: 220 },
  { id: 59, start: 390, end: 660 },
  { id: 60, start: 430, end: 520 },
  { id: 61, start: 100, end: 120 },
  { id: 62, start: 380, end: 470 },
  { id: 63, start: 490, end: 660 },
  { id: 64, start: 300, end: 410 },
  { id: 65, start: 430, end: 550 },
  { id: 66, start: 30, end: 110 },
  { id: 67, start: 100, end: 220 },
  { id: 68, start: 120, end: 430 },
  { id: 69, start: 220, end: 300 },
  { id: 70, start: 120, end: 430 },
  { id: 71, start: 220, end: 300 },
  { id: 72, start: 120, end: 430 },
  { id: 73, start: 130, end: 330 },
  { id: 74, start: 583, end: 670 },
  { id: 75, start: 280, end: 320 },
  { id: 76, start: 320, end: 560 },
  { id: 77, start: 330, end: 420 },
  { id: 78, start: 330, end: 640 },
  { id: 79, start: 540, end: 650 },
  { id: 80, start: 430, end: 520 },
  { id: 81, start: 430, end: 520 },
  { id: 82, start: 100, end: 120 },
  { id: 83, start: 380, end: 470 },
  { id: 84, start: 490, end: 660 },
  { id: 85, start: 300, end: 410 },
  { id: 86, start: 300, end: 410 },
  { id: 87, start: 430, end: 550 },
  { id: 88, start: 30, end: 110 },
  { id: 89, start: 100, end: 220 },
  { id: 90, start: 120, end: 430 },
  { id: 91, start: 390, end: 660 },
  { id: 92, start: 220, end: 300 },
  { id: 93, start: 130, end: 330 },
  { id: 94, start: 583, end: 670 },
  { id: 95, start: 280, end: 320 },
  { id: 96, start: 320, end: 560 },
  { id: 97, start: 330, end: 420 },
  { id: 98, start: 330, end: 640 },
  { id: 99, start: 540, end: 650 },
  { id: 100, start: 430, end: 520 }
];

/***********画图*******/
function draw(obj) {
  var div = document.createElement("div");
  div.style.left = obj.left + "px";
  div.style.top = obj.top + "px";
  div.style.height = obj.height + "px";
  div.style.width = obj.width - 5 + "px";
  div.style.lineHeight = obj.height + "px";
  div.innerHTML = "<a>" + obj.id + "</a>";
  document.getElementById("container").appendChild(div);
}

/****判断事件x,y是否重叠**/
function isOverlapping(x, y) {
  if (x.start >= y.end || x.end <= y.start) {
    return false;
  }
  return true;
}

/*****寻找最大冲突范围事件集*******/
function findMaxCollidingSet(start, end, events, fromIndex) {
  var collidingSet = [];
  for (var i = fromIndex; i < events.length; i++) {
    if (events[i].mark != 1 && isOverlapping(events[i], { "start": start, "end": end })) {
      collidingSet.push(events[i]);
      events[i].mark = 1;
      start = Math.min(events[i].start, start);
      end = Math.max(events[i].end, end);
      collidingSet = collidingSet.concat(findMaxCollidingSet(start, end, events, i + 1));
    }
    break;
  }
  return collidingSet;
}

/********寻找事件集最大的横坐标*******/
function maxHorizontalOrdinate(events) {
  var max = 0;
  for (var i = 0; i < events.length; i++) {
    if (events[i].left > max) {
      max = events[i].left;
    }
  }
  return max;
}

/********事件默认赋值*******/
function initEvents(events, defalutWidth) {
  for (var j = 0; j < events.length; j++) {
    events[j].width = defalutWidth;
    events[j].height = -events[j].start + events[j].end;
    events[j].top = events[j].start;
  }
}

/********打印所有事件信息*******/
function printEvent(events) {
  for (var t = 0; t < events.length; t++) {
    console.dir(events[t]);
  }
}

/********给事件安排横坐标*******/
function searchForPosition(collidingSets, influenceEventSets, totalWidth) {
  for (var t = 0; t < collidingSets.length; t++) {//每个子集
    for (var n = 0; n < collidingSets[t].length; n++) {//每个事件
      var flag = 0;
      for (var m = 0; m < influenceEventSets[t][n].length; m++) {
        if (influenceEventSets[t][n][m].left == flag) {
          flag = influenceEventSets[t][n][m].left + influenceEventSets[t][n][m].width;
          m = -1;
        }
      }
      collidingSets[t][n].left = flag;
    }
  }
}

/********调整事件宽度和横坐标*******/
function adjustEventsWidth(collidingSets, influenceEventSets, defalutWidth, totalWidth) {
  for (var i = 0; i < collidingSets.length; i++) {
    var max = maxHorizontalOrdinate(collidingSets[i]);
    var a = totalWidth / (max + defalutWidth);
    var width = a * defalutWidth;
    for (var m = 0; m < collidingSets[i].length; m++) {
      collidingSets[i][m].width = width;
      collidingSets[i][m].left = collidingSets[i][m].left * a;
    }
  }
}

/********寻找相互影响的事件*******/
function influenceEvent(collidingSets) {
  var influenceEventSets = [];
  for (var t = 0; t < collidingSets.length; t++) {
    influenceEventSets[t] = [];
    var subset = collidingSets[t];
    for (var m = 0; m < subset.length; m++) {
      for (var n = 0; n < subset.length; n++) {
        if (isOverlapping(subset[m], subset[n])) {
          if (!influenceEventSets[t][m]) {
            influenceEventSets[t][m] = [];
          }
          influenceEventSets[t][m].push(subset[n]);
        }
      }
    }
  }
  return influenceEventSets;
}

/******function layOutDay******** */
function layOutDay(events) {
  var totalWidth = 600;
  var defaultWidth = 10;
  var collidingSets = [];   //冲突事件数组[][]    
  var influenceEventSets = []; //与每个事件范围相冲突的事件[][]
  var count = 0;

  events.sort(function (lhv, rhv) { return lhv.start - rhv.start });//事件按时间排序

  for (var i = 0; i < events.length;) {
    if (!events[i].mark) {
      collidingSets[count] = findMaxCollidingSet(events[i].start, events[i].end, events, i);
      i += (collidingSets[count]).length;
      count++;
    }
  }
  initEvents(events, defaultWidth);
  influenceEventSets = influenceEvent(collidingSets);//寻找与每个事件相互影响的事件集
  searchForPosition(collidingSets, influenceEventSets, totalWidth);//确定事件横坐标
  adjustEventsWidth(collidingSets, influenceEventSets, defaultWidth, totalWidth);//调整事件横坐标宽度
  printEvent(events);//打印事件信息
  return events;
}

window.onload = function () {
  var result = layOutDay(input1);
  for (var t = 0; t < result.length; t++) {
    draw(result[t]);
  }
}