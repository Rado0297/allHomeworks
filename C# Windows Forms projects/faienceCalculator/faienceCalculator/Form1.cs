using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace faienceCalculator
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            double widthBath = Convert.ToDouble(textBox1.Text);
            double lengthBath = Convert.ToDouble(textBox2.Text);
            double heightBath = Convert.ToDouble(textBox3.Text);
            double widthDoor = Convert.ToDouble(textBox4.Text);
            double heightDoor = Convert.ToDouble(textBox5.Text);
            double S;
            double allArea;

            //S = P * h 
            S = (2 * widthBath + 2 * lengthBath) * heightBath;

            allArea = ((S - (widthDoor * heightDoor)));

            label8.Text = Convert.ToString(allArea)  + " square meters.";
        }

        private void button1_Click(object sender, EventArgs e)
        {
            textBox1.Text = "";
            textBox2.Text = "";
            textBox3.Text = "";
            textBox4.Text = "";
            textBox5.Text = "";
        }
    }
}
