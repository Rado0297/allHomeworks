#include <iostream>

using namespace std;

bool checkData(int dd, int mm, int yyyy)
{
	if(dd >= 1 && dd <= 31 && mm >= 1 && mm <= 12 && yyyy >= 1582 && yyyy <= 2999)
		return true;

	else
		return false;
}

int main()
{
	int day, month, year;

	cin >> day >> month >> year;

	cout << checkData(day, month, year) << endl;

	return 0;
}