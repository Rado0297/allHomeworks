using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task5
{
    class Program
    {
        static void Main(string[] args)
        {
            int a, b, h, area;
            Console.WriteLine("Enter a= ");
            a = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter b= ");
            b = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter h= ");
            h = int.Parse(Console.ReadLine());

            area = (((a + b) * h)/2);

            Console.WriteLine("Area is = " + area);
        }
    }
}
