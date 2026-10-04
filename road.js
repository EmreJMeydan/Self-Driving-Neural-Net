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
    }

    draw(ctx){
        ctx.LineWidth = 5;
        ctx.StrokeStyle = "white";

        for(let i=0; i<= this.lane_count; i++){
            const x = lerp(
                this.left,
                this.right,
                i/this.lane_count 
        );
        
            ctx.beginPath();
            ctx.moveTo(x.left, this.top);
            ctx.lineTo(x.left, this.bottom);
            ctx.stroke();
        }
    }
}