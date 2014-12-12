using System;

namespace Task4
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.WriteLine ("Exercise 4: Write C# code to prompt a user to input his/her name and then the output will be shown as an example below:\nHello John!");
			Console.WriteLine ("Enter your name:");
			string name = Console.ReadLine ();
			Console.WriteLine ("Hello " + name);
		}
	}
}
