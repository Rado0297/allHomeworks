#include<iostream>
using namespace std;
int main()
{
	int size, output, palindrom;
	cout << "Enter size of palindrom:";
	cin >> size;

	int centerNum = rand() % 10 + 1;
	int generatedNum2ForAdding = rand() % 10 + 1;

	if (size % 2 == 0){
		for (int i = 1; i < (size / 2) + 1; i++)
		{
			cout << centerNum + (generatedNum2ForAdding*i) << endl;
		}
		for (int i = (size / 2); i > 0; i--)
		{
			cout << centerNum + (generatedNum2ForAdding*i) << endl;
		}
	}
	else if (size % 2 != 0){
		for (int i = 1; i < ((size + 1) / 2); i++)
		{
			cout << centerNum + (generatedNum2ForAdding*i) << endl;
		}
		cout << "------------" << centerNum*size+7 << "---------------------" << endl;
		for (int i = ((size) / 2); i > 0; i--)
		{
			cout << centerNum + (generatedNum2ForAdding*i) << endl;
		}
	}
}