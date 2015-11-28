using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace currencyConverter
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (checkBox1.Checked)
            {
                MessageBox.Show("1 GBP is " + textBox1.Text + " levs", "Warning!", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
                checkBox2.Enabled = false;
                checkBox3.Enabled = false;
                checkBox4.Enabled = false;
            }
            else if (checkBox2.Checked)
            {   
                MessageBox.Show("1 USD is " + textBox2.Text + " levs", "Warning!", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
                checkBox1.Enabled = false;
                checkBox3.Enabled = false;
                checkBox4.Enabled = false;
            }
            else if (checkBox3.Checked)
            {
                MessageBox.Show("1 SWF is " + textBox3.Text + " levs", "Warning!", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
                checkBox1.Enabled = false;
                checkBox2.Enabled = false;
                checkBox4.Enabled = false;
            }
            else if(checkBox4.Checked)
            {
                MessageBox.Show("1 Euro is " + textBox4.Text + " levs", "Warning!", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
                checkBox1.Enabled = false;
                checkBox2.Enabled = false;
                checkBox3.Enabled = false;
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (checkBox1.Checked && textBox5.Text != " ")
            {
                double GBP = Math.Round(Convert.ToDouble(textBox5.Text) / Convert.ToDouble(textBox1.Text), 3);
                MessageBox.Show("For amount of " + textBox5.Text + " levs you will recieve " + GBP + " GBP", "Warning!", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
            }

            if (checkBox2.Checked && textBox5.Text != " ")
            {
                double USD = Math.Round(Convert.ToDouble(textBox5.Text) / Convert.ToDouble(textBox2.Text), 3);
                MessageBox.Show("For amount of " + textBox5.Text + " levs you will recieve " + USD + " USD", "Warning!", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
            }

            if (checkBox3.Checked && textBox5.Text != " ")
            {
                double SWF = Math.Round(Convert.ToDouble(textBox5.Text) / Convert.ToDouble(textBox3.Text), 3);
                MessageBox.Show("For amount of " + textBox5.Text + " levs you will recieve " + SWF + " SWF", "Warning!", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
            }

            if (checkBox4.Checked && textBox5.Text != " ")
            {
                double EURO = Math.Round(Convert.ToDouble(textBox5.Text) / Convert.ToDouble(textBox4.Text), 3);
                MessageBox.Show("For amount of " + textBox5.Text + " levs you will recieve " + EURO + " Euro", "Warning!", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
            }

            checkBox1.Enabled = true;
            checkBox2.Enabled = true;
            checkBox3.Enabled = true;
            checkBox4.Enabled = true;
        }
    }
}
