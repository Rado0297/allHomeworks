//Task1.6
#include <iostream>
#include <math.h>
#include <ctime>

using namespace std;

int main()
{
	int years, days, hours, minutes, seconds;

	cin >> years;

	days = years * 365;

	hours = days * 24;

	minutes = hours * 60;

	seconds = minutes * 60;

	cout << days << endl
		<< hours << endl
		<< minutes << endl
		<< seconds << endl;

	return 0;
}