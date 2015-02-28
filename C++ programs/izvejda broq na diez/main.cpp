#include <iostream>
using namespace std;
void diez(int n)
{
    for(int i=1;i<=n;i++)

        cout<<"#";
        cout<<endl;

}
int main()
{
    int k,l,m;
    cout<<"k"; cin>>k;
    cout<<"l"; cin>>l;
    cout<<"m"; cin>>m;
    diez(k);
    diez(l);
    diez(m);
    return 0;
}
