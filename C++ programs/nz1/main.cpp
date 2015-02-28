#include <iostream>
using namespace std;
int main()
{
    unsigned long int k;
    cout<<"k=";
    cin>>k;
    while(k!=0)
    {
        cout<<k%10;
        k=k/10;
    }
    return 0;
}
