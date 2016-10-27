#include <iostream>

using namespace std;

int main()
{
	double x, y;

	cin >> x;
	cin >> y;

	if (x > 0 && y > 0)
	{
		cout << "Point is in first quadrant" << endl;
	}
	else if (x < 0 && y > 0)
	{
		cout << "Point is in second quadrant" << endl;
	}
	else if (x < 0 && y < 0)
	{
		cout << "Point is in third quadrant" << endl;
	}
	else if (x > 0 && y < 0)
	{
		cout << "Point is in forth quadrant" << endl;
	}
	else if (x == 0 && y != 0)
	{
		cout << "Point is on Y axis" << endl;
	}
	else if (x != 0 && y == 0)
	{
		cout << "Point is on X axis" << endl;
	}
	else if (x == 0 && y == 0)
	{
		cout << "Point is on the center of coordinate system" << endl;
	}

	return 0;
}