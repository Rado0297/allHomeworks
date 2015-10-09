using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console; // New Feature in C# for using Console function!

namespace Task8
{
    class Program
    {
        static void Main(string[] args)
        {
            int x, y, radius = 5;

            WriteLine("Enter coordinates of O(x,y)");

            WriteLine("Enter x: ");
            x = int.Parse(ReadLine());

            WriteLine("Enter y: ");
            y = int.Parse(ReadLine());

            if (x * x + y * y <= radius * radius)
                WriteLine("Point O is in the circle");
            else
                WriteLine("Point O is not in the circle");
        }
    }
}
