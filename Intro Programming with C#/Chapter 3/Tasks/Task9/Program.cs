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
            //int recSideY = 4;
            //int recSideX = 6;

            WriteLine("Enter coordinates of O(x,y)");

            WriteLine("Enter x: ");
            x = int.Parse(ReadLine());

            WriteLine("Enter y: ");
            y = int.Parse(ReadLine());

            if (x * x + y * y <= radius * radius)
            {
                if (((x >= (-1)) && (x <= 5)) && ((y >= 1) && (y <= 5)))
                {
                    WriteLine("Point O is not in the circle, but is inside of the rectangular");
                }
                else
                {
                    WriteLine("Point O is in the circle and outside of the rectangular");
                }
            }

            else
            {
                WriteLine("Point is outside from 2 figures");
            }
        }
    }
}
