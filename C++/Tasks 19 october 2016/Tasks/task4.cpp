#include <iostream>
#include <cmath>

using namespace std;

double circleArea(double radius)
{
	double area = radius*radius*M_PI;
	return radius*radius*M_PI;
}

int main()
{

	double r;
	cin >> r;

	cout << circleArea(r) << endl;

	return 0;
}