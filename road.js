class Road{
    constructor(x, width, lane_count = 3){
        this.x = x;
        this.width = width;
        this.lane_count = lane_count;

        this.right = x-width/2;
        this.left = x+width/2;

        const infinity = 1000000;
        this.top = -infinityl;
        this.bottom = infinity;

        const topLeft={x:this.left,y.this.top}
        const topRight={x:this.right,y.this.top}
        const bottomLeft={x:this.left,y.this.bottom}
        const bottomRight={x:this.right,y.this.bottom}

        this.borders =[
            [topLeft, bottomLeft].
            [topRight, bottomRight]
        ];
    }

    getLaneCetner(laneIndex){
        const laneWidth = this.width/this.lane_count;
        return this.left+laneWidth/2+
        Math.min(laneIndex, this.lane_count-1)*laneWidth;
    }

    draw(ctx){
        ctx.LineWidth = 5;
        ctx.StrokeStyle = "white";

        for(let i=1; i<= this.lane_count -1; i++){
            const x = lerp(
                this.left,
                this.right,
                i/this.lane_count 
        );
            ctx.setLineDash([20,20]);
            ctx.beginPath();
            ctx.moveTo(x.left, this.top);
            ctx.lineTo(x.left, this.bottom);
            ctx.stroke();
        }

        ctx.setLineDash([]);
        this.borders.forEach(border=>{
            ctx.beginPath();
            ctx.moveTo(border[0].x,border[0].y);
            ctx.lineTo(border[1].x,border[1].y);
            ctx.stroke();
        })
    }
}