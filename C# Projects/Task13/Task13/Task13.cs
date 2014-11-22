using System;
using System.Text;

namespace Task13
{
	class CompanyName
	{
		static void Main()
		{
			Console.WriteLine ("A company has name, address, phone number, fax number, web site and manager. The manager has first name, last name, age and a phone number. Write a program that reads the information about a company and its manager and prints them on the console.​");

			Console.OutputEncoding = Encoding.UTF8;

			Console.Write("Enter company name: ");
			string compName=Console.ReadLine();

			Console.Write("Enter company address: ");
			string compAddress=Console.ReadLine();

			Console.Write("Enter phone number: ");
			string compPhoneNum=Console.ReadLine();

			Console.Write("Enter fax number:");
			string compFaxNum=Console.ReadLine();

			Console.Write("Enter Web site: ");
			string webSite=Console.ReadLine();

			Console.Write("Enter manager first name: ");
			string manFirstName=Console.ReadLine();

			Console.Write("Enter manager last name: ");
			string manLastName=Console.ReadLine();

			Console.Write("Enter manager age: ");
			int manAge = int.Parse(Console.ReadLine());

			Console.Write("Enter manager phone: ");
			string ManPhone=Console.ReadLine();

			Console.WriteLine ();
			Console.WriteLine ("-------------------------------------------------------------------");
			Console.WriteLine ("Company: {0}", compName);
			Console.Write(" Address: {0}  {1}", compAddress, Environment.NewLine);
			Console.WriteLine (" Phone: {0} \n Fax: {1} {2} Web site: {3}", compPhoneNum, compFaxNum, Environment.NewLine, webSite);

			Console.WriteLine ("-------------------------------------------------------------------");
			Console.Write ("Manager: {0} {1},\n age: {2}{3} Phone: {4} {5}", manFirstName, manLastName, manAge, Environment.NewLine, ManPhone, Environment.NewLine);
			Console.WriteLine ("-------------------------------------------------------------------");
		}
	}
}
