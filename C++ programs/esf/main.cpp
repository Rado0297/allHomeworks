#include <iostream>
using namespace std;
int main(void){
int a;
int b;
int c = 0;
while(true)
{

cout<<"Koe mi e lubimoto chislo !?"<<endl;
do
{
cout<<"Dai svoeto predlojenie:";
cin >> b;
if(b > a)
 {
cout<<"Tvarde Golqmo Chislo!"<< endl <<endl;
}
if(b < a)
{
cout<<"Tvarde Malko Chislo!"<< endl <<endl;
 }
c ++;
}while(b > a || b < a);
cout << "Bravoi ti pozna lubimoto mi chislo!!!"<<endl<<endl;
cout << "Ti napravi" <<" "<<c<<" "<< "predlojeniq" <<endl<<endl;

 }
return 0;
}
