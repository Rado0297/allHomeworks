#pragma once
//Libraries
#include <iostream>
#include <string>
#include <fstream>

//Headers
#include "Shapes.hpp"
#include "Line.hpp"
#include "Circle.hpp"

using namespace std;

const unsigned IMG_WIDTH = 1024;
const unsigned IMG_HEIGHT = 768;
const unsigned IMG_MARGIN = 10;

//functionalitites

ofstream svgImage;
void createSVGFile()
{
    svgImage.open ("svgImage.svg");
    svgImage << "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n";
    svgImage << "<!DOCTYPE svg>\n";
    svgImage << "<svg width=\"" << IMG_WIDTH << "\" "
            << "height=\"" << IMG_HEIGHT << "\"" << ">\n";
}

void addLineToSVG(Line s)
{
    svgImage << "<line "
    << "x1=\"" << s.getX1() << "\" y1=\""
    << s.getY1() << "\" x2=\""
    << s.getX2() << "\" y2=\""
    << s.getY2() << "\" stroke=\""
    << s.getColor() << "\" stroke-width=\""
    << s.getwidth() <<"\"/>\n";
}

void closeSVGFile()
{
    svgImage << "</svg>\n";
    svgImage.close();
}

int main() {
    /*string input = "";
    getline(cin, input);
    cout << input << endl;


    Line l;
    l.display();
*/

    double a,b,c,d,e;

    cin>>a>>b>>c>>d;

    string col = "";
    cin >> col;

    cin >> e;
///Create line and save it in a file
    Line s(a,b,c,d,col,e);
    s.ValidationOfLine();

///Create Circle
    double cx,cy,r,width;
    string strokeColor = "";
    string fillColor = "";

    cin >> cx >> cy >> r >> strokeColor >> fillColor >> width;

    Circle circle(cx, cy, r, strokeColor, fillColor, width);
    //circle.validationOfCircle();

    createSVGFile();

    svgImage << "<line "
    << "x1=\"" << s.getX1() << "\" y1=\""
    << s.getY1() << "\" x2=\""
    << s.getX2() << "\" y2=\""
    << s.getY2() << "\" stroke=\""
    << s.getColor() << "\" stroke-width=\""
    << s.getwidth() <<"\"/>\n";

    s.display();

    cin>>a>>b>>c>>d;
    cin >> col;
    cin >> e;

    Line s1(a,b,c,d,col,e);


    addLineToSVG(s1);

    a = 10;
    b = 10;
    c = 20;
    d = 10;
    col = "black";
    e = 5;

    s1.setX1(a);
    s1.setY1(d);
    s1.setX2(c);
    s1.setY2(d);
    s1.setColor(col);
    s1.setWidth(e);

    addLineToSVG(s1);

    svgImage << "<circle "
    << "cx=\"" << circle.getCX() << "\" cy=\""
    << circle.getCY() << "\" r=\""
    << circle.getRadius() << "\" stroke=\""
    << circle.getStrokeColor() << "\" fill=\""
    << circle.getFillColor() << "\" stroke-width=\""
    << circle.getStrokeWidth() <<"\"/>\n";


    string col1 = "blue";
    string col2 = "yellow";

    circle.setCX(10.0);
    circle.setCY(100.0);
    circle.setStrokeColor(col1);
    circle.setFillColor(col2);
    circle.setStrokeWidth(60.0);

    svgImage << "<circle "
    << "cx=\"" << circle.getCX() << "\" cy=\""
    << circle.getCY() << "\" r=\""
    << circle.getRadius() << "\" stroke=\""
    << circle.getStrokeColor() << "\" fill=\""
    << circle.getFillColor() << "\" stroke-width=\""
    << circle.getStrokeWidth() <<"\"/>\n";

    closeSVGFile();

    cout << "Main here!\n";

/*
    int A = 10;

    cout << A << " " << *(&A) << "\n";

    int as = 10;

    int* asd = &as;

    cout << as << '\n';
    cout << &as << '\n';
    cout << *(&as) << '\n';
    cout << *asd << '\n';
*/

    return 0;
}
