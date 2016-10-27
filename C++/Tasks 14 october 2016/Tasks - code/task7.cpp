#include <iostream>
#include <math.h>

using namespace std;

int main()
{
	int i, n, element, counter = 0;

	cout << "Enter bigger than 1, n = ";
	cin >> n;

	for(i = 1; i <= n; i++)
	{
		element = (pow(i, 3) + 13*i*n + pow(n, 3));
		if(element % 5 == 0 || element % 9 == 0)
		{
			cout << element << endl;
			counter++;
		}
	}

	cout << "Elements are " << counter << endl;

	return 0;
}