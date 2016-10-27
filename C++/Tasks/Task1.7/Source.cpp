#include <iostream>
#include <math.h>

using namespace std;

int main()
{

	/*a)
	double a, h, S;

	cin >> a;
	cin >> h;

	S = ((a*h) / 2);

	cout << S << endl;
	*/

	//b)
	double a, b, c, p, S;

	cin >> a;
	cin >> b;
	cin >> c;

	if (a + b > c && a + c > b && b + c > a) {
		p = ((a + b + c) / 2);
		S = sqrt(p*(p - a)*(p - b)*(p - c));
		cout << "S = " << S << endl;
	}
	else
		cout << "Trinagular doesn't exist!";

	return 0;
}