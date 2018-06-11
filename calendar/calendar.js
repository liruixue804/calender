  var input1=[            
    {id : 1, start : 30, end : 150},  
    {id :2, start : 540, end :600},
    {id : 3, start : 560, end : 620}, 
    {id : 4, start : 610, end : 670},
    {id : 5, start : 320, end : 420},  
    {id :  6, start : 160, end :300},
    {id : 7, start : 360, end : 500}, 
    {id : 8, start : 290, end : 470},
    {id : 9, start : 430, end : 520},  
    {id : 10, start : 240, end : 350},
  
 ];
 var input2=[
  {id : 1, start : 0, end : 30}, 
  {id : 2, start : 20, end :100},
  {id : 3, start : 50, end : 430}, 
  {id : 4, start : 80, end : 270},
  {id : 5, start : 90, end : 120},
  {id : 6, start : 100, end : 260},
  {id : 7, start : 130, end : 220} ,
  {id : 8, start : 150, end : 240},
  {id : 9, start : 140, end : 650},
  {id : 10, start : 150, end : 520},  
  {id : 11, start : 170, end : 190}, 
  {id : 12, start : 180, end : 270},
  {id : 13, start : 290, end : 360},
  {id : 14, start : 300, end : 410} ,
  {id : 15, start : 430, end : 550},
  {id : 16, start : 30, end : 110},  
  {id : 17, start : 100, end :220},
  {id : 18, start : 120, end : 430}, 
  {id : 19, start : 220, end :300},
  {id : 20, start : 120, end : 430}, 
  {id : 21, start : 220, end :300},
  {id : 22, start : 180, end : 430},  
  {id : 23, start : 250, end : 330}, 
  {id : 24, start : 580, end : 670},
  {id : 25, start : 280, end : 320},
  {id : 26, start : 320, end : 560},
  {id : 27, start : 310, end : 420} , 
  {id : 28, start : 240, end : 640},
  {id : 29, start : 540, end : 650},
  {id : 30, start : 430, end : 520}, 
  {id : 32, start : 100, end :120},
  {id : 33, start : 380, end : 470},
  {id : 34, start : 490, end : 660},
  {id : 35, start : 600, end : 710} ,
  {id : 36, start : 700, end : 710} ,
  {id : 37, start : 530, end : 580},
  {id : 38, start : 30, end : 110},  
  {id : 39, start : 600, end :720},
  {id : 40, start : 120, end : 430}, 
  {id : 41, start : 290, end : 360},
  {id : 42, start : 220, end :300},
  {id : 43, start : 130, end : 330}, 
  {id : 44, start : 583, end : 670},
  {id : 45, start : 280, end : 320},
  {id : 46, start : 320, end : 560},
  {id : 47, start : 330, end : 420} ,
  {id : 48, start : 330, end : 640},
  {id : 49, start : 540, end : 650},
  {id : 50, start : 430, end : 520}, 
  {id : 51, start : 390, end : 660},
  {id : 52, start : 100, end :120},
  {id : 53, start : 380, end : 470},
  {id : 54, start : 490, end : 660},
  {id : 55, start : 300, end : 410} ,
  {id : 56, start : 430, end : 550},
  {id : 57, start : 30, end : 110},  
  {id : 58, start : 100, end :220},
  {id : 59, start : 390, end : 660},
  {id : 60, start : 430, end : 520},  
  {id : 61, start : 100, end :120},
  {id : 62, start : 380, end : 470},
  {id : 63, start : 490, end : 660},
  {id : 64, start : 300, end : 410} ,
  {id : 65, start : 430, end : 550},
  {id : 66, start : 30, end : 110},  
  {id : 67, start : 100, end :220},
  {id : 68, start : 120, end : 430}, 
  {id : 69, start : 220, end :300},
  {id : 70, start : 120, end : 430}, 
  {id : 71, start : 220, end :300},
  {id : 72, start : 120, end : 430}, 
  {id : 73, start : 130, end : 330},
  {id : 74, start : 583, end : 670},
  {id : 75, start : 280, end : 320},
  {id :76, start :  320, end : 560},
  {id : 77, start : 330, end : 420} ,
  {id : 78, start : 330, end : 640},
  {id : 79, start : 540, end : 650},
  {id : 80, start : 430, end : 520}, 
  {id : 81, start : 430, end : 520}, 
  {id : 82, start : 100, end :120},
  {id : 83, start : 380, end : 470},
  {id : 84, start : 490, end : 660},
  {id : 85, start : 300, end : 410} ,
  {id : 86, start : 300, end : 410} ,
  {id : 87, start : 430, end : 550},
  {id : 88, start : 30, end : 110},  
  {id : 89, start : 100, end :220},
  {id : 90, start : 120, end : 430},  
  {id : 91, start : 390, end : 660},
  {id : 92, start : 220, end :300},
  {id : 93, start : 130, end : 330},
  {id : 94, start : 583, end : 670},
  {id : 95, start : 280, end : 320},
  {id : 96, start : 320, end : 560},
  {id : 97, start : 330, end : 420} ,
  {id : 98, start : 330, end : 640},
  {id : 99, start : 540, end : 650},
  {id : 100, start : 430, end : 520},  
  


 ]
   /********打印object*******/
    function writeObj(obj){ 
       var description = " "; 
       for(var i in obj){ 
         var property=obj[i]; 
         description+=i+" = "+property+"\n"; 
        } 
        return description; 
    } 

    /***********画图*******/
   function draw(obj){
 
      var div=document.createElement("div");
      div.style.position="absolute";
      div.style.left=obj.left+"px";
      div.style.top=obj.top+"px";
      div.style.height=obj.height+"px";
      div.style.width=obj.width-5+"px";
      div.style.backgroundColor="rgba(255,255,255,1)";
      div.style.border="1px solid rgba(0, 0, 0, 0.15)";
      div.style.borderLeft="4px solid rgba(75, 110, 169, 0.952)";
      div.style.textAlign="center";
      div.style.lineHeight=obj.height+"px";
      div.innerHTML="<a>"+obj.id+"</a>"
      document.getElementById("container").appendChild(div);
 
   }

   /****判断事件x,y是否重叠**/
   function compare(x,y){
     if (x.start>=y.end||x.end<=y.start){
        return false;
     }
     else{
        return true;
     }
   } 

   /*****事件冒泡排序(by start)***/
   function BubbleSort(x){
     for(var i=0;i<x.length;i++){
       for(var j=i+1;j<x.length;j++){
           if(x[i].start>x[j].start){
             var temp=x[i];
             x[i]=x[j];
             x[j]=temp;;
           }
        }
      }   
   }

   /*****冲突事件关联集*******/
   function DJ(S_start,E_end,events,temp){
     var start=S_start;
     var end=E_end;
     var obj={};
     obj.start= start;
     obj.end= end;
      for(var i=0;i<events.length;i++){
         if(events[i].mark!=1&& compare(events[i],obj)){
            temp.push(events[i]);
            events[i].mark=1;
            start=events[i].start<start?events[i].start:start;
            end=events[i].end>end?events[i].end:end;
            DJ(start,end,events,temp);
         }

      }


   }

   /****寻找最大的横坐标*******/
  function FindMax(events){
      var max=0;
      for(var i=0;i<events.length;i++){
          if(events[i].left>max){
           max=events[i].left;
          }
      }

        return max;
  }

   
    /******function layOutDay******** */
   function layOutDay( event1 ){
        var defalutWidth=100;
        var totalWidth=600;
        var event=event1;
        var len=event.length; 
        var temp=[];   //冲突事件数组[][]    
        var result2=[]; //与每个事件范围相冲突的事件[][]
        var count=0;

        for(var i=0;i<len;i++){
           if (!event[i].mark){
             temp[count]=[];    
             DJ(event[i].start,event[i].end,event,temp[count]);
             count++;
           }

        }
        
        BubbleSort(event);

        
        for(var j=0;j<event.length;j++){
          for(var i=0;i<len;i++){
            if(compare(event[j],event[i])){
                  if(!result2[j]){
                     result2[j]=[];
                    }
                  result2[j].push(event[i]);
               } 
            } 
         }

         for(var j=0;j<event.length;j++){//事件初始赋值
          event[j].width=defalutWidth;
          event[j].height=-event[j].start+event[j].end;
          event[j].top= event[j].start;
          
         }


         for(var t=0;t<event.length;t++){//按顺序给每个事件从左往右安排位子，没位子后挪，直到有空位，假设画布无限宽
           var flag=0;
           for(var m=0;m<result2[t].length;m++){ 
              if(result2[t][m].left==flag){
                 flag=result2[t][m].left+result2[t][m].width;
                 m=-1;
               }
             }
             event[t].left=flag;
          }

         for(var t=0;t<temp.length;t++){//根据画布内容宽度，将画布横向缩短到600
            var max=FindMax(temp[t]);
            var a=totalWidth/(max+defalutWidth);
            var width=a*defalutWidth;
            for(var m=0;m<temp[t].length;m++){ 
                  temp[t][m].width=width;
                  temp[t][m].left=temp[t][m].left*a;
              }
         
          }

       
          for(var t=0;t<temp.length;t++){//打印事件信息
            console.log("--------------------------------")
            for(var j=0;j<temp[t].length;j++){
               console.log(writeObj(temp[t][j]));
            }
          }
        
      
           return event;

  }
   
   
  window.onload = function () {
     var result=layOutDay( input1);
     for(var t=0;t<result.length;t++){
           draw(result[t]);
         
        }
    };

  
