using System;

namespace Task8
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.WriteLine ("Write an expression that checks for given integer if its third digit (right-to-left) is 7. E. g. 1732 -> true.");

			Console.WriteLine ("Enter number:");
			int num = int.Parse (Console.ReadLine ());

			if ((num / 100) % 10 == 7) {
				Console.WriteLine (num + ". Third number from left to right is 7 -> True");
			} 
			else {
				Console.WriteLine ("False");
			}
		}
	}
}
