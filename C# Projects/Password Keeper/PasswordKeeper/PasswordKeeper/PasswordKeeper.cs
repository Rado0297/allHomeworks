using System;
using System.IO;

class Test 
{
	public static void Main() 
	{
		Console.Write ("Enter name for your document and extensions for it. (Example: myFile.txt): ");
		string fileName = Console.ReadLine();


		Console.Write ("Enter save directory: ");
		string saveDir = Console.ReadLine();

		//This is for custom save directory and file name
		string path = @saveDir + "/" + fileName;

		//This is for constant save directory
		//string path = @"/home/radi/Documents/Projects/C#/Password Keeper/Data/" + fileName;

		Console.Write ("Enter firstname: ");
		string fname = Console.ReadLine();

		Console.Write ("Enter lastname: ");
		string lname = Console.ReadLine();

		Console.WriteLine();

		if (!File.Exists (path)) {
			// Create a file to write to. 
			using (StreamWriter sw = File.CreateText(path)) {
				sw.WriteLine ("Welcome");
				sw.WriteLine ("Firstname: " + fname);
				sw.WriteLine ("Lastname: " + lname);

			}	
			System.Threading.Thread.Sleep (10000);
			Console.WriteLine ("File created");
		}

		//This open the file and read from it 
		//using (StreamReader sr = File.OpenText(path)) 
		//{
		//	string s = "";
		//	while ((s = sr.ReadLine()) != null) 
		//	{
		//		Console.WriteLine(s);
		//	}
		//	System.Threading.Thread.Sleep (10000);
		//	Console.WriteLine ("File saved");
		//}
	}
}