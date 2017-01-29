#include <iostream>

using namespace std;

int main()
{
	int price, fifties, twenties, tens, fifths, twos, ones;

	cin >> price;

	fifties = (price - price%50)/50; //for example (286 - 36)/50, where 36 = price%50

	twenties = (price%50 - (price%50)%20)/20;

	tens = ((price%50)%20 - ((price%50)%20)%10)/10;

	fifths = (((price%50)%20)%10 - ((((price%50)%20)%10)%5))/5;

	twos = (((((price%50)%20)%10)%5) - (((((price%50)%20)%10)%5))%2)/2;

	ones = ((((((price%50)%20)%10)%5))%2 - ((((((price%50)%20)%10)%5))%2)%1)/1;

	cout << price << " = ";
	if(fifties != 0)
	{
		cout << fifties << "*50";
		//if we have more number for showing -> give us + after this number
		if(twenties != 0 || tens != 0 || fifths != 0 || twos != 0 || ones != 0)
			cout << " + ";
	}

	if(twenties != 0)
	{
		cout << twenties << "*20";
		if(tens != 0 || fifths != 0 || twos != 0 || ones != 0)
			cout << " + ";
	}

	if(tens != 0)
	{
		cout << tens << "*10";
		if(fifths != 0 || twos != 0 || ones != 0)
			cout << " + ";
	}

	if(fifths != 0)
	{
		cout << fifths << "*5";
		if(twos != 0 || ones != 0)
			cout << " + ";
	}

	if(twos != 0)
	{
		cout << twos << "*2";
		if(ones != 0)
			cout << " + ";
	}

	if(ones != 0)
		cout << ones << "*1";

	cout << "\n";

	return 0;
}