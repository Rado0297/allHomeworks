#include <iostream>
#include <cmath>

using namespace std;

bool isPowerOfTwo(int n)
{
	float power = log2(n);

	if(int(power) == power)
		return true;
	
	else
		return false;
}

int main()
{
	int n;
	cin >> n;

	cout << isPowerOfTwo(n) << endl;

	return 0;
}