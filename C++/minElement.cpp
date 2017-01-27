#include <iostream>

using namespace std;

int main()
{
	int n;

	cin >> n;

	int array[100];

	int min = array[0];

	for (int i = 0; i < n; ++i)
	{
		cin >> array[i];
	}

	for (int i = 0; i < n; ++i)
	{
		if(array[i] < min)
		{
			min = array[i];
		}
	}

	cout << "Min element = " << min << endl;

	return 0;
}