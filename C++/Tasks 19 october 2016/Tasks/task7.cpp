#include <iostream>

using namespace std;

bool isDevidableByThree(int n)
{
	int sum = 0;

	while(n >= 1)
	{	
		sum = sum + n % 10;

		n = n / 10;
	}

	if(sum % 3 == 0)
		return true;

	else
		return false;
}

int main()
{
	int n;
	cin >> n;
	
	isDevidableByThree(n);	

	return 0;
}