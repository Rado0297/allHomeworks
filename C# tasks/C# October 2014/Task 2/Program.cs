using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task_2
{
    class Program
    {
        static void Main()
        {
            bool check = false;
            int number;
            Console.Write("Enter the number:");
            bool isInt = int.TryParse(Console.ReadLine(), out number);

            if (isInt)
            {

                if (number % 7 == 0 && number % 5 == 0)
                {
                    check = true;
                }
                Console.WriteLine("The result of the check is:{0}", check);
            }
            else
            {
                Console.WriteLine("Not a valid entry!");
            }
        }
    }
}
