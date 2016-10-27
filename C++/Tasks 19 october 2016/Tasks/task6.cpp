#include <iostream>
#include <cmath>

using namespace std;

int calculateInRandomNumeriSystem(int n, int k)
{
	/*
	int i = 0;
	int arr[];

	while(n >= 1)
	{
		cout << n % k << endl;
		
		arr[i] = n % k;
		i++;

		n = n / k;

		cout << "-----" << n << "--------" <<endl;
	}

	for(i = i; i >= 0; i--)
	{
		cout << arr[i];
	}
	*/

}

int main()
{
	
	int n = 167;


	int counter = 0;

	int array[100];

	while(n >= 1)
	{
		cout << "-----" << n << "--------" <<endl;

		cout << n%2 << endl;
		
		
		n = n / 2;


		cout << "-----" << n << "--------" <<endl;

		counter++;
	}


	//cout << function(167, 2) << endl;;

	return 0;
}