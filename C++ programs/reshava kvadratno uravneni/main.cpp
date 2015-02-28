#include <iostream>
#include<math.h>
using namespace std;
int main()
{
    double a,b,c,x1,x2,d;
	cout<<"a=";	cin>>a;
	cout<<"b=";	cin>>b;
	cout<<"c=";	cin>>c;
    if(a==0)
    {
        if(b==0)
        if(c==0) cout<<"Every x is solve";
        else cout<<"There isn't solve";
        else cout<<"x="<<-c/b;
    }
    else
    {
        d=b*b-4*a*c;
        if(d>=0)
        {
        x1=(-b+sqrt (d))/(2*a);
        x2=(-b-sqrt (d))/(2*a);
        cout<<"x1="<<x1<<endl;
        cout<<"x2="<<x2<<endl;
        }
        else cout<<"There isn't real solves";
    }

    return 0;
}
