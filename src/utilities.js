// Define our labelmap
const labelMap = {
    1:{name:'face', color:'red'},
    //1:{name:'ThumbsUp', color:'red'},
    /*2:{name:'ThumbsDown', color:'yellow'},
    3:{name:'ThankYou', color:'lime'},
    4:{name:'LiveLong', color:'blue'},*/
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            //const [y,x,height,width] = boxes[i]
            const [y,x,b,a] = boxes[i]
            const text = classes[i]
            
            // Set styling
            //ctx.strokeStyle = labelMap[text]['color']
			//Just using this color list to make some fancy color changes on the bbox - Maria
            var bgcolorlist=new Array("#92a8d1", "034f84", "#f7cac9", "#f7786b")
            ctx.strokeStyle = bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)];
            
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100) + '%', x*imgWidth, y*imgHeight-10)
            //ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
            ctx.rect(
                x * imgWidth, 
                y * imgHeight, 
                (a - x) * imgWidth, 
                (b - y) * imgHeight
              ); 
            ctx.stroke()
        }
    }
}