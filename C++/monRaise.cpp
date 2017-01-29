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

	int isRaising = 0;

	for (int i = 0; i < n-1; ++i)
	{
		if(array[i] <= array[i+1])
		{
			isRaising++;
		}
	}

	if(isRaising == n - 1)
	{
		cout << "Is Raising == true\n";
	}
	else
	{
		cout << "Is Raising == false\n";
	}

	return 0;
}