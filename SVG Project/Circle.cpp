#pragma once

#include <iostream>
#include "Circle.hpp"

//Default Constructor
Circle::Circle()
{
    cx = 30.0;
    cy = 30.0;
    r = 16.0;
    strokeColor = "black";
    fillColor = "green";
    strokeWidth = 5.0;
    std::cout << "Default constructor!\n";
}

//Constructor
Circle::Circle(double _cx, double _cy, double _r, std::string& _strokeColor, std::string& _fillColor, double _strokeWidth)
{
    cx = _cx;
    cy = _cy;
    r = _r;
    strokeColor = _strokeColor;
    fillColor = _fillColor;
    strokeWidth = _strokeWidth;
    std::cout << "Constructor do it!\n";
}

//Copy Constructor
Circle::Circle(const Circle& other)
{
    copy(other);
}

//Operator =


//Other functionalitites
void Circle::printCircle() const
{
    std::cout << cx << " "
                << cy << " "
                << r << " "
                << strokeColor << " "
                << fillColor << " "
                << strokeWidth << "\n";
}

//Setters
void Circle::setCX(double _cx)
{
    cx = _cx;
}

void Circle::setCY(double _cy)
{
    cy = _cy;
}

void Circle::setRadius(double _r)
{
    r = _r;
}

void Circle::setStrokeColor(std::string& _strokeColor)
{
    strokeColor = _strokeColor;
}

void Circle::setFillColor(std::string& _fillColor)
{
    fillColor = _fillColor;
}

void Circle::setStrokeWidth(double _strokeWidth)
{
    strokeWidth = _strokeWidth;
}

//Getters
double Circle::getCX() const
{
    return cx;
}

double Circle::getCY() const
{
    return cy;
}

double Circle::getRadius() const
{
    return r;
}

std::string Circle::getStrokeColor() const
{
    return strokeColor;
}

std::string Circle::getFillColor() const
{
    return fillColor;
}

double Circle::getStrokeWidth() const
{
    return strokeWidth;
}

//Private functions
void Circle::destroy()
{

}

void Circle::copy(Circle other)
{
    
}

//Destrutor
