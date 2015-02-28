
#include<iostream>
using namespace std;
int main()
{
    float C,F;
    int a;
Nachalo:
cout<<"1.Celsium to Farenhait\n";
cout<<"2.Farenhait to Celsium\n";
cout<<"Molq izberete opciq(1-2): ";
cin>>a;
if(a<1 || a>2)
{
cout<<"Greshka.Nesyshtestvuvashta opciq.\n";
return 1;
}
if ( a==1 ) goto Celzii;
if ( a==2 ) goto Farenhait;
Celzii:
{
    cout<<"Vyvedete gradusite po Celzii: ";
    cin>>C;
    F=C*1.8+32;
    cout<<"Gradusite po Farenhait = " <<F<<"\n";
    return 0;
}
Farenhait:
{
    cout<<"Vyvete gradusite po Farenhait: ";
    cin>>F;
    C=(F-32)/1.8;
    cout<<"Gradusite po Celzii = " <<C<<"\n";
    return 0;
}
return 0;
}
