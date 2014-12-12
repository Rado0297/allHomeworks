using System;

namespace loop2
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			//Task 2
			//Write a program that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time.​

			Console.WriteLine ("Enter n:");
			int n = int.Parse (Console.ReadLine ());

			Console.WriteLine ("Result is:");
			for (int i = 1; i <= n; i++) {
				if (i % 3 == 0 && i % 7 == 0) {
				} 
				else {
					Console.WriteLine (i);
				}
			}
		}
	}
}
