#include <iostream>

using namespace std;

int main()
{
	int n;

	cin >> n;

	int arr[20];

	for (int i = 0; i < n; ++i)
	{
		cin >> arr[i];
	}

	int period = 0,
		matched = 0;

	while(period <= n/2 && matched < n)
	{
		period++;
		matched = period;
		while(matched < n && arr[matched-period] == arr[matched])
		{
			matched++;
		}
	}

	if(period <= n/2)
	{
		cout << "Period is " << period << endl;
	}
	else
	{
		cout << "No period\n";
	}

	return 0;
}