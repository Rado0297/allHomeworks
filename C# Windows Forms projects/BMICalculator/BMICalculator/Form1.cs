using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace BMICalculator
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            double BMI;
            double weight = Convert.ToDouble(textBox1.Text);
            double height = Convert.ToDouble(textBox2.Text);

            BMI = Math.Round(weight / (height * height), 3);

            label5.Text = Convert.ToString(BMI);

            if(BMI < 19)
            {
                MessageBox.Show("Your weigth is under normal values.", "Warning!", MessageBoxButtons.OK);
            }
            else if(BMI >= 19.00 && BMI < 25.00)
            {
                MessageBox.Show("Your weight is perfect.It's in the normal values.", "Warning!", MessageBoxButtons.OK);
            }
            else if(BMI >= 25.00 && BMI <= 30.00)
            {
                MessageBox.Show("Your weight is above normal values.", "Warning!", MessageBoxButtons.OK);
            }
            else
            {
                MessageBox.Show("Your weight is much above normal values (obesity).", "Warning!", MessageBoxButtons.OK);
            }
        }
    }
}
