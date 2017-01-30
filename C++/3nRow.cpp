#include <iostream>

using namespace std;

bool checkRow3N(int* arr, int size)
{
	if(size % 3 == 0)
	{
		int n = size / 3;
		int counter = 0;

		for (int i = 0; i < n; ++i)
		{
			if(arr[i] == arr[i+n] && arr[i] == arr[i+2*n])
				counter++;
		}

		if(counter == n)
			return true;
		else
			return false;
	}
	else
		return false;
}

int main()
{
	int size;
	cin >> size;

	int* arr = new int[size];

	if(arr == NULL)
		cout << "Error: Memory could not be allocated!" << endl;

	else
	{
		for (int i = 0; i < size; ++i)
		{
			cin >> *(arr+i);
		}

		for (int i = 0; i < size; ++i)
		{
			cout << *(arr+i) << " ";
		}

		cout << endl;

		cout << "Is this row is from 3nRow kind: " << checkRow3N(arr, size) << endl;


		delete[] arr;
	}

	return 0;
}