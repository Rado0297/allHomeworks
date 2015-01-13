using System;

class Program
{
	static void Main ()
	{
		int N = int.Parse (Console.ReadLine ());

		int[,] spiral = new int[N,N];

		string direction = "right";

		int currentRow = 0;
		int currentCol = 0;

		for (int i = 1; i <= N * N; i++)
		{
			if (direction == "right" && (currentCol >= N || spiral [currentRow, currentCol] != 0))
			{
				currentCol--;
				currentRow++;
				direction = "down";
			}
			
			else if (direction == "down" && (currentRow >= N || spiral [currentRow, currentCol] != 0)) 
			{
				currentRow--;
				currentCol--;
				direction = "left";
			}
			else if (direction == "left" && (currentCol < 0 || spiral [currentRow, currentCol] != 0)) 
			{
				currentCol++;
				currentRow--;
				direction = "up";
			}
			else if (direction == "up" && (currentRow < 0 || spiral [currentRow, currentCol] != 0)) 
			{
				currentRow++;
				currentCol++;
				direction = "right";
			}

			spiral [currentRow, currentCol] = i;

			if (direction == "right")
			{
				currentCol++;
			} 
			else if (direction == "down") 
			{
				currentRow++;
			}
			else if (direction == "left") 
			{
				currentCol--;
			}
			else if (direction == "up") 
			{
				currentRow--;
			}
		}

		//print matrix
		for (int i = 0; i < N; i++)
		{
			for (int j = 0; j < N; j++)
			{
				Console.Write (spiral [i, j] + "   ");
			}
			Console.WriteLine ();
		}
	}
}