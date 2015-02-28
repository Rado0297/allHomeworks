#include <cstdlib>
#include <iostream>

using namespace std;

int main()
{
    double num;
    double num2;
    char choice;
    for (;;){
     do {
    cout<<"Welcome to thejoshcalculator. V1.5\n";
    cout<<"Please choose an option by entering the number, press q to quit\n";
    cout<<"1 - Addition\n";
    cout<<"2 - Subtraction\n";
    cout<<"3 - Division\n";
    cout<<"4 - Multiplication\n";
    cout<<"5 - Help\n";
    cout<<"6 - About This Program\n";
    cout<<"7 - Updates to this program\n";
    cin>>choice;
    } while ( choice < '1' || choice > '7' && choice != 'q');
    if (choice == 'q') break;
    switch (choice) {
           case '1':
                cout<<"Please enter a number\n";
                cin>>num;
                cout<<"Another number to be added\n";
                cin>>num2;
                cout<<num + num2;
                cout<<"\n";
                break;
           case '2':
                cout<<"Please enter a number\n";
                cin>>num;
                cout<<"Another number to be subtracted\n";
                cin>>num2;
                cout<<num - num2;
                cout<<"\n";
                break;
           case '3':
                cout<<"Please enter a number\n";
                cin>>num;
                cout<<"Another one to be divided\n";
                cin>>num2;
                cout<<num / num2;
                cout<<"\n";
                break;
           case '4':
                cout<<"Please enter a number\n";
                cin>>num;
                cout<<"Another one to be multiplied\n";
                cin>>num2;
                cout<<num * num2;
                cout<<"\n";
                break;
           case '5':
                cout<<"This is a simple calculator made by me - Josh.\n";
                cout<<"To select an option, type the number next to the option and press enter\n";
                cout<<"E.G. for division, you would type 3 and press enter.\n";
                cout<<"\n";
                break;
           case '6':
                cout<<"thejoshcalculator, made by Joshua Griggs - Copyright 2007. :)\n";
                cout<<"Feedback would be nice - joshieboy06@hotmail.com also, what programmes\n";
                cout<<"do people need. Please give me ideas for programs. Bye!!\n";
                cout<<"\n";
                break;
           case '7':
                cout<<"Updates include:  -double variable instead of int, so that decimals can be used.\n";
                cout<<"                  -do while loop so that you can exit the program yourself\n";
                cout<<"\n";
                break;
           default:
                    cout<<"That is not an option";

                }

}
return 0;


}
