#include <iostream>

using namespace std;

int main()
{
    int arr[10],i;
	cout<<"Enter 10 numbers and I'll show their sum";
    for(i=0;i<10;i++) cin>>arr[i];
    int sum=0;
    for(i=0;i<10;i++) sum+=arr[i];
    cout<<"sun= "<<sum<<endl;
    return 0;
}
