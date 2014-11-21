using System;

namespace Task7
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.WriteLine ("Expression that calculate rectangular's area by width and height.");

			Console.WriteLine ("Enter height: ");
			int height = int.Parse (Console.ReadLine ());

			Console.WriteLine ("Enter width: ");
			int width = int.Parse (Console.ReadLine ());

			int area = height * width;

			Console.WriteLine ("Area is " + area);
		}
	}
}
