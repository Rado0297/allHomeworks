using System;

namespace Task17
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.WriteLine ("Write a program that gets a number n and after that gets more n numbers and calculates and prints their sum.");
		
			Console.WriteLine ("Enter number n:");
			int n = int.Parse (Console.ReadLine ());

			int number;
			int sum = 0;

			for (int i = 0; i < n; i++) {
				Console.WriteLine ("Enter number:");
				number = int.Parse (Console.ReadLine ());

				sum += number;
			}

			Console.WriteLine ("Their sum is " + sum);
		}
	}
}
