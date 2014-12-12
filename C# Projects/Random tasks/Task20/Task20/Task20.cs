using System;

namespace Task20
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.WriteLine ("Write a program to print the first 100 members of the sequence of Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, …​");
		
			decimal firstNumber = 0;
			decimal secondNumber = 1;
			decimal sum = 0;
			Console.WriteLine(firstNumber);
			Console.WriteLine(secondNumber);
			for (int i = 1; i < 100; i++)
			{
				sum = firstNumber + secondNumber;
				firstNumber = secondNumber;
				secondNumber = sum;
				Console.WriteLine(sum);

			}
		}
	}
}
