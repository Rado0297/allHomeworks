#include <iostream>
using namespace std;
int main()
{
    int a,b,c,n,sum;
    cout<<"Vavedi tricifreno 4islo: ";
    cin>>n;
    a=n/100;
    b=(n/10)%10;
    c=n%10;
    sum=a+b+c;
    if (sum>9 && sum<100) {cout<<"YES  sum= "<<sum<<endl; }
    else cout<<"NO  sum= "<<sum<<endl;
    return 0;
}
