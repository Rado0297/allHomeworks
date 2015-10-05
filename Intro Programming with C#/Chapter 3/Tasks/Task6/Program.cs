using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task6
{
    class Program
    {
        static void Main(string[] args)
        {
            int sideA, sideB, area, preimeter;

            Console.WriteLine("Enter side a= ");
            sideA = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter side b= ");
            sideB = int.Parse(Console.ReadLine());

            preimeter = (2 * sideA + 2 * sideB);
            area = sideA * sideB;

            Console.WriteLine("Perimeter is: " + preimeter);
            Console.WriteLine("Area is: " + area);
        }
    }
}
