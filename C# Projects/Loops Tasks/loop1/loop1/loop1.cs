using System;

namespace loop1
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			//Task 1
			//Write a program that prints all the numbers from 1 to N.​

			Console.WriteLine ("Enter n:");
			int n = int.Parse (Console.ReadLine ());

			Console.WriteLine ("Numbers are:");
			for (int i = 1; i <= n; i++) {
				Console.WriteLine (i);
			}
		}
	}
}
