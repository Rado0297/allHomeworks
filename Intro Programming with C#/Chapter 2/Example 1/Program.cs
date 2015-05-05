using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Example_1
{
    class Program
    {
        static void Main()
        {
            //Real types
            decimal decimalPI = 3.14159265358979323846m;
            float floatPI = 3.141592653589793238f;
            double doublePI = 3.141592653589793238;

            Console.WriteLine("Float PI is: " + floatPI);
            Console.WriteLine("Double PI is: " + doublePI);
            Console.WriteLine("Decimal PI is: " + decimalPI);
        }
    }
}
