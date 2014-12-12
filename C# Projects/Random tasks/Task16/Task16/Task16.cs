using System;

namespace Task16
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.WriteLine ("Write a program that reads the coefficients a, b and c of a quadratic equation ax2+bx+c=0 and solves it (prints its real roots).​");
		
			Console.WriteLine ();
			Console.WriteLine ("Solving: ax^2 + bx + c = 0");

			Console.WriteLine ("Enter coefficient a:");
			int a = int.Parse (Console.ReadLine ());

			Console.WriteLine ("Enter coefficient b:");
			int b = int.Parse (Console.ReadLine ());

			Console.WriteLine ("Enter coefficient c:");
			int c = int.Parse (Console.ReadLine ());

			double D = Math.Pow (b, 2) - 4 * a * c;

			if (D > 0) {
				double x1 = (-b + Math.Sqrt (D)) / (2 * a);
				double x2 = (-b - Math.Sqrt (D)) / (2 * a);

				Console.WriteLine ("Roots are: x1 = " + x1 + " , x2 = " + x2);
			}

			if (D < 0) {
				Console.WriteLine ("The equation has no roots");
			}
			else{
				double x = (-b) / (2 * a);

				Console.WriteLine ("Roots are equal x1 = x2 = " + x);
			}
		}
	}
}
