using System;

namespace loop3
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			//Task 3
			//Write a program that reads from the console a sequence of N integer numbers and returns the minimal and maximal of them.​

			int n;
			int num;
			int min = int.MinValue;
			int max = int.MaxValue;

			Console.WriteLine("How many numbers you will enter?");
			string str = Console.ReadLine();

			if (!int.TryParse(str, out n))
			{
				Console.WriteLine("Invalid number: {0}", str);
			}
			else
			{
				for (int i = 1; i <= n; i++)
				{
					Console.WriteLine("Please enter a number:");
					string strEnter = Console.ReadLine();

					if (!int.TryParse(strEnter, out num))
					{
						Console.WriteLine("Invalid number: {0}", strEnter);
					}
					else
					{
						if (i == 1)
						{
							min = num;
							max = num;
						}

						if (num < min)
						{
							min = num;
						}

						if (num > max)
						{
							max = num;
						}
					}
				}

				Console.WriteLine("The min number is: {0}", min);
				Console.WriteLine("The max number is: {0}", max);
			}
		}
	}
}
