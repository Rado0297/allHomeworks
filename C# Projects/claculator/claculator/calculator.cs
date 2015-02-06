using System;

namespace claculator
{
    class calculator
    {
        static void Main(string[] args)
        {
            double result;

            Console.WriteLine("Enter first number: ");
            double firstNumber = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter second number: ");
            double secondNumber = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter type of operation (+ , - , * , /): ");
            string operation = Console.ReadLine();

            switch (operation)
            {
                case "+": 
                    result = firstNumber + secondNumber;
                    Console.WriteLine("Sum is: " + result);
                    Console.WriteLine("Wait a few seconds for automatic exit of app.");
                    break;
                case "-":
                    result = firstNumber - secondNumber;
                    Console.WriteLine("Result is: " + result);
                    Console.WriteLine("Wait a few seconds for automatic exit of app.");
                    break;
                case "*":
                    result = firstNumber * secondNumber;
                    Console.WriteLine("Multiple is: " + result);
                    Console.WriteLine("Wait a few seconds for automatic exit of app.");
                    break;
                case "/":
                    result = firstNumber / secondNumber;
                    Console.WriteLine("Devision result is: " + result);
                    Console.WriteLine("Wait a few seconds for automatic exit of app.");
                    break;
                default: 
                    Console.WriteLine("Wrong operation!");
                    Console.WriteLine("Wait a few seconds for automatic exit of app.");
                    break;
            }

            System.Threading.Thread.Sleep(50000);
        }
    }
}
