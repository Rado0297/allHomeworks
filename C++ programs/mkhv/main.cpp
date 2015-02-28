#include<iostream>
using namespace std;
int main()
{
    int chislo,a,b,c,d;
	//izvejda 4isla,koito imat pone po dve ednakvi cifri vav sebe si
    for(chislo=1000;chislo<=9999;chislo++)
    {
        a=chislo/1000;
        b=(chislo/100)%10;
        c=(chislo/10)%10;
        d=chislo%10;
        if (a==b && b==c || b==c && c==d || c==d && d==a)
        cout<<chislo<<endl;

    }
    return 0;
}
