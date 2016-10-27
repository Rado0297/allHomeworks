#include <iostream>
#include <math.h>

using namespace std;

int main()
{
	bool statement = false;

	/*a)
	int number;
	cin >> number;

	if (number % 4 == 0 || number % 7 == 0)
	{
		statement = true;
		cout << statement << endl;
	}
	else
		cout << statement << endl;
	*/

	/*b)
	double a, b, c, D;
	cin >> a;
	cin >> b;
	cin >> c;

	if (a != 0)
	{
		D = b*b - 4 * a*c;
		if (D < 0)
		{
			statement = true;
			cout << statement << endl;
		}
		else
			cout << statement << endl;
	}
	else
		cout << statement << endl;
	*/

	/*c)
	//dot coordinates a on Ox and b on Oy
	double a, b, distance;

	cin >> a;
	cin >> b;

	//Circle with center (0,1) and radius 5
	int radius = 5,
		xCoor = 0,
		yCoor = 1;
	if (b < 0) 
	{
		distance = sqrt(a*a + (b + yCoor)*(b + yCoor));
	}
	else
	{
		distance = sqrt(a*a + (b - yCoor)*(b - yCoor));
	}

	if (distance <= 5)
	{
		statement = true;
		cout << statement << endl;
	}
	else
		cout << statement << endl;
	*/

	/*d)
	double xCoorDot, yCoorDot, distance;
	int radius = 5; // circle with radius 5 and center (0;0)

	cin >> xCoorDot;
	cin >> yCoorDot;

	if (xCoorDot < 0 && yCoorDot < 0)
	{
		distance = sqrt(xCoorDot*xCoorDot + yCoorDot*yCoorDot);
		if (distance <= radius)
		{
			statement = true;
			cout << statement << endl;
		}
		else cout << statement << endl;
	}
	else cout << statement << endl;
	*/

	/*e)
	double xCoorDot, yCoorDot, distance;
	int radius1 = 5,
		radius2 = 10;

	cin >> xCoorDot;
	cin >> yCoorDot;

	distance = sqrt(xCoorDot*xCoorDot + yCoorDot*yCoorDot);
	if (distance >= radius1 && distance <= radius2)
	{
		statement = true;
		cout << statement << endl;
	}
	else cout << statement << endl;
	*/

	//f)
	

	return 0;
}