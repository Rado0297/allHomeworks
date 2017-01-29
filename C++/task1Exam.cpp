#include <iostream>

using namespace std;

int main()
{
	//a)
	/*int a, b, c;

	cin >> a >> b >> c;

	bool answer = false;

	if(a > 0 || b > 0 || c > 0)
	{
		answer = true;
	}

	cout << answer << endl;
	*/

	//b)
	/*
	const int R = 2, r1 = 1, r2 = 1;

	bool isInFigure = false;

	int x, y;

	cin >> x >> y;

	if(x > 0 && y < 0)
	{
		isInFigure = false;
	}
	else if(y >= 0)
	{
		if(x*x + y*y <= R*R)
		{
			if(x*x + y*y <= r1*r1)
			{
				isInFigure = false;
			}

			isInFigure = true;
		}
	}
	else if(y <= 0 && x <= 0)
	{
		if(x*x + y*y <= r2*r2)
			isInFigure = true;
	}

	cout << isInFigure << endl;
	*/

	//d)
	/*
	int number;
	cin >> number;

	int a, b, c;

	bool isRow = false;

	a = number / 100;
	b = (number % 100)/10;
	c = (number % 100)%10;

	if(a <= b && b <= c)
		isRow = true;
	
	cout << isRow << endl;
	*/

	return 0;
}