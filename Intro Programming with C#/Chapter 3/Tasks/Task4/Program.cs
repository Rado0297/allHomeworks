using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task4
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());

            string binary = Convert.ToString(num, 2);
            Console.WriteLine(binary);

            int binNum = int.Parse(binary);
            Console.WriteLine(binNum);
            int thirdNum = (binNum / 100) % 10;
            Console.WriteLine(thirdNum);
            if (thirdNum == 1)
                Console.WriteLine("Num is 1");
            else
                Console.WriteLine("Num is 0");
        }
    }
}
