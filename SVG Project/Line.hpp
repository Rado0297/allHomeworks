#ifndef LINE_HPP
#define LINE_HPP

#pragma once
#include <string>
#include "Shapes.hpp"

class Line : public Shapes
{
    //start point coordnates
    double x1;
    double y1;

    //end point coordinates
    double x2;
    double y2;

    std::string color;
    double width;

public:
    //Default Constructor
    Line();

    //Constructor
    Line(double _x1, double _y1, double _x2, double _y2, const std::string& _color, double _width);

    //Copy Constructor

    //Operator =

    //Other functionalitites
    void display() const;

    //Getters
    double getX1() const;
    double getY1() const;
    double getX2() const;
    double getY2() const;
    std::string getColor() const;
    double getwidth() const;

    //Setters
    void setX1(double _x1);
    void setY1(double _y1);
    void setX2(double _x2);
    void setY2(double _y2);
    void setColor(std::string& _col);
    void setWidth(double _width);

    //Validation
    void ValidationOfLine() const;

    //Destrutor
    ~Line();
};

#endif
