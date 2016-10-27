#include <iostream>

using namespace std;

int main()
{
	int n, sum = 0;

	cout << "Enter n = ";
	cin >> n;

	for(int i = 2; i <= n; i += 3)
	{
		sum = sum + i;
	}

	cout << "Sum = " << sum << endl;

	return 0;
}