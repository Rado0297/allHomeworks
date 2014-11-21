using System;

namespace Task6
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.WriteLine ("Check integer is dive to 7 and 5 at same time with boolean expression.");

			Console.WriteLine ("Enter integer:");

			int number = int.Parse (Console.ReadLine ());

			Console.WriteLine (number);

			bool b = true;

			if (number % 5 == 0 && number % 7 == 0) {
				b = true;
			} 
			else {
				b = false;
			}

			Console.WriteLine (b);


		}
	}
}
