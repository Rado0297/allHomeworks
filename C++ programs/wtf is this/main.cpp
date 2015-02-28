#include<iostream>
#include<math.h>
using namespace std;
int main()
{
    int x,a,b,c,d,e,p,s;
    cout<<"x=";
    cin>>x;
    a=x/10000;
    b=(x%10000)/1000;
    c=((x%10000)%1000)/100;
    d=(((x%10000)%1000)%100)/10;
    e=(((x%10000)%1000)%100)%10;
    p=(pow(a,3)*pow(b,2)+pow(c,1)+pow(d,2)*pow(e,3));
    cout<<"s="<<p<<endl;
    cout<<"r="<<e<<d<<c<<b<<a<<endl;
    return 0;
}
