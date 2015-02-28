#include <iostream>
#include <ctime>
#include <cstdlib>
#include <string>


using namespace std;

int main()
{
    const int MAX_ITEMS = 5;
    string setup[MAX_ITEMS];

    int items = 0;

    setup[items++] = "Sword";
    setup[items++] = "Sheild";
    setup[items++] = "Steel Armor";

    srand(time(0));
    int slash = rand();
    int stab = rand();
    int lunge = rand();
    int hit = rand();
    char choice;

    int hitpoints = 100;
    int life = 100;

    cout << "\t\Battle of Ages!\n";
    cout << "\n\nWelcome, in this game you are equipped with a sword";
    cout << " shield, and some armor.\n";

    cout << "The items in inventory:\n";
    for(int i = 0; i < items; ++i)
    cout << setup[i] << endl;


    cout << "\nYour first fight is against Lancelot.\n";

    cout << "When you fight you have to select one of three moves.\n";
    cout << "Slash, Stab, Lunge.\n";

    cout << "\nLancelot: Are you ready, the get your ass whooped?\n";

    char again;
    while(again == 'n' || again || 'N')
    {
    cout << "What would you like to do?\n";
    cout << "Slash (s) Stab (st) Lunge (l)";
    cin >> choice;

    if (choice == 's'|| choice == 'S')
    {
     slash = (rand() % 30) + 1;
     hitpoints = (hitpoints - slash);
     cout << "You hit a " << slash << endl;
     cout << "Lancelot has " << hitpoints << "hitpoints left.\n";

     hit = (rand() % 25) + 1;
     life = (life - hit);
     cout << "Lancelot his " << hit << endl;
     cout << "You have " << life << "hitpoints left.\n";
    }

    if (choice == 'st' || choice == 'ST')
    {
     stab = (rand() % 25) + 1;
     hitpoints = (hitpoints - stab);
     cout << "You hit a " << stab << endl;
     cout << "Lancelot has " << hitpoints << "hitpoints left.\n";

     hit = (rand() % 25) + 1;
     life = (life - hit);
     cout << "Lancelot his " << hit << endl;
     cout << "You have " << life << "hitpoints left.\n";
    }

    if (choice == 'l' || choice == 'L')
    {
     lunge = (rand() % 20) + 1;
     hitpoints = (hitpoints - lunge);
     cout << "You hit a " << lunge << endl;
     cout << "Lancelot has " << hitpoints << "hitpoints left.\n";

     hit = (rand() % 25) + 1;
     life = (life - hit);
     cout << "Lancelot his " << hit << endl;
     cout << "You have " << life << "hitpoints left.\n";
    }

    // Declaring Winner
    char weapon;
    if (hitpoints <= 0)
    {
     cout << "You defeated Lancelot\n";
     cout << "When you take a weapon, sometimes it may replace";
     cout << " a weapon you already have.\n";

     cout << "Would you like a Rapier (r) Iron Shield (i) Potion(p)\n";
     cin >> weapon;
    // Selecting Weapon
     if (weapon == 'r' || weapon == 'R') // Rapier
     {
      cout << "You've choosen the Rapier.";
      cout << "Your inventory is now:\n";
      setup[0] = "Rapier";
      for (int i = 0; i < items; ++i)
      cout << setup[i] << endl;
     }

     if (weapon == 'i' || weapon == 'I') // Iron Shield
     {
      cout << "You've choosen an Iron Shield.";
      cout << "Your inventory is now:\n";
      setup[1] = "Iron Shield";
      for (int i = 0; i < items; ++i)
      cout << setup[i] << endl;
     }

     if ( weapon == 'p' || weapon == 'P')
     {
      cout << "You've choosen a Poiton";
      cout << "Your inventory is now:\n";
      setup[items++] = "Potion";
      for (int i = 0; i < items; ++i)
      cout << setup[i] << endl;
     }

     cout << "Would you like to play again?<Y/N>";
     cin >> again;
    }

    if (life <= 0)
    {
    cout << "Lancelot has defeated you.";
    cout << "Would you like to play again?<Y/N>";
    cin >> again;
    }
}
    cout << "Thanks for playing.\n";

    return 0;
}
