#pragma once

#include <iostream>
#include "Line.hpp"


//Default Constructor
Line::Line()
{
    //std::string col = "black";

    //color = &col;

    x1 = 10;
    y1 = 10;
    x2 = 20;
    y2 = 10;
    color = "black";
    width = 5;

    std::cout << "===================\n";
    std::cout << color << std::endl;
    std::cout << &color << std::endl;
    std::cout << "===================\n";

}

//Constructor
Line::Line(double _x1, double _y1, double _x2, double _y2, const std::string& _color, double _width)
{
    x1 = _x1;
    y1 = _y1;
    x2 = _x2;
    y2 = _y2;
    color = _color;
    width = _width;
}

//Copy Constructor

//Operator =

//Other functionalitites
void Line::display() const
{
    std::cout << "Display method!\n";
    std::cout << x1 << " "
                << y1 << " "
                << x2 << " "
                << y2 << " "
                << color << " "
                << width << "\n";
}

//Setters
void Line::setX1(double _x1)
{
    x1 = _x1;
}

void Line::setY1(double _y1)
{
    y1 = _y1;
}

void Line::setX2(double _x2)
{
    x2 = _x2;
}

void Line::setY2(double _y2)
{
    y2 = _y2;
}

void Line::setColor(std::string& _col)
{
    color = _col;
}

void Line::setWidth(double _width)
{
    width = _width;
}

//Getters
double Line::getX1() const
{
    return x1;
}

double Line::getY1() const
{
    return y1;
}
double Line::getX2() const
{
    return x2;
}

double Line::getY2() const
{
    return y2;
}

std::string Line::getColor() const
{
    return color;
}

double Line::getwidth() const
{
    return width;
}

//Validation
void Line::ValidationOfLine() const
{
    if((x1 == y1 && x1 == x2 && x1 == y2) ||
    (y1 == x1 && y1 == x2 && y1 == y2) ||
    (x2 == x1 && x2 == y1 && x2 == y2) ||
    (y2 == x1 && y2 == y1 && y2 == x2))
    {
        if (width <= 0) {
            std::cout << "Width of line should be greater than zero!\n";
        }
        std::cout << "Invalid line coordinates had been entered!\n";

    }
    else if (width <= 0) {
        std::cout << "Width of line should be greater than zero!\n";
    }
}

//Destrutor
Line::~Line()
{

}
