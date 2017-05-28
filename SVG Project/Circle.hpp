#ifndef CIRCLE_HPP
#define CIRCLE_HPP

#pragma once
#include <string>
#include "Shapes.hpp"

class Circle : public Shapes
{
    double cx; //center x coordinate
    double cy; //center y coordinate
    double r; //raduis length
    std::string strokeColor;
    std::string fillColor;
    double strokeWidth;

    void destroy();
    void copy(Circle other);

public:
    //Default Constructor
    Circle();

    //Constructor
    Circle(double _cx, double _cy, double _r, std::string& strokeColor, std::string& fillColor, double strokeWidth);

    //Copy Constructor
    Circle(const Circle& other);

    //Operator =
    //Optionally write some interpretation in Circle.cpp!!!
    Circle& operator=(const Circle& other)
    {
        if(this == &other) return *this;
        destroy();
        copy(other);
        return *this;
    }

    //Getters
    double getCX() const;
    double getCY() const;
    double getRadius() const;
    std::string getStrokeColor() const;
    std::string getFillColor() const;
    double getStrokeWidth() const;

    //Setters
    void setCX(double _cx);
    void setCY(double _cy);
    void setRadius(double _r);
    void setStrokeColor(std::string& _strokeColor);
    void setFillColor(std::string& _fillColor);
    void setStrokeWidth(double _strokeWidth);

    //Other functionalitites
    void printCircle() const;

    //Verification
    //void VerificationOfCircle() const;

    //width and height for canvas of svg file!!!

    //Destrutor
};

#endif
