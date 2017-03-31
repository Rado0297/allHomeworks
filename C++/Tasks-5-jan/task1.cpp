#include <iostream>

using namespace std;

struct Product
{
	char description[32];
	int partNum;
	double cost;
}

int main()
{
	Product prod1, prod2;

	cin >> prod1.description >> prod1.partNum >> prod1.cost;
	cin >> prod2.description >> prod2.partNum >> prod2.cost;

	cout << prod1.description << prod1.partNum << prod1.cost;
	cout << prod2.description << prod2.partNum << prod2.cost;

	return 0;
}