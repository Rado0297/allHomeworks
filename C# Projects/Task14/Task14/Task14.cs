using System;

namespace Task14
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.WriteLine ("Write a program that reads two positive integer numbers and prints how many numbers p exist between them such that the reminder of the division by 5 is 0 (inclusive). Example: p(17,25) = 2.​");

			int counter = 0;

			Console.WriteLine ("\n");
			Console.WriteLine ("Enter first positive integer:");
			int first = int.Parse (Console.ReadLine ());

			Console.WriteLine ("Enter second positive integer:");
			int second = int.Parse (Console.ReadLine ());

			if (first >= 0 && second >= 0) {
				for (int i = first; i <= second; i++) {
					if (i % 5 == 0) {
						counter++;
					}
				}
			} 
			else {
				Console.WriteLine ("Enter two positive integers");
			}
			if (counter > 1) {
				Console.WriteLine ("There are " + counter + " number,which are devideable to 5");
			}
			if (counter < 2) {
				Console.WriteLine ("There is " + counter + " number,which is devideable to 5");
			}
		}
	}
}
