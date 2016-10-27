#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
	int day, month, year;
	int dayBin, monthBin, yearBin;

	cout << "Enter your birth:" << endl;
	
	cout << "day " << endl;
	cin >> day;

	cout << "month" << endl;
	cin >> month;

	cout << "year" << endl;
	cin >> year;


	// Binary day, month, year - not ready!!!



	cout << dec << day << " " << month << " " << year << endl;

	cout << hex << day << " " << month << " " << year << endl;
	
	cout << oct << day << " " << month << " " << year << endl;

	cout << dec << day << " " << month << " " << year << endl;

	return 0;
}