using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace Task10
{
    class Program
    {
        static void Main(string[] args)
        {
            int a, b, c, d, num, sum;

            WriteLine("Enter number: ");
            num = int.Parse(ReadLine());

            a = num / 1000;
            b = (num % 1000) / 100;
            c = ((num % 1000) % 100) / 10;
            d = ((num % 1000) % 100) % 10;

            sum = a + b + c + d;

            WriteLine("Sum of digits is: " + sum);

            WriteLine(d * 1000 + c * 100 + b * 10 + a);

            WriteLine(d * 1000 + a * 100 + b * 10 + c);

            WriteLine(a * 1000 + c * 100 + b * 10 + d);
        }
    }
}
