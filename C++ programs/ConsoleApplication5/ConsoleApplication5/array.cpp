#include<iostream>
using namespace std;
int main()
{
	int index,max,n;
	int arr[100];
	cout<<"Vavedi broi elementi = ";
	cin>>n;
	for(int i=0;i<n;i++)
	{
		cout<<"arr["<<i<<"]=";
		cin>>arr[i];
	}
	max=arr[0];
	index=0;
	for (int i = 1; i < n; i++)
	{
		if(arr[i]>max) max=arr[i];
		index=i;
	}
	cout<<"Max element e: "<<max<<endl;
	cout<<"Index e: "<<index<<endl;
	return 0;
}