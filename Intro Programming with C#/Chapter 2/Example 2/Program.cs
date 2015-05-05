using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Example_2
{
    class Program
    {
        static void Main()
        {
            //Bool type
            int a = 1;
            int b = 2;

            bool greaterAB = (a > b);
            bool equalA1 = (a == 1);

            if (greaterAB)
            {
                Console.WriteLine("A > B");
            }
            else 
            {
                Console.WriteLine("A <= B");
            }
            Console.WriteLine("greaterAB = " + greaterAB);
            Console.WriteLine("equalA1 = " + equalA1);
        }
    }
}
