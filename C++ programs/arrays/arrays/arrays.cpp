#include<iostream>
using namespace std;
int main
{
	int n,br;
	int arr[30];
	cout<<"Vavedi broi elementi";
	cin>>n;
	for(int i=0;i<n;i++)
	{
		cout<<"arr["<<i<<"]=";
		cin>>arr[i];
	}
	for(int i=0;i<n;i++)
	{
		if(arr[i]%2==0) br++;
	}
	cout<<"Broqt na 4etnite 4isla e: "<<br<<endl;
	return 0;
}