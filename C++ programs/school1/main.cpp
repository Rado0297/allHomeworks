#include <iostream>
using namespace std;
int main()
{

    int a,x,s;
    s=0;
    x=0;

    while (a!=0)
    {
        cin>>a;
        if(a%2==0)
        {
            s=s+a;

        }
        if(a%2!=0) x=x+1;
    }
    cout<<s<<endl;
    cout<<x<<endl;
    return 0;
}
