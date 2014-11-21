using System;

namespace Task11
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.WriteLine ("Write a program that reads 3 integer numbers from the console and prints their sum.​");

			Console.WriteLine ("Enater number 1:");
			int a = int.Parse (Console.ReadLine ());

			Console.WriteLine ("Enater number 2:");
			int b = int.Parse (Console.ReadLine ());

			Console.WriteLine ("Enater number 3:");
			int c = int.Parse (Console.ReadLine ());

			int sum;
			sum = a + b + c;
			Console.WriteLine ("The sum is " + sum);
		}
	}
}
