#include <iostream>

using namespace std;

void printMatrixElements(int** matrix, int size)
{
	cout << matrix[size-1][size-1];

	for (int i = (size - 2); i >= 0 ; i--)
	{
		
	}
}

int main()
{
	int size;

	cin >> size;

	int** matrix;

	matrix = new int*[size];

	for (int i = 0; i < size; ++i)
	{
		matrix[i] = new int[size];
	}

	for (int i = 0; i < size; ++i)
	{
		for (int j = 0; j < size; ++j)
		{
			cin >> matrix[i][j];
		}
	}

	cout << endl;

	for (int i = 0; i < size; ++i)
	{
		for (int j = 0; j < size; ++j)
		{
			cout << matrix[i][j] << " ";
		}

		cout << endl;
	}



	printMatrixElements(matrix, size);



	for (int i = 0; i < size; ++i)
	{
		delete matrix[i];
	}

	delete[] matrix;

	return 0;
}