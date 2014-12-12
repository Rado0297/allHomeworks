using System;

namespace Task15
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.WriteLine ("Write a program that gets two numbers from the console and prints the greater of them. Don’t use if statements.​");
		
			Console.WriteLine ("Enter first number:");
			double num1 = double.Parse (Console.ReadLine ());

			Console.WriteLine ("Enter second number:");
			double num2 = double.Parse (Console.ReadLine ());

			double max = Math.Max (num1, num2);

			Console.WriteLine ("The greater number is " + max);
		}
	}
}
