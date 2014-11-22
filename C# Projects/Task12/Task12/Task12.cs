using System;

namespace Task12
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.WriteLine ("Write a program that reads the radius r of a circle and prints its perimeter and area.");

			Console.WriteLine ("Enter radius of circle:");
			double radius = double.Parse(Console.ReadLine ());

			double c = 2 * Math.PI * radius;
			double area = Math.PI * Math.Pow (radius, 2);

			Console.WriteLine ("Perimeter is " + c + ". Area is " + area);
		}
	}
}
