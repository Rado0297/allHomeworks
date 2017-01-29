#include <iostream>
#include <cmath>

using namespace std;

double calculate(int n)
{
	double result = 0;

	if(n == 4)
		return sqrt(n-3 + sqrt(n));

	else if(n > 1)
		result += sqrt(calculate(n-3) + sqrt(n));

	return result;
}

int main()
{
	int n;

	cin >> n;

	cout << calculate(n) << endl;

	return 0;
}