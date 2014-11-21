using System;

namespace Task10
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.WriteLine ("Write an expression that calculates trapezoid's area by given sides a and b and height h.");

			Console.WriteLine ("Enter side a:");
			int sideA = int.Parse (Console.ReadLine ());

			Console.WriteLine ("Enter side b:");
			int sideB = int.Parse (Console.ReadLine ());

			Console.WriteLine ("Enter height h:");
			int heightH = int.Parse (Console.ReadLine ());

			int area;
			area = ((sideA + sideB) * heightH) / 2;

			Console.WriteLine ("Area of trapezoid is " + area);
		}
	}
}
