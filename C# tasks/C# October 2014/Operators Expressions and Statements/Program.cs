using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Operators_Expressions_and_Statements
{
    class Program
    {
        static void Main()
        {
            int a;

            a = Console.Read();

            if (a % 2 == 0)
            {
                Console.WriteLine("Number is even");
            }
            else {
                Console.WriteLine("Number is odd");
            }
        }
    }
}
