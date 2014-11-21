using System;

namespace Task5
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.WriteLine ("Check given integer is even or odd");
			Console.WriteLine ("Enter number:");

			int number = int.Parse (Console.ReadLine ());

			if(number%2 == 0){
				Console.WriteLine(number + " is even.");
			}
			else{
				Console.WriteLine(number + " is odd.");
			}
		}
	}
}
