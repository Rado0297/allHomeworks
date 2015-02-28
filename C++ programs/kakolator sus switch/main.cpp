#include <iostream>
using namespace std;
int main(void)
{
    int a,b,c,r;
    cout<<"Izberete deistvie i natisnete ENTER (1-sabirane,2-izvajdane,3-umnojenie,4-delen-ie):"<<endl;
    cin>>c;
    switch(c)
    {
    case 1: cout<<"Sabirane na chisla: "<<endl;
    cout<<"-----------------------------"<<endl;
    cout<<"Vavedete parvoto chislo: ";
    cin>>a;
    cout<<"Vavedete vtoroto chislo: ";
    cin>>b;
    r=a+b;
    cout<<r<<endl; break;
    case 2: cout<<"Izvajdane na chisla: "<<endl;
    cout<<"-----------------------------"<<endl;
    cout<<"Vavedete parvoto chislo: ";
    cin>>a;
    cout<<"Vavedete vtoroto chislo: ";
    cin>>b;
    r=a-b;
    cout<<r<<endl; break;
    case 3: cout<<"Umnojenie na chisla: "<<endl;
    cout<<"-----------------------------"<<endl;
    cout<<"Vavedete parvoto chislo: ";
    cin>>a;
    cout<<"Vavedete vtoroto chislo: ";
    cin>>b;
    r=a*b;
    cout<<r<<endl; break;
    case 4: cout<<"Delenie na chisla: "<<endl;
    cout<<"-----------------------------"<<endl;
    cout<<"Vavedete parvoto chislo: ";
    cin>>a;
    cout<<"Vavedete vtoroto chislo: ";
    cin>>b;
    r=a/b;
    cout<<r<<endl; break;
    }

 return 0;
}
