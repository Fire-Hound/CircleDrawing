let x,y,xc,yc,r,angle;
function setup()
{
    createCanvas(800, 800);
    background(0);
    xc = width/2;
    yc = height/2;
    r = 200;
    angleMode(true);
}

function draw()
{
    stroke(218,41,147);
    strokeWeight(3);
    angle = 0;
    while(angle<=360)
    {
        x = r * sin(angle);
        y = r * cos(angle);
        point(x + xc, y + yc);
        angle+=0.01;
    }
}