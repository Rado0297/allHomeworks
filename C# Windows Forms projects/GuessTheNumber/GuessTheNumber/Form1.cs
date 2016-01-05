using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace GuessTheNumber
{
    public partial class Form1 : Form
    {
        double number;
        int tries = 10;
        bool button1WasClicked;

        public Form1()
        {
            InitializeComponent();
            Random rnd = new Random();
            //get random number from 0 to 60
            number = rnd.Next(60);

            label3.Text = Convert.ToString(tries);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            button1WasClicked = true;

            if (button1WasClicked)
            {
                tries = tries - 1;
                label3.Text = Convert.ToString(tries);
                button1WasClicked = false;
            }

            double suggestion = Convert.ToDouble(textBox1.Text);
            

            if (number == suggestion)
            {
                label4.Text = "You guess the number";
            }
            else if (number > suggestion) {
                label4.Text = "Number is greater";
            }
            else if(number < suggestion)
            {
                label4.Text = "Number is lower";
            }

            if(tries < 1)
            {
                button1.Enabled = false;
            }

            if(tries == 0)
            {
                button2.Visible = true;
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            tries = 10;
            label3.Text = Convert.ToString(tries);

            if (tries > 0)
            {
                button1.Enabled = true;
            }
            button2.Visible = false;
        }
    }
}
