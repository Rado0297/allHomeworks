using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task7
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter your weight: ");

            int num = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine(num * 0.17);
        }
    }
}
