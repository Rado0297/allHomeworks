#include <iostream>
#include <math.h>
#include <cstdio>
#include "bitmap.h"

using namespace std;

int main()
{
    const int imageWidth = 800, imageHeight = 600;

    const int animationLength = 30;

    for(int frameN = 0;frameN < animationLength;frameN++)
    {
        cout << "Processing frame " << frameN << " of " << animationLength<<endl;

        //Custom try
        Bitmap bitmap(imageWidth, imageHeight);

        const int R = 35;


        const int centerX = imageWidth / 2,
                    centerY = imageHeight / 2;

        for(int x = 0; x < imageWidth; x++){
            for(int y = 0; y < imageHeight; y++ ) {
                int distance = sqrt((x-centerX) * (x-centerX) + (y-centerY) * (y-centerY));

                if(distance<R) bitmap.setPixel(x,y,0,distance,255-distance);
                else bitmap.setPixel(x,y,0,0,0);
            }
        }
        


        for(int x = 0; x < imageWidth; x++){
            for(int y = 0; y < imageHeight; y++ ) {
                double phi = atan2(x - centerX, y - centerY);
                double R = hypot((x - centerX)/2, (y - centerY)/2);

                double curveRadius = sin(phi*frameN)*127+128;
                double curveX = centerX + sin(phi)*curveRadius;
                double curveY = centerY + cos(phi)*curveRadius;

                int distanceFromCurve = hypot(curveX - x, curveY - y);

                int blue = distanceFromCurve * 2,
                    red = distanceFromCurve * 2 - 255;
                
                if(blue > 255) blue = 255;
                if(red < 0) red = 0;

                if(R < curveRadius) bitmap.setPixel(x, y, red, 0,blue);
                else bitmap.setPixel(x, y, 0,0,0);
            }
        }


        




        char fileName[100]; //allocate buffer for string Plain C-style, I am unfamiliar with C++ string sorry :)
        sprintf(fileName,"%04d.bmp",frameN); // %04d is substituted with frameN in number format 0000, 0001, 0002 ....
        bitmap.save(fileName);

    }

    return 0;
}