using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task3
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());

            int thirdNum = (num / 100) % 10;

            if (thirdNum == 7)
            {
                //Debug operation
                //Console.WriteLine(num / 100);
                //Console.WriteLine(((num / 100) % 10));
                Console.WriteLine("True");
            }
            else
                Console.WriteLine("False");
        }
    }
}
