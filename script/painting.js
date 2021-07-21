var mouseDraw = false;
var canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

//HTML input 값 받아오기(선 굵기)
function linesize(){
    var linewidths = document.querySelector('.linewidth').value;
     ctx.lineWidth = linewidths;
     options.linewidthsA = parseInt(linewidths);
    };

//다시 그리기 위한 배열
var ReturnDraw = [];

//좌표값 초기화

var standard = [];

// 초기 색상
var standardcolor = 'black';

// 기본값
var options = {
    type:'triangle',
    color:standardcolor,
   linewidthsA:5,
};

//변환값 초기화
var changoptions = {};

//초기 선굵기
ctx.lineWidth = 5;


//인덱스 초기화와 리턴 드로우 배열 삭제실행
async function indexzero(){
   
    if(index != 0){
        for(var i=0;i<index;i++){
            ReturnDraw.pop();
        }; 
    };

};


//ctx.lineCap = "round";

canvas.addEventListener('mousedown',drawingstart);

function drawingstart(){
    
    indexzero();

    index = 0;

   mouseDraw = true; 
 
   changoptions = {
        type:options.type,
        color:standardcolor,
        lineWidthb: options.linewidthsA,
        Location:[],
        circleone:[],
    }
};


canvas.addEventListener('mousemove',drawing);

function drawing(e){ 
    if(mouseDraw){
        
        var [X,Y] = [e.offsetX,e.offsetY];
        standard.push([X,Y]);
        ctx.fillStyle = 'standardcolor';
    

    //세모 옵션일 경우
    if(changoptions.type === 'triangle'){

        for(var i=1;i<standard.length;i++){ 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ReturnDrawA();
        ctx.beginPath();
       ctx.fillStyle = standardcolor;
        ctx.fill();   
            ctx.moveTo(standard[i][0],standard[i][1]);
            ctx.lineTo(standard[0][0]-(standard[i][0]-standard[0][0]),standard[i][1]);
            ctx.lineTo(standard[0][0],standard[0][1]);
        ctx.closePath();
        ctx.fill();   

       };    
     };   


    //실선 옵션일 경우
     if(changoptions.type === 'stroke'){
       ctx.clearRect(0, 0, canvas.width, canvas.height);
        ReturnDrawA();

        ctx.lineWidth = changoptions.lineWidthb;
        ctx.strokeStyle = standardcolor;
        ctx.beginPath();
        
        for(var i=1;i<standard.length;i++){
        ctx.lineTo(standard[i][0],standard[i][1]);
       }; 
       ctx.stroke();
       ctx.fillStyle = 'transparent';
       ctx.closePath();

     };   


         //원 자유도형일 경우 

    if(changoptions.type === 'circle'){

        for(var x=1;x<standard.length;x++){   
             
            ctx.clearRect(0, 0, canvas.width, canvas.height);     
            ReturnDrawA();

            ctx.fill();    
        ctx.fillStyle = standardcolor;
        ctx.beginPath();    
        ctx.ellipse(Math.round((standard[x][0]+standard[0][0])/2),Math.round((standard[x][1]+standard[0][1])/2),Math.round(Math.abs((standard[x][0]-standard[0][0])/2)),Math.round(Math.abs((standard[x][1]-standard[0][1])/2)),0,0,2*Math.PI);  
        ctx.fill();
    };    
         
  };   


    //사각형 자유도형일 경우 
 
    if(changoptions.type === 'square'){

        for(var i=1;i<standard.length;i++){ 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ReturnDrawA();
        ctx.beginPath();

        ctx.fillStyle = standardcolor;
       ctx.fillRect(standard[0][0],standard[0][1],standard[i][0]-standard[0][0],standard[i][1]-standard[0][1]);
        ctx.closePath();
       };    

     };   

  };

};


// Draw 종료시
canvas.addEventListener('mouseup',drawingend);

function drawingend(){
    changoptions.circleone = [Math.round((standard[standard.length-1][0]+standard[0][0])/2),Math.round((standard[standard.length-1][1]+standard[0][1])/2),Math.round(Math.abs((standard[standard.length-1][0]-standard[0][0])/2)),Math.round(Math.abs((standard[standard.length-1][1]-standard[0][1])/2))];
    changoptions.Location = [...standard];  
    ReturnDraw.push(changoptions);
   mouseDraw = false;
    standard = [];
};

var Palette = document.querySelectorAll('.color');
var color = ['#FFFFFF','#000000','#263238','#37474F','#455A64','#546E7A','#607D8B','#78909C','#90A4AE','#B0BEC5','#CFD8DC','#ECEFF1','#212121','#424242','#616161','#757575','#9E9E9E','#BDBDBD','#E0E0E0','#EEEEEE','#F5F5F5','#FAFAFA','#3E2723','#4E342E','#5D4037','#6D4C41','#795548','#8D6E63','#A1887F','#BCAAA4','#D7CCC8','#EFEBE9','#DD2C00','#FF3D00','#FF6E40','#FF9E80','#BF360C','#D84315','#E64A19','#F4511E','#FF5722','#FF7043','#FF8A65','#FFAB91','#FFCCBC','#FBE9E7','#FF6D00','#FF9100','#FFAB40','#FFD180','#E65100','#EF6C00','#F57C00','#FB8C00','#FF9800','#FFA726','#FFB74D','#FFCC80','#FFE0B2','#FFF3E0','#FFAB00','#FFC400','#FFD740','#FFE57F','#FF6F00','#FF8F00','#FFA000','#FFB300','#FFC107','#FFCA28','#FFD54F','#FFE082','#FFECB3','#FFF8E1','#FFD600','#FFEA00','#FFFF00','#FFFF8D','#F57F17','#F9A825','#FBC02D','#FDD835','#FFEB3B','#FFEE58','#FFF176','#FFF59D','#FFF9C4','#FFFDE7','#AEEA00','#C6FF00','#EEFF41','#F4FF81','#827717','#9E9D24','#AFB42B','#C0CA33','#CDDC39','#D4E157','#DCE775','#E6EE9C','#F0F4C3','#F9FBE7','#64DD17','#76FF03','#B2FF59','#CCFF90','#33691E','#558B2F','#689F38','#7CB342','#8BC34A','#9CCC65','#AED581','#C5E1A5','#DCEDC8','#F1F8E9','#00C853','#00E676','#69F0AE','#B9F6CA','#1B5E20','#2E7D32','#388E3C','#43A047','#4CAF50','#66BB6A','#81C784','#A5D6A7','#C8E6C9','#E8F5E9','#00BFA5','#1DE9B6','#64FFDA','#A7FFEB','#004D40','#00695C','#00796B','#00897B','#009688','#26A69A','#4DB6AC','#80CBC4','#B2DFDB','#E0F2F1','#00B8D4','#00E5FF','#18FFFF','#84FFFF','#006064','#00838F','#0097A7','#00ACC1','#00BCD4','#26C6DA','#4DD0E1','#80DEEA','#B2EBF2','#E0F7FA','#0091EA','#00B0FF','#40C4FF','#80D8FF','#01579B','#0277BD','#0288D1','#039BE5','#03A9F4','#29B6F6','#4FC3F7','#81D4FA','#B3E5FC','#E1F5FE','#2962FF','#2979FF','#448AFF','#82B1FF','#0D47A1','#1565C0','#1976D2','#1E88E5','#2196F3','#42A5F5','#64B5F6','#90CAF9','#BBDEFB','#E3F2FD','#304FFE','#3D5AFE','#536DFE','#8C9EFF','#1A237E','#283593','#303F9F','#3949AB','#3F51B5','#5C6BC0','#7986CB','#9FA8DA','#C5CAE9','#E8EAF6','#6200EA','#651FFF','#7C4DFF','#B388FF','#311B92','#4527A0','#512DA8','#5E35B1','#673AB7','#7E57C2','#9575CD','#B39DDB','#D1C4E9','#EDE7F6','#AA00FF','#D500F9','#E040FB','#EA80FC','#4A148C','#6A1B9A','#7B1FA2','#8E24AA','#9C27B0','#AB47BC','#BA68C8','#CE93D8','#E1BEE7','#F3E5F5','#C51162','#F50057','#FF4081','#FF80AB','#880E4F','#AD1457','#C2185B','#D81B60','#E91E63','#EC407A','#F06292','#F48FB1','#F8BBD0','#FCE4EC','#D50000','#FF1744','#FF5252','#FF8A80','#B71C1C','#C62828','#D32F2F','#E53935','#F44336','#EF5350','#E57373','#EF9A9A','#FFCDD2','#FFEBEE'];


//팔레트 박스 색상 중복 검사
var ColorArray = [];

// 팔레트 박스에 색상 입히기
function colorcang(){
 for(var i=0;i<Palette.length;i++){  
   
    var randemN = Math.floor(Math.random()*color.length);
    if(ColorArray.indexOf(randemN) === -1){
        ColorArray.push(randemN);
    }else{
       i--
    };
   Palette[i].style.backgroundColor = color[ColorArray[i]];  
 };
};
colorcang()


// 색상 랜덤 변환 클릭시 색상 배열 초기화후 재실행
function colorcanglee(){
     ColorArray = [];
    colorcang()
};


//클릭 이벤트 실행시 해당 팔레트 박스 컬러를 복사하여 standard에 rgb를 복사

for (var x=0;x<Palette.length;x++){
       Palette[x].addEventListener('click',function(){

            for(var q=0;q<Palette.length;q++){
                Palette[q].classList.remove('colorSL');
            };
            standardcolor = this.style.backgroundColor;
            this.classList.add('colorSL');
            console.log(standardcolor);
            options.color = this.style.backgroundColor;
       });
 };

 console.log( Math.floor(Math.random()*color.length));


//다시 그리기

var start = [];
var end = [];
var oneX = '';
var oneY = '';

var index = 0;


function ReturnDrawA(){
   
    for(var r=0;r<ReturnDraw.length-index;r++){    
       
        //세모
        if(ReturnDraw[r].type === 'triangle'){
        
                ctx.fillStyle = ReturnDraw[r].color;
                ctx.beginPath();

                for(var i=0;i<ReturnDraw[r].Location.length;i++){  

                var end = ReturnDraw[r].Location.length-1
                  var reversX = ReturnDraw[r].Location[0][0]-(ReturnDraw[r].Location[end][0]-ReturnDraw[r].Location[0][0])
              
                ctx.fill();
                ctx.moveTo(ReturnDraw[r].Location[end][0],ReturnDraw[r].Location[end][1]);
                ctx.lineTo(reversX,ReturnDraw[r].Location[end][1]);
                ctx.lineTo(ReturnDraw[r].Location[0][0],ReturnDraw[r].Location[0][1]);
                ctx.closePath();  
              };  
              
            };

        //타입 네모
        if(ReturnDraw[r].type === 'square'){
            start = [ReturnDraw[r].Location[0][0],ReturnDraw[r].Location[0][1]]
             end = [ReturnDraw[r].Location[ReturnDraw[r].Location.length-1][0],ReturnDraw[r].Location[ReturnDraw[r].Location.length-1][1]]
          
             ctx.beginPath();
             ctx.fillStyle = ReturnDraw[r].color;
             ctx.fillRect(start[0],start[1],end[0]-start[0],end[1]-start[1]);
             ctx.closePath();
        };

        //타입 실선
        if(ReturnDraw[r].type === 'stroke'){
          
          ctx.lineWidth = ReturnDraw[r].lineWidthb;
             ctx.strokeStyle = ReturnDraw[r].color; 

             ctx.beginPath();
             ctx.fillStyle = 'transparent';  
            for(var i=1;i<ReturnDraw[r].Location.length;i++){
                 ctx.lineTo(ReturnDraw[r].Location[i][0],ReturnDraw[r].Location[i][1]);
           };  
           ctx.stroke();
           ctx.closePath();
        };

        //동그라미
       if(ReturnDraw[r].type === 'circle'){
        
        ctx.fill();
        ctx.fillStyle = ReturnDraw[r].color;

        ctx.beginPath();
            for(var i=0;i<ReturnDraw[r].Location.length;i++){  
                ctx.fill();
                ctx.ellipse(ReturnDraw[r].circleone[0],ReturnDraw[r].circleone[1],ReturnDraw[r].circleone[2],ReturnDraw[r].circleone[3],0,0,2*Math.PI);
          };  
          
        };

     }
};

//선택 컨트롤

var stokeSL = document.querySelector('.stokeSL');
var squareSL = document.querySelector('.squareSL');
var circleSL = document.querySelector('.circleSL');
var ctlli = document.querySelectorAll('.opbtn');

stokeSL.addEventListener('click',function(){options.type = 'stroke'});
squareSL.addEventListener('click',function(){options.type = 'square'});
circleSL.addEventListener('click',function(){options.type = 'circle'});
ctlli[3].addEventListener('click',function(){options.type = 'triangle'});

//이전 버튼
ctlli[4].addEventListener('click',function(){
    if(index<ReturnDraw.length){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        index += 1;
        ReturnDrawA();
    }else{
        index = ReturnDraw.length
    };
});

ctlli[5].addEventListener('click',function(){
    if(index>0){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        index -= 1;
        ReturnDrawA();
    }else{
        index = 0;
    };
});