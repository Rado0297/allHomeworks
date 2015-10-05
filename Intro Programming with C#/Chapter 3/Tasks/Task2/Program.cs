using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task2
{
    class Program
    {
        static void Main(string[] args)
        {
            bool isDevideable = true;

            int num = int.Parse(Console.ReadLine());

            if (num % 5 == 0 && num % 7 == 0)
                Console.WriteLine(isDevideable);
            else
                Console.WriteLine(!isDevideable);
        }
    }
}
