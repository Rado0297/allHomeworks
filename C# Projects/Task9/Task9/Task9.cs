using System;

namespace Task9
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.WriteLine ("Write an expression that checks if given positive integer number n (n ≤ 100) is prime. E.g. 37 is prime.​");

			Console.WriteLine ("Enter number:");
			int num = int.Parse(Console.ReadLine ());

			int n = 100;
			int counter = 0;
			for (int i = 1; i <= n; i++) {
				if (num % i == 0) {
					counter++;
				}
			}
			if (counter < 3) {
				Console.WriteLine ("Your number " + num + " is prime.");
			}
			else {
				Console.WriteLine ("Your number " + num + " isn't prime.");
			}
		}
	}
}
	